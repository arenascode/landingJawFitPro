import clientDaoMongoDb from "../daos/purchase.mongoDao.js";

class UsersRepository {
  constructor(daoSelected) {
    this.dao = daoSelected;
  }

  async getClients() {
    return await this.dao.getAllClients();
  }

  async newClient(dataNewUser) {
    return this.dao.newClient(dataNewUser);
  }

}

const clientRepository = new UsersRepository(clientDaoMongoDb)


export default clientRepository;
