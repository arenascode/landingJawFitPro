import mongoose from "mongoose"

const clientsCollection = "clients"
const clientsSchema = mongoose.Schema(
  {
    nombre: { type: String, require: true },
    email: { type: String, require: true },
    telefono: { type: String, require: true },
    cedula: { type: Number, require: true },
    ciudad: { type: String, require: true },
    departamento: { type: String, require: true },
    direccion: { type: String, require: true },
    aditionalData: { type: String, require: false },
    kit: {type: String, required: true},
    valor_compra: { type: Number, require: true },
    fecha_compra: { type: String, require: true },
  },
  { versionKey: false }
);

const clientsModel = mongoose.model(clientsCollection, clientsSchema)
export default clientsModel