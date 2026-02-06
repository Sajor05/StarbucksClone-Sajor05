import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connection() {
  const db = process.env.MONGO_URI || "mongodb://localhost:27017";
  try {
    await mongoose.connect(db);
    console.log(`Conectado exitosamente`);
  } catch (error) {
    console.log(error);
  }
}
