import { phoneNumberId, wtspToken } from "../config/auth.config.js";
import axios from "axios"

class WhatsappService {

  async sendConfirmationMessage(client) {
    
    console.log({wtspToken});
    console.log({phoneNumberId});
    
    const whatsappToken = wtspToken
    const originPhone = phoneNumberId;
  
    try {
      console.log({client});
      const nameClient = client.nombre.split(" ")
      const primerNombre = nameClient[0]
      console.log({primerNombre});
      
      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${originPhone}/messages`,
        {
          messaging_product: "whatsapp",
          to: `57${client.telefono}`,
          type: "template",
          template: {
            name: "confirmacion_datos_compra",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", parameter_name: "nombre_cliente", text: primerNombre },
                  { type: "text",parameter_name: "producto", text: client.producto },
                  { type: "text",parameter_name: "precio", text: client.valor_compra },
                  { type: "text",parameter_name: "ciudad", text: client.ciudad },
                  { type: "text",parameter_name: "departamento", text: client.departamento },
                  { type: "text",parameter_name: "direccion", text: client.direccion },
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
      console.log({response});
      
      return response.data;
    } catch (error) {
      console.error(
        "Error al enviar mensaje de WhatsApp:",
        error.response?.data || error.message
      );
    }
  }
}

const whatsappService = new WhatsappService

export default whatsappService