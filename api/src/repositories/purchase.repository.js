import { ReachFrequencyEstimatesCurve } from "facebook-nodejs-business-sdk";
import clientDaoMongoDb from "../daos/purchase.mongoDao.js";

class UsersRepository {
  
  constructor(daoSelected) {
    this.dao = daoSelected;
  }

  async getClients() {
    return await this.dao.getAllClients();
  }
  async findClientByPhoneNumber(phoneClientNumber) {
    return await this.dao.findClientByPhoneNumber(phoneClientNumber);
  }

  async newClient(dataNewUser) {
    return await this.dao.newClient(dataNewUser);
  }

  async updateClient(orderNumber, dataToUpdate) {
    return await this.dao.updateClient(orderNumber, dataToUpdate)
  }

  async findClientsByOrderStatus(status) {

    return await this.dao.findClientsByStatus(status)
  }
} 

const clientRepository = new UsersRepository(clientDaoMongoDb)


export default clientRepository;
