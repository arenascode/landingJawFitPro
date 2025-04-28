import { wtspToken } from "../config/auth.config.js";
import whatsappService from "../services/whatsapp.service.js";
import clientService from "../services/purchase.service.js";
import mailService from "../services/mail.service.js";

export async function verifyWhatsappWebhook(req, res) {
  console.log("📩 Webhook recibido:", JSON.stringify(req.body, null, 2));

  const VERIFY_TOKEN = wtspToken;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verified!");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
}

export async function handleWhatsappWebhook(req, res) {
  console.log("📩 Petición entrando desde WTSP");

  const body = req.body;
  const entry = body.entry?.[0];
  const changes = entry?.changes?.[0];

  if (!changes) return res.sendStatus(200);

  const value = changes.value;

  // --- Diferenciar si viene un "mensaje" o un "status" ---
  if (value.messages) {
    const message = value.messages[0];
    const contacts = value.contacts?.[0];
    const from_customerName = contacts?.profile?.name;
    const from_number = message?.from;

    if (!message || !from_number) {
      console.log("⚠️ Mensaje sin datos suficientes.");
      return res.sendStatus(200);
    }

    if (message.type === "button") {
      const payload = message.button.payload;

      if (payload === "Sí, Confirmo") {
        console.log(`✅ Pedido confirmado por ${from_customerName}`);
        await clientService.updateClientStatusOrder(from_number, {
          ultima_accion: "pedido_confirmado",
        });

        await whatsappService.thanksForConfirmDataMessage(
          from_customerName,
          from_number
        );
      }

      if (payload === "Corregir Dirección") {
        console.log(
          `✏️ Pedido necesita corrección de dirección: ${from_customerName}`
        );
        await whatsappService.correctAdressMessage(
          from_customerName,
          from_number
        );
      }
    }

    if (message.type === "text") {
      console.log("✏️ Recibido mensaje de texto");

      const messageText = message.text.body.toLowerCase();
      const direccionMatch = messageText.match(
        /direcci[oó]n exacta[:\-]\s*([^,]+)/i
      );
      const datosAdicionalesMatch = messageText.match(
        /datos adicionales[:\-]\s*(.+)/i
      );

      const nuevaDireccion = direccionMatch ? direccionMatch[1].trim() : null;
      const nuevosDatosAdicionales = datosAdicionalesMatch
        ? datosAdicionalesMatch[1].trim()
        : null;

      // ⬇️ Consultar estado actual del cliente
      const client = await clientService.findClientByPhone(from_number);

      if (!client) {
        console.error("❌ Cliente no encontrado");
        return res.sendStatus(404);
      }

      if (client.ultima_accion === "esperando_direccion_corregida") {
        // Cliente debía corregir su dirección

        if (nuevaDireccion || nuevosDatosAdicionales) {
          // ✅ Corrigió correctamente
          const dataToUpdate = {};
          if (nuevaDireccion) dataToUpdate.direccion = nuevaDireccion;
          if (nuevosDatosAdicionales)
            dataToUpdate.datos_adicionales = nuevosDatosAdicionales;
          dataToUpdate.ultima_accion = "direccion_corregida";

          await clientService.updateClientStatusOrderAfterChangeAdress(
            from_number,
            dataToUpdate
          );

          await whatsappService.sendTextMessage(
            from_number,
            "✅ ¡Gracias por enviarnos la corrección! Actualizamos tus datos y en breve te enviaremos tu pedido. 🚚"
          );
        } else {
          // ⚠️ No envió los datos correctamente
          await whatsappService.sendTextMessage(
            from_number,
            "⚠️ No pudimos identificar los datos corregidos. Por favor asegúrate de seguir el formato: Dirección exacta: [nueva dirección], Datos adicionales: [indicaciones]."
          );
        }
      } else {
        // ✉️ Cliente no estaba en flujo de corrección, solo escribió espontáneamente
        console.log("✉️ Mensaje espontáneo recibido");

        // await whatsappService.sendTextMessage(
        //   from_number,
        //   "🙌 ¡Recibimos tu mensaje! Un asesor te responderá pronto para ayudarte. 🧡"
        // );
        const clientMessage = message.text.body
        // 📧 Notificarte por email
        await mailService.sendMailToNotifyNewMessage( from_number, from_customerName, clientMessage);
      }
    }

  }

  // --- Si viene un status (entregado, enviado, leído), simplemente ignorarlo ---
  if (value.statuses) {
    console.log("✅ Status recibido:", value.statuses[0].status);
  }

  res.sendStatus(200);
}

