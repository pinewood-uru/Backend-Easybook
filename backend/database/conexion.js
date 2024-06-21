import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const urlDb = process.env.MONGODB_URL;

export const conectarDB = () => {
    return mongoose
        .connect(urlDb)
        .then(() => {
            console.log("Conectado a la DB!");
        })
        .catch((error) => {
            console.log("Error conectando a la base de datos", error);
        });
}