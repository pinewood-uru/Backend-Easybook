import { ModeloCliente } from "../database/modelo/modelocliente.js";

export const modificarCliente = (req, res, next) => {
    const idCliente = req.params.id;
    const { nombre, apellido, horario, personas } = req.body;

    const datosNuevos = {};

    if (nombre) datosNuevos.nombre = nombre;
    if (apellido) datosNuevos.apellido = apellido;
    if (horario) datosNuevos.horario = horario;
    if (personas) datosNuevos.personas = personas;

    ModeloCliente.updateOne({ id: idCliente }, datosNuevos)
    .then((data) => {
        if (data.matchedCount === 0) {
            throw new Error(`No se ha podido modificar el cliente con id ${idCliente}`);
        }
        res.json({ message: `Se ha modificado el cliente con id ${idCliente}` })
    })
    .catch((error) => {
        next(error);
    });
}