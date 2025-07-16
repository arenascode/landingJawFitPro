import { phoneNumberId, wtspToken } from "../config/auth.config.js";
import axios from "axios";
import clientService from "./purchase.service.js";

class WhatsappService {
  //first template message after client purchase on landing
  async sendConfirmationMessage(client) {
    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      const nameClient = client.nombre.split(" ");
      const primerNombre = nameClient[0];
      // const prefixOrderNumber = client.numero_orden.slice(0, 2);
      // const message =
      //   prefixOrderNumber === "AV"
      //     ? "hayas decidido mejorar tu descanso y cuidar de tus ojos con nuestras gafas. Estás a un paso de transformar tus noches."
      //     : "hayas decidido potenciar tu atractivo facial con JawFit-Pro 💪. Estás a un paso de transformar tu mandíbula de forma natural y efectiva.";
      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: client.telefono,
          type: "template",
          template: {
            name: "confirmacion_datos_compra",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    parameter_name: "nombre_cliente",
                    text: primerNombre,
                  },
                  // {
                  //   type: "text",
                  //   parameter_name: "mensaje",
                  //   text: message,
                  // },
                  {
                    type: "text",
                    parameter_name: "producto",
                    text: client.producto,
                  },
                  {
                    type: "text",
                    parameter_name: "precio",
                    text: client.valor_compra,
                  },
                  {
                    type: "text",
                    parameter_name: "ciudad",
                    text: client.ciudad,
                  },
                  {
                    type: "text",
                    parameter_name: "departamento",
                    text: client.departamento,
                  },
                  {
                    type: "text",
                    parameter_name: "direccion",
                    text: client.direccion,
                  },
                  {
                    type: "text",
                    parameter_name: "datos_adicionales",
                    text: client.datos_adicionales ?? " ",
                  },
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log({ response });
      if (response.status === 200) {
        await clientService.updateClientStatusOrder(client.telefono, {
          ultima_accion: "esperando_confirmacion",
        });
        await this.sendPurchaseNotificationToAdmin(client)
      }
      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }

  //To remind confirm order if the client doesn't confirm inmediately
  async sendConfirmationReminderMessage(order) {
    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;
    console.log({ order });

    try {
      const nameClient = order.nombre.split(" ");
      const primerNombre = nameClient[0];

      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: order.telefono,
          type: "template",
          template: {
            name: "recordatorio_confirmacion_compra",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    parameter_name: "nombre_cliente",
                    text: primerNombre,
                  },
                  {
                    type: "text",
                    parameter_name: "producto",
                    text: order.producto,
                  },
                  {
                    type: "text",
                    parameter_name: "direccion",
                    text: order.direccion,
                  },
                  {
                    type: "text",
                    parameter_name: "ciudad",
                    text: order.ciudad,
                  },
                  {
                    type: "text",
                    parameter_name: "departamento",
                    text: order.departamento,
                  },
                  {
                    type: "text",
                    parameter_name: "datos_adicionales",
                    text: order.datos_adicionales,
                  },
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log({ response });
      if (response.status === 200) {
        await clientService.updateClientStatusOrder(order.telefono, {
          ultima_accion: "esperando_confirmacion",
          recordatorio_enviado: true,
        });
      }
      return response.status;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }
  //Message to send after client confirm data purchase on Whatsapp
  async thanksForConfirmDataMessage(clientName, clientNumber) {
    console.log({ clientName });
    console.log({ clientNumber });

    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      console.log({ clientName });
      const nameClient = clientName.split(" ");
      const primerNombre = nameClient[0];
      console.log({ primerNombre });

      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: clientNumber,
          type: "template",
          template: {
            name: "agradecimiento_confirmacion_pedido",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    parameter_name: "nombre_cliente",
                    text: primerNombre,
                  },
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const clientSaved = await clientService.updateClientStatusOrder(clientNumber, {
          ultima_accion: "pedido_confirmado",
        });
        console.log(`Client saved from Wtsp.ThxForConfirm`, {clientSaved});
        
        await this.sendConfirmationPurchaseNotificationToAdmin(clientSaved)
      }
      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }

  //Message to send after client ask for confirming adress
  async correctAdressMessage(clientName, clientNumber) {
    console.log({ clientName });
    console.log({ clientNumber });

    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      console.log({ clientName });
      const nameClient = clientName.split(" ");
      const primerNombre = nameClient[0];
      console.log({ primerNombre });

      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: clientNumber,
          type: "template",
          template: {
            name: "solicitud_direccion_corregida",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    parameter_name: "nombre_cliente",
                    text: primerNombre,
                  },
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        await clientService.updateClientStatusOrder(clientNumber, {
          ultima_accion: "esperando_direccion_corregida",
        });
      }
      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }

  //message to send after client changed their adress
  async thanksForConfirmNewDataAdress(clientName, clientNumber) {
    console.log({ clientName });
    console.log({ clientNumber });

    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      console.log({ clientName });
      const nameClient = clientName.split(" ");
      const primerNombre = nameClient[0];
      console.log({ primerNombre });

      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: clientNumber,
          type: "template",
          template: {
            name: "agradecimiento_direccion_corregida",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    parameter_name: "nombre_cliente",
                    text: primerNombre,
                  },
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log({responseThanksForConfirm: response.status});
      
      if (response.status == 200) {
        const clientUpdated = await clientService.updateClientStatusOrder(clientNumber, {
          ultima_accion: "pedido_confirmado",
        });
        console.log({clientUpdatedThxForConfirm: clientUpdated});
        
        await this.sendConfirmationPurchaseNotificationToAdmin(clientUpdated)
      }
      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }

  //Message to send if the client cancel the order
  async sendCancelationMessage(clientName, clientNumber) {
    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      const nameClient = clientName.split(" ");
      const primerNombre = nameClient[0];

      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: clientNumber,
          type: "template",
          template: {
            name: "confirmacion_pedido_cancelado",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    parameter_name: "nombre_cliente",
                    text: primerNombre,
                  },
                  {
                    type: "text",
                    parameter_name: "mensaje",
                    text: message,
                  },
                  {
                    type: "text",
                    parameter_name: "producto",
                    text: client.producto,
                  },
                  {
                    type: "text",
                    parameter_name: "precio",
                    text: client.valor_compra,
                  },
                  {
                    type: "text",
                    parameter_name: "ciudad",
                    text: client.ciudad,
                  },
                  {
                    type: "text",
                    parameter_name: "departamento",
                    text: client.departamento,
                  },
                  {
                    type: "text",
                    parameter_name: "direccion",
                    text: client.direccion,
                  },
                  {
                    type: "text",
                    parameter_name: "datos_adicionales",
                    text: client.datos_adicionales ?? " ",
                  },
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const updateStatusOrder = await clientService.updateClientStatusOrder(
          clientNumber,
          { ultima_accion: "pedido_cancelado" }
        );
      }
      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de cancelación de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }

  async sendTextMessage(clientNumber, message) {
    console.log({ message });
    console.log({ clientNumber });

    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: clientNumber,
          type: "text",
          text: {
            preview_url: false,
            body: message,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }

  async sendPurchaseNotificationToAdmin(client) {
    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      const adminPhone = 573209389966;
      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: adminPhone,
          type: "template",
          template: {
            name: "aviso_nueva_compra_admin",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    parameter_name: "producto",
                    text: client.producto,
                  },
                  {
                    type: "text",
                    parameter_name: "numero_orden",
                    text: client.numero_orden
                  },
                  {
                    type: "text",
                    parameter_name: "nombre_cliente",
                    text: client.nombre,
                  },
                  {
                    type: "text",
                    parameter_name: "ciudad",
                    text: client.ciudad,
                  },
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }

  async sendConfirmationPurchaseNotificationToAdmin(client) {
    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      const adminPhone = 573209389966;
      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: adminPhone,
          type: "template",
          template: {
            name: "confirmacion_compra_admin",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  {
                    type: "text",
                    parameter_name: "producto",
                    text: client.producto,
                  },
                  {
                    type: "text",
                    parameter_name: "precio",
                    text: client.valor_compra,
                  },
                  {
                    type: "text",
                    parameter_name: "nombre_cliente",
                    text: primerNombre,
                  },
                  {
                    type: "text",
                    parameter_name: "cedula_cliente",
                    text: client.cedula,
                  },
                  {
                    type: "text",
                    parameter_name: "telefono_cliente",
                    text: client.telefono,
                  },
                  {
                    type: "text",
                    parameter_name: "ciudad",
                    text: client.ciudad,
                  },
                  {
                    type: "text",
                    parameter_name: "departamento",
                    text: client.departamento,
                  },
                  {
                    type: "text",
                    parameter_name: "direccion",
                    text: client.direccion,
                  },
                  {
                    type: "text",
                    parameter_name: "datos_adicionales",
                    text: client.datos_adicionales ?? " ",
                  },
                  {
                    type: "text",
                    parameter_name: 'fecha_pedido',
                    text: client.fecha_compra
                  }
                ],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer ${whatsappToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }
}

const whatsappService = new WhatsappService();

export default whatsappService;
