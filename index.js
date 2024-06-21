import express from "express";
import cors from "cors";
import "dotenv/config";
import { conectarDB } from "./database/conexion.js";
import { ModeloAdmin } from "./database/modelo/modeloadm.js";
import { ModeloCliente } from "./database/modelo/modelocliente.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
await conectarDB();

app.get("/", (req, res) => {
    res.send("Api Reservas Easybook");
});

app.get("/cliente", async (req, res) => {
    const IdCliente = Number(req.params.id);
    ModeloCliente.findOne({ id: IdCliente }).then((data)=>{
        console.log("data",data)
        res.send(data)
    })
    .catch((error)=>{
        console.log("error",error);
        res.status(500).send("Ocurrio un error")
    })
   
})

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});


