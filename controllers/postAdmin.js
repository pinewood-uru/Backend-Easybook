import { ModeloAdmin } from "../database/modelo/modeloadm.js";
import { obtenerProximoId } from "../util/util.js";

export const postAdmin = async (req, res, next) => {
    const { restaurante, sucursal, email, password } = req.body;

    try{
        const adminexistente = await ModeloAdmin.findOne({ email: email })
        if(adminexistente){ throw new Error("El correo ingresado, ya existe")
    }

    const nuevoAdmin = new ModeloAdmin()
    nuevoAdmin.id = await obtenerProximoId(ModeloAdmin)
    nuevoAdmin.restaurante = restaurante;
    nuevoAdmin.sucursal = sucursal;
    nuevoAdmin.email = email;
    nuevoAdmin.password = password;

    nuevoAdmin.save()
    .then((data) => {
        res.json({ message: `El nuevo administrador para ${restaurante} ha sido creado con exito con el corre ${email}` })
    })
    .catch((error) => {
        next(error)
    })
    }catch(error){
        next(error)
    }
}