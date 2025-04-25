import { wtspToken } from "../config/auth.config.js";
import util from "util";


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
  console.log({ value: body.entry?.[0].changes?.[0]?.value });
  const entry = req.body.entry?.[0]
  
  console.log(
    util.inspect(entry, { showHidden: false, depth: null, colors: true })
  );

  console.log({ messageObject: body.entry?.[0].changes?.[0]?.value?.messages?.[0]?.text });
  
  console.log({payloadButton: body.entry?.[0].changes?.[0]?.value?.messages?.[0]?.button?.payload});
  console.log({bodyObject: body.object});
  
  try {
    if (body.object) {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const message = changes?.value?.messages?.[0];

      if (message?.type === "button") {
        const from = message.from;
        const payload = message.button.payload;

        if (payload === "Sí, Confirmo") {
          // ✔️ Cliente confirmó
          console.log(`✅ Pedido confirmado por ${from}`);
          //Envía otro mensaje de agradecimiento wtspService

          //Notifica al admin que confirmó los datos mail service
          // Aquí podrías actualizar la DB, enviar otro mensaje, etc.
        }

        if (payload === "Corregir dirección") {
          // ✏️ Cliente quiere corregir su dirección
          console.log(`✏️ Pedido necesita corrección de dirección: ${from}`);
          // Podés reenviarle un formulario, o contactarlo por WhatsApp
        }
      }
    }

    res.sendStatus(200);
  } catch (error) {
    console.error("❌ Error procesando webhook:", error);
    res.sendStatus(500);
  }
}