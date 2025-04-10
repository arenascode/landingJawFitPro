import contactService from "../services/contact.service.js";

export async function newContactForm(req, res, next) {

  const { nombre, email, telefono, mensaje } = req.body
  
  if (!nombre || !email || !telefono || !mensaje) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const contactServiceResponse = await contactService.saveContactForm(req.body)

  if (contactServiceResponse.success) {
    return res.status(200).json({message: "Gracias por escribirnos. En breve un miembro de nuestro equipo se pondrá en contacto contigo" });
  } else {
    return res.status(500).json({message: "Hubo un error. Intentalo de nuevo más tarde."})
  }
}