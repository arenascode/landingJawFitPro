import { CNX_STR } from "./config/mongo.config.js";
import mongoose from "mongoose";

const environment = process.env.NODE_ENV || "dev";

export const connectDB = async () => {
  try {
    await mongoose
    .connect(CNX_STR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`connected to MongoDB in ${environment} mode`)
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`)
    process.exit(1)
  }
}

