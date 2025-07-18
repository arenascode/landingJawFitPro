import { metaJFPixel, metaAVPixel, metaTkn } from "../config/auth.config.js";
import Client from "../entities/Client.js";
import clientRepository from "../repositories/purchase.repository.js";
import mailService from "./mail.service.js";
import adsSdk, { AdAccount } from "facebook-nodejs-business-sdk";
import bizSdk from "facebook-nodejs-business-sdk";
import whatsappService from "./whatsapp.service.js";

class ClientService {
  async newClient(clientData) {
    console.log({ clientData });

    const newClient = new Client(clientData);

    console.log({ newClient });

    try {
      const clientSaved = await clientRepository.newClient(newClient);
      console.log({ clientSaved });

      if (clientSaved) {
        const sendMailToAdmin = await mailService.sendMailToNotifyPurchase(
          newClient
        );

        const sendMailToClient =
          await mailService.sendMailToConfirmClientPurchase(newClient);

        const sendWhatsappToClient =
          await whatsappService.sendConfirmationMessage(clientSaved);
        console.log({ sendWhatsappToClient });

        const sendWhatAppToAdmin = await whatsappService.sendPurchaseNotificationToAdmin(clientSaved)
        
        //*FB PIXEL *//
        console.log("log in pixel section");
        // const metaAds = adsSdk;
        // const Content = metaAds.Content;
        // const CustomData = metaAds.CustomData;
        // const DeliveryCategory = metaAds.DeliveryCategory;
        // const EventRequest = metaAds.EventRequest;
        // const UserData = metaAds.UserData;
        // const ServerEvent = metaAds.ServerEvent;

        // const access_token = metaTkn;
        // //check the prefix of the order number to know what product is and assign the pixel_id to the API
        // const prefixOrderNumber = newClient.numero_orden.slice(0, 2);
        // const pixel_id = prefixOrderNumber === "AV" ? metaAVPixel : metaJFPixel;

        // const api = bizSdk.FacebookAdsApi.init(access_token);
        // let current_timestamp = Math.floor(new Date() / 1000);
        // const userData = new UserData()
        //   .setEmails([clientSaved.email])
        //   .setPhones([clientSaved.telefono])
        //   // It is recommended to send Client IP and User Agent for Conversions API Events.
        //   .setClientIpAddress(clientData.remoteAddress)
        //   .setClientUserAgent(clientData.headers)
        //   .setFbp(clientData.fbp)
        //   .setFbc(undefined); //* Check This!

        // const content = new Content()
        //   .setId("JFP1")
        //   .setQuantity(1)
        //   .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

        // const customData = new CustomData()
        //   .setContents([content])
        //   .setCurrency("cop")
        //   .setValue(parseInt(clientData.valorCompra));
        // console.log(userData);
        // const serverEvent = new ServerEvent()
        //   .setEventName("Purchase")
        //   .setEventTime(current_timestamp)
        //   .setUserData(userData)
        //   .setCustomData(customData)
        //   .setEventSourceUrl(
        //     prefixOrderNumber === "AV"
        //       ? "https://ambervision.focusfitshop.com/"
        //       : "https://jawfitpro.focusfitshop.com/"
        //   )
        //   .setActionSource("website");

        // const eventsData = [serverEvent];
        // const eventRequest = new EventRequest(access_token, pixel_id).setEvents(
        //   eventsData
        // );

        // eventRequest.execute().then(
        //   (response) => {
        //     console.log("Response: ", response);
        //   },
        //   (err) => {
        //     console.error("Error: ", err);
        //   }
        // );
      }
      return {
        success: true,
        message: "Purchase saved successfully",
        client: clientSaved,
      };
    } catch (error) {
      console.log("Error in purchase service");
      console.log({ error });
      return { success: false, message: error.message, client: null };
    }
  }

  async updateClientStatusOrder(clientPhone, dataToUpdate) {
    console.log({ dataToUpdate });

    try {
      const clientUpdated = await clientRepository.updateClient(
        clientPhone,
        dataToUpdate
      );
      console.log({ clientPhone });
      console.log({ clientUpdated });
      // Only send email if the data uptaded was confirmation of purchase. Not for status changed
      switch (clientUpdated.ultima_accion) {
        case "pedido_confirmado":
          //Notifica al admin que confirmó los datos mail service
          const sendNotificationMailToAdmin =
            await mailService.sendMailToNotifyWhatsappConfirmationPurchase(
              clientUpdated
            );
          console.log({ sendNotificationMailToAdmin });
          break;
        case "direccion_corregida":
          const sendNotificacionMailToAdmin =
            await mailService.sendMailToConfirmClientPurchase(clientUpdated);
          break;
        default:
          return {
            success: true,
            message: "Order updated successfully",
            clientUpdated: clientUpdated,
          };
      }
      return {
        success: true,
        message: "Order updated successfully",
        clientUpdated: clientUpdated,
      };
    } catch (error) {
      console.log("Error in purchase service");
      console.log({ error });
      return { success: false, message: error.message, clientUpdated: null };
    }
  }

  // async updateClientStatusOrderAfterChangeAdress(orderNumber, dataToUpdate) {
  //   console.log({ dataToUpdate });

  //   try {
  //     const clientUpdated = await clientRepository.updateClient(
  //       orderNumber,
  //       dataToUpdate
  //     );
  //     console.log({ orderNumber });
  //     console.log({ clientUpdated });

  //     if (clientUpdated) {
  //       //Notifica al admin que confirmó los datos mail service
  //       const sendNotificationMailToAdmin =
  //         await mailService.sendMailToNotifyWhatsappConfirmationPurchase(
  //           clientUpdated
  //         );
  //       const nameClient = clientUpdated.nombre.split(" ");
  //       const firstNameClient = nameClient[0];
  //       const notifyAdressChangedToClient =
  //         await whatsappService.thanksForConfirmNewDataAdress(
  //           firstNameClient,
  //           orderNumber
  //         );
  //       console.log({ sendNotificationMailToAdmin });
  //       console.log({ notifyAdressChangedToClient });
  //     }
  //     return {
  //       success: true,
  //       message: "Purchase confirmed on whatsapp successfully",
  //       clientUpdated: clientUpdated,
  //     };
  //   } catch (error) {
  //     console.log("Error in purchase service");
  //     console.log({ error });
  //     return { success: false, message: error.message, clientUpdated: null };
  //   }
  // }

  async getClients() {
    try {
      const clients = await clientRepository.getClients();
      return clients;
    } catch (error) {
      return error.message;
    }
  }

  async findClientByPhone(phoneNumber) {
    try {
      return await clientRepository.findClientByPhoneNumber(phoneNumber);
    } catch (error) {
      return error.message;
    }
  }

  async findClientsByStatus(status) {
    try {
      const orderStatusFiltered =
        await clientRepository.findClientsByOrderStatus(status);

      console.log({ orderStatusFiltered });

      // return await clientRepository.findClientsByOrderStatus(status)
      return orderStatusFiltered;
    } catch (error) {
      return error.message;
    }
  }
}

const clientService = new ClientService();
export default clientService;
