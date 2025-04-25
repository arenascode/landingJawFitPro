import { Router } from "express"
import { routerSessions } from "./sessions.router.js"
import { routerPurchase} from "./purchase.router.js"
import { routerContact } from "./contact.router.js"
import routerWebhook from "./webhook.router.js"

export const apiRouter = Router()

apiRouter.use('/sessions', routerSessions)
apiRouter.use('/purchase', routerPurchase)
apiRouter.use('/contact', routerContact)
apiRouter.use('/webhook', routerWebhook)
