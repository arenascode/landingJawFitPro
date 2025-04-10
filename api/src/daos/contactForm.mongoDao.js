import contactFormModel from "../models/contact.model.js";

class FormContactMongoDao {
  constructor() {
    this.collection = contactFormModel;
  }

  async newContact(formData) {
    return await this.collection.create(formData);
  }
}

const formContactDaoMongoDb = new FormContactMongoDao();
export default formContactDaoMongoDb;
