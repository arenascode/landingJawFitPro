import adminRepository from "../repositories/admin.repository.js";
import { isValidPassword } from "../utils/cryptography.js";

class AdminService {

  async loginAdmin(adminDataReceived) {
    
    try {
      const adminSaved = await adminRepository.findAdmin(adminDataReceived.username)

      if (adminSaved) {

        const passwordCheck = isValidPassword(adminDataReceived.password, adminSaved.password)
        
        if (!passwordCheck) {
          throw new Error('invalid data. try again')
        }
        delete adminSaved.password
        delete adminSaved.id
        return adminSaved
      } else {
        return null
      }
    } catch (error) {
      return error.message
    }
  }
}

const adminService = new AdminService()

export default adminService