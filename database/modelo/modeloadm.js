import { Schema, model } from "mongoose";

const schemaAdmin = new Schema({
    id: { type: Number, unique: true },
    nombre: String,
    apellido: String,
    email: { type: String, unique: true },
    password: String,
    session: String,
});

export const ModeloAdmin = model("Admin", schemaAdmin)