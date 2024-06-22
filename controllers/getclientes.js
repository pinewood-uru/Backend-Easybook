import { ModeloCliente } from "../database/modelo/modelocliente.js";
import { formatearFiltrosDB } from "../util/util.js";

export const getClientes = (req, res, next) => {
    const filtroNombre = formatearFiltrosDB(req.query.nombre)
    const filtroHorario = formatearFiltrosDB(req.query.horario)

    const filtros = {}
    if (filtroNombre) filtros.nombre = filtroNombre;
    if (filtroHorario) filtros.horario = filtroHorario;

    ModeloCliente.find(filtros)
        .then((data) => {
            console.log("get clientes", data)
            if (data.lenght === 0) {
                res.json([])
            } else {
                res.json(data)
            }
        })
        .catch((error) => {
            next(error)
        })
}