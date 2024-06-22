import { ModeloCliente } from "../database/modelo/modelocliente.js";

export const deleteCliente = (req, res, next) => {
    const IdCliente = req.params.id;
    ModeloCliente.deleteOne({ id: IdCliente })
    .then((data) => {
        if(data.deletedCount !== 1){
            throw new Error(`No se ha podido eliminar el cliente con id${IdCliente}`)
    }else{
        res.json({message: `Se ha eliminado el cliente con id ${IdCliente}`})
    }
    }).catch((error) => {
        next(error)
    })
}

