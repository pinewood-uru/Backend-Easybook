import { ModeloAdmin } from "../database/modelo/modeloadm.js";
import { formatearFiltrosDB } from "../util/util.js";

export const getAdmins = (req, res, next) => {
    const filtroRestaurante = formatearFiltrosDB(req.query.restaurante)
    const filtroemail = formatearFiltrosDB(req.query.email)

    const filtros = {}
    if (filtroRestaurante) filtros.restaurante = filtroRestaurante;
    if (filtroemail) filtros.email = filtroemail;

    ModeloAdmin.find(filtros)
        .then((data) => {
            console.log("get administradores", data)
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