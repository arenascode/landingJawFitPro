import { wtspToken } from "../config/auth.config.js";


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
  console.log({ buttonObject: body.entry?.[0].changes?.[0]?.value?.messages?.[0]?.button });
  
  console.log({ messageObject: body.entry?.[0].changes?.[0]?.value?.messages?.[0]?.text });
  
  console.log({payloadButton: body.entry?.[0].changes?.[0]?.value?.messages?.[0]?.button?.payload});
  
  try {
    if (body.object) {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const message = changes?.value?.messages?.[0];

      if (message?.type === "button") {
        const from = message.from;
        const payload = message.button.payload;

        if (payload === "S") {
          // ✔️ Cliente confirmó
          console.log(`✅ Pedido confirmado por ${from}`);
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