import { ModeloCliente } from "../database/modelo/modelocliente.js";

export const getClientebyID = (req, res, next) => {
    const idCliente = req.params.id;
    ModeloCliente.findOne({ id: idCliente })
    .then((data) => {
        if (!data) {
            throw new Error(`No se ha encontrado el cliente con id ${idCliente}`);
        } else {
            res.json(data);
        }
    })
    .catch((error) => {
        next(error);
    });
}