import clientsModel from "../models/clients.model.js";

class PurchaseMongoDao {

  constructor() {
    this.collection = clientsModel
  }

  async getAllClients() {
    return await this.collection.find()
  }

  async newClient(dataNewClient) {
    return await this.collection.create(dataNewClient)
  }

  async findClientByPhoneNumber(clientPhone) {
    return await this.collection.findOne({telefono: clientPhone})
  }

  async updateClient(phoneClientNumber, dataToUpdate) {
    try {
       const updatedClient = await this.collection.findOneAndUpdate(
         { telefono: phoneClientNumber },
         dataToUpdate,
         { new: true }
       );

       if (!updatedClient) {
         throw new Error("Cliente no encontrado para actualizar");
       }

       return updatedClient;
      
    } catch (error) {
      console.error("Error actualizando cliente:", error.message);
    }
  }
}

const clientDaoMongoDb = new PurchaseMongoDao()
export default clientDaoMongoDb