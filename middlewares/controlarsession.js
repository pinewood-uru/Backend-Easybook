import { ModeloAdmin } from "../database/modelo/modeloadm.js";

export const controlarSession = async (req, res, next) => {
    try{
        const authHeader = req.headers["authorization"];

        if(!authHeader){
            throw {status: 401, message: "No autorizado - No hay token"}
    }
    const admin = await ModeloAdmin.findOne({session: authHeader})

    if(admin){
        req.restaurante = admin;
        next();
    }else{
        throw {status: 401, message: "Sesión no es valida"}
    }

    }catch(error){
        next(error)
    }
}