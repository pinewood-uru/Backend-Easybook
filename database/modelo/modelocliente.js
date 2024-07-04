import { Schema, model } from "mongoose";

const schemaCliente = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    apellido: String,
    mail: String,
    celular: String,
    horario: String,
    personas: String,
    date: Date,
})

export const ModeloCliente = model("Cliente", schemaCliente)    