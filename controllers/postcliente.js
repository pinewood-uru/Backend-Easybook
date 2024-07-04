import { ModeloCliente } from "../database/modelo/modelocliente.js";
import { obtenerProximoId } from "../util/util.js";

export const postCliente =async (req, res, next)=>{
    const {nombre, apellido, mail, celular, horario, personas, date} = req.body;
    const nuevoCliente = new ModeloCliente();
    nuevoCliente.id =await obtenerProximoId(ModeloCliente)
    nuevoCliente.nombre= nombre;
    nuevoCliente.apellido = apellido;
    nuevoCliente.mail = mail;
    nuevoCliente.celular = celular;
    nuevoCliente.horario = horario; 
    nuevoCliente.personas = personas;
    nuevoCliente.date = date;

      

    nuevoCliente.save()
    .then((data)=>{
        res.json({message: `Nueva reserva para id ${nuevoCliente.id}-${nuevoCliente.nombre} a las ${nuevoCliente.horario} ha sido creada con exito.`})
    })
    .catch((error)=>{
        next(error)
    })

}