import formContactDaoMongoDb from "../daos/contactForm.mongoDao.js"
import mailService from "./mail.service.js"

class ContactService {

  async saveContactForm(contactData) {
    try {
      
      const newFormContactSaved = await formContactDaoMongoDb.newContact(contactData)
      console.log({newFormContactSaved});
      
      if (newFormContactSaved) {
        console.log(`is entering here`);
        
        const thanksEmail = await mailService.sendMailToThanksContact(newFormContactSaved)
        console.log({thanksEmail});
        
        if (thanksEmail.success) {
          return { success: true, message: "Mensaje y correo guardado con exito" }
        } else {
          return { success: false, message: "Hubo un error al enviar el correo de agradecimiento" }
        }
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }  }
}

const contactService = new ContactService()

export default contactService