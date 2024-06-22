import {ModeloAdmin} from "../database/modelo/modeloadm.js";

export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await ModeloAdmin.findOne({ email, password })

    if(admin){
        admin.session = Math.random().toString(36).slice(2);
        admin.save()
        .then(()=>{
            res,json({session: admin.session, user: admin})
        })
        .catch((error)=>{
            next(error)
        })
    }else{
         next(new Error("No se ha podido iniciar sesion, verifique Usuario o Contraseña"))
    }
}