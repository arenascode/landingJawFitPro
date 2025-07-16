import cron from "node-cron"
import clientService from "../services/purchase.service.js";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc.js'
import timezone from "dayjs/plugin/timezone.js"
import "dayjs/locale/es.js";
import whatsappService from "../services/whatsapp.service.js";


cron.schedule("*/30 9-22 * * *", async () => {
  console.log(
    "⏰ Ejecutando cron job: Revisando clientes que no confirmaron..."
  );
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const now = dayjs().tz("America/Bogota");
  const hour = now.hour();
  if (hour < 9 || hour >= 22) {
    console.log(
      "⏰ Fuera del horario de atención (8 AM - 9 PM). No se enviarán recordatorios."
    );
    return;
  }

  try {
    const pendingConfirmationOrders = await clientService.findClientsByStatus(
      "esperando_confirmacion"
    );
    console.log({
      pendingConfirmationOrdersLength: pendingConfirmationOrders.length,
    });

    const COLOMBIA_TIMEZONE = "America/Bogota";
    const now = dayjs().tz(COLOMBIA_TIMEZONE);
    console.log(
      "🕒 Hora actual en Colombia:",
      now.format("YYYY-MM-DD HH:mm:ss")
    );

    for (const order of pendingConfirmationOrders) {
      if (!order.fecha_compra) {
        console.warn(`⚠️ La orden de ${order.nombre} no tiene fecha_compra.`);
        continue;
      }

      const purchaseDate = dayjs(order.fecha_compra).tz(COLOMBIA_TIMEZONE);
      const minutesPassed = now.diff(purchaseDate, "minute");

      if (
        order.ultima_accion !== "recordatorio_confirmar_compra_enviado" &&
        !order.recordatorio_enviado &&
        minutesPassed >= 180
      ) {
        console.log(`📨 Enviando recordatorio a ${order.nombre}...`);

        const resStatus = await whatsappService.sendConfirmationReminderMessage(
          order
        );
        console.log({ resStatusWhatsapp: resStatus });

        if (resStatus === 200) {
          console.log(`✅ Recordatorio enviado a ${order.nombre}`);
          await clientService.updateClientStatusOrder(order.telefono, {
            ultima_accion: "recordatorio_confirmar_compra_enviado",
            recordatorio_enviado: true,
          });
        } else {
          console.warn(`⚠️ No se pudo enviar recordatorio a ${order.nombre}`);
        }
      }
    }
  } catch (error) {
    console.error("❌ Error en el cron job de recordatorios:", error);
  }
});


