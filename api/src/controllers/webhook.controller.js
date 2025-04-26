import { wtspToken } from "../config/auth.config.js";
import util from "util";
import whatsappService from "../services/whatsapp.service.js";
import clientService from "../services/purchase.service.js";

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
  console.log(`petición entrando desde WTSP`);

  const body = req.body;
  const entry = req.body.entry?.[0];
  console.log(
    util.inspect(entry, { showHidden: false, depth: null, colors: true })
  );

  try {
    if (body.object) {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const message = changes?.value?.messages?.[0];
      const contacts = changes?.value?.contacts?.[0];
      const from_customerName = contacts?.profile?.name;
      const from_number = message.from;

      if (message?.type === "button") {
        const payload = message.button.payload;

        if (payload === "Sí, Confirmo") {
          // ✔️ Cliente confirmó
          console.log(`✅ Pedido confirmado por ${from_customerName}`);
          const updatedStateOrder = await clientService.updateClientStatusOrder(from_number, {ultima_accion: "pedido_confirmado"})
          
          console.log({updatedStateOrder});
          
          //Envía otro mensaje de agradecimiento wtspService
          const sendThanksConfirmationMessage =
            await whatsappService.thanksForConfirmDataMessage(
              from_customerName,
              from_number
            );
          console.log({ sendThanksConfirmationMessage });

        }

        if (payload === "Corregir Dirección") {
          // ✏️ Cliente quiere corregir su dirección
          console.log(`✏️ Pedido necesita corrección de dirección: ${from_customerName}`);

          // Reenviar un mensaje para pedirle los datos corregidos
          const sendCorrectAdressMessage = await whatsappService.correctAdressMessage(from_customerName, from_number)
          console.log({sendCorrectAdressMessage})
        }
      }

      if (message?.type === "text") {
        console.log(`Acá debo recibir el mensaje de corrección de la dirección`);
        
          const messageText = message.text.body.toLowerCase();

          const direccionMatch = messageText.match(
            /direccion exacta[:\-]\s*([^,]+)/i
          );
          const datosAdicionalesMatch = messageText.match(
            /datos adicionales[:\-]\s*(.+)/i
          );

          const nuevaDireccion = direccionMatch
            ? direccionMatch[1].trim()
            : null;
          const nuevosDatosAdicionales = datosAdicionalesMatch
            ? datosAdicionalesMatch[1].trim()
            : null;

          if (nuevaDireccion || nuevosDatosAdicionales) {
            // Creamos el objeto dinámicamente según qué datos llegaron:
            const dataToUpdate = {};

            if (nuevaDireccion) dataToUpdate.direccion = nuevaDireccion;
            if (nuevosDatosAdicionales)
              dataToUpdate.datos_adicionales = nuevosDatosAdicionales;

            const updatedClientData = await clientService.updateClientStatusOrderAfterChangeAdress(from_number, {
              ...dataToUpdate,
              ultima_accion: "direccion_corregida",
            });

            if (updatedClientData) {
              // Enviar mensaje de confirmación
              await whatsappService.sendTextMessage(
              waId,
              "✅ ¡Gracias por enviarnos la corrección! Actualizamos tus datos y en breve te enviaremos tu pedido. 🚚"
            );
            }
            
          } else {
            await whatsappService.sendTextMessage(
              from_number,
              "⚠️ No pudimos identificar los datos corregidos. Por favor asegúrate de seguir el formato: Dirección exacta: [nueva dirección], Datos adicionales: [indicaciones]."
            );
          }
      }
    }

    res.sendStatus(200);
  } catch (error) {
    console.error("❌ Error procesando webhook:", error);
    res.sendStatus(500);
  }
}
