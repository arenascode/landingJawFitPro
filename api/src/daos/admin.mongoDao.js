import adminModel from "../models/admin.model.js";

class AdminMongoDao {
  
  constructor() {
    this.collection = adminModel
  }

  async findAdmin(email) {
    return await this.collection.findOne({email: email})
  }

  async saveNewAdmin(adminData) {
    console.log({adminData});
    return await this.collection.create(adminData)
  }
} 

const adminMongoDao = new AdminMongoDao(adminModel)

export default adminMongoDao