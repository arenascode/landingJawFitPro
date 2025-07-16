import express from "express";
import { apiRouter } from "../routes/api/api.router.js";
import { secretCookie } from "../config/cookies.config.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import { connectDB } from "../connect.js";
import "../jobs/reminders.js"
export const app = express()

connectDB()

app.use(cookieParser(secretCookie));
//*TODO -> COMMENT AGAIN AFTER TESTING
// app.use(
//   cors({
//     origin: [
//       "http://127.0.0.1:5173",
//       "http://localhost:4321",
//       "http://localhost:5173",
//       "https://77.37.63.218"
//     ],
//     methods: "GET,HEAD,PUT,POST,DELETE",
//     credentials: true,
//   })
// );
app.use(express.json());
app.use('/static', express.static("public"))
app.use(express.urlencoded({ extended: true })); // This line allows that the server can interpret the best wall all of data that travel from URL and map it correctly in the req.query


app.use('/api', apiRouter)
app.get("*", (req, res, next) => {
  res.status(404).send("Unknown Route: " + req.url);
});