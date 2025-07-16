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
    kit: { type: String, required: true },
    numero_orden: { type: String, require: true },
    valor_compra: { type: Number, require: true },
    producto: { type: String, require: true },
    datos_adicionales: { type: String, require: false },
    fecha_compra: { type: String, require: true },
    ultima_accion: {
      type: String,
      enum: [
        "esperando_confirmacion",
        "pedido_confirmado",
        "esperando_direccion_corregida",
        "direccion_corregida",
        "guia_enviada",
        "pedido_cancelado",
        "compra_guardada",
        "recordatorio_confirmar_compra_enviado"
      ],
      default: "compra_guardada"
    },
    recordatorio_enviado: {type: Boolean, default: false},
  },
  { versionKey: false }
);

const clientsModel = mongoose.model(clientsCollection, clientsSchema)
export default clientsModel