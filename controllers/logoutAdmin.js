import { ModeloAdmin} from "../database/modelo/modelocliente.js";

export const logoutAdmin = (req, res, next) => {

    const token = req.headers["authorization"]
    const admin = await ModeloAdmin.findOne({ session: token });

    if (admin) {
        admin.session = null;
        await admin.save();
        res.json({ message: "Se ha cerrado la sesion" });
    } else {
        next(new Error("No se ha podido cerrar la sesion"));
    }
}