import dotenv from "dotenv"
import { app } from "./app/app.js";
import { PORT } from "./config/server.config.js";
dotenv.config()

const connectedServer = app.listen(PORT, () => console.log(`Listening on ${PORT} Port`))
export default connectedServer