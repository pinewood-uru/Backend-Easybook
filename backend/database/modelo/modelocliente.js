import { Schema, model } from "mongoose";

const schemaCliente = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    tipo: String,
    horario: String,
})

export const ModeloCliente = model("Cliente", schemaCliente)    