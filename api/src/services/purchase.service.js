import { metaPixel, metaTkn } from "../config/auth.config.js";
import clientDaoMysql from "../daos/purchase.mySqlDao.js";
import Client from "../entities/Client.js";
import clientRepository from "../repositories/purchase.repository.js";
import mailService from "./mail.service.js";
import adsSdk, { AdAccount } from "facebook-nodejs-business-sdk";
import bizSdk from "facebook-nodejs-business-sdk"

class ClientService {

  async newClient(clientData) {
    const newClient = new Client(clientData.Nombre, clientData.Email, clientData.Telefono, clientData.Cedula, clientData.Ciudad, clientData.Departamento, clientData.Direccion, clientData.datosAdicionales, clientData.valorCompra)
     
    try {
      const clientSaved = await clientRepository.newClient(newClient)
      if (clientSaved) {
        const sendMail = await mailService.sendMailToNotifyPurchase(newClient)
        //*FB PIXEL *//
        console.log('log in pixel section');
        const metaAds = adsSdk
        const Content = metaAds.Content;
        const CustomData = metaAds.CustomData;
        const DeliveryCategory = metaAds.DeliveryCategory;
        const EventRequest = metaAds.EventRequest;
        const UserData = metaAds.UserData;
        const ServerEvent = metaAds.ServerEvent;

        const access_token = metaTkn;
        const pixel_id = metaPixel;
        const api = bizSdk.FacebookAdsApi.init(access_token);
        let current_timestamp = Math.floor(new Date() / 1000);
        const userData = new UserData()
          .setEmails([clientSaved.email])
          .setPhones([clientSaved.telefono])
          // It is recommended to send Client IP and User Agent for Conversions API Events.
          .setClientIpAddress(clientData.remoteAddress)
          .setClientUserAgent(clientData.headers)
          .setFbp(clientData.fbp)
          .setFbc(undefined); //* Check This!

        const content = new Content()
          .setId("JFP1")
          .setQuantity(1)
          .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

        const customData = new CustomData()
          .setContents([content])
          .setCurrency("cop")
          .setValue(69900);
        console.log(userData);
        const serverEvent = new ServerEvent()
          .setEventName("Purchase")
          .setEventTime(current_timestamp)
          .setUserData(userData)
          .setCustomData(customData)
          .setEventSourceUrl("https://jawfitpro.focusfitshop.com/")
          .setActionSource("website");

        const eventsData = [serverEvent];
        const eventRequest = new EventRequest(access_token, pixel_id).setEvents(
          eventsData
        );

        eventRequest.execute().then(
          (response) => {
            console.log("Response: ", response);
          },
          (err) => {
            console.error("Error: ", err);
          }
        );
      }
      return clientSaved
    } catch (error) {
      console.log({error});
      return error.message
    }
  }

  async getClients() {

    try {
      const clients = await clientRepository.getClients()
      return clients
    } catch (error) {
      return error.message
    }
  }
}

const clientService = new ClientService()
export default clientService