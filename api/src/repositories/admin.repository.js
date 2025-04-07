import adminMongoDao from "../daos/admin.mongoDao.js"

class AdminRepository {

  constructor (daoSelected) {
    this.dao= daoSelected
  }

  async findAdmin(email) {

    return await this.dao.findAdmin(email)
  }
}

const adminRepository  = new AdminRepository(adminMongoDao)

export default adminRepository