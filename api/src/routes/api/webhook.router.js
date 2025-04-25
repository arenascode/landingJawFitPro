import { Router } from "express";
import * as webhookController  from "../../controllers/webhook.controller.js"
const routerWebhook = Router()


routerWebhook.get('/whatsapp', webhookController.verifyWhatsappWebhook)

routerWebhook.post('/whatsapp', webhookController.handleWhatsappWebhook)

export default routerWebhook