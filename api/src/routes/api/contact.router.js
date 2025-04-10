import { Router } from "express";
import * as controllerContact from "../../controllers/contact.controller.js"
export const routerContact = Router()

routerContact.post("/", controllerContact.newContactForm)

