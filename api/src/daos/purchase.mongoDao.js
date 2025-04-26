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
    return await this.collection.findOneAndUpdate({telefono: phoneClientNumber},dataToUpdate)
  }
}

const clientDaoMongoDb = new PurchaseMongoDao()
export default clientDaoMongoDb