import { phoneNumberId, wtspToken } from "../config/auth.config.js";
import axios from "axios";

class WhatsappService {
  //first template message after client purchase on landing
  async sendConfirmationMessage(client) {
    const whatsappToken = wtspToken;
    const originPhone = phoneNumberId;

    try {
      const nameClient = client.nombre.split(" ");
      const primerNombre = nameClient[0];
      const prefixOrderNumber = client.numero_orden.slice(0, 2);
      const message =
        prefixOrderNumber === "AV"
          ? "hayas decidido mejorar tu descanso y cuidar de tus ojos con nuestras gafas. Estás a un paso de transformar tus noches."
          : "hayas decidido potenciar tu atractivo facial con JawFit-Pro 💪. Estás a un paso de transformar tu mandíbula de forma natural y efectiva.";
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

      return response.data;
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

      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
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
}

const whatsappService = new WhatsappService();

export default whatsappService;
