import mongoose from "mongoose"

const contactCollection = 'formContacts'

const formContactSchema = mongoose.Schema({
  nombre: { type: String, require: true },
  email: { type: String, require: true },
  telefono: { type: String, require: true },
  mensaje: { type: String, require: true },
}, { versionKey: false })

const formContactModel = mongoose.model(contactCollection, formContactSchema)

export default formContactModel