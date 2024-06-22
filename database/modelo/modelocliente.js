import { Schema, model } from "mongoose";

const schemaCliente = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    apellido: String,
    horario: String,
    personas: String,
})

export const ModeloCliente = model("Cliente", schemaCliente)    