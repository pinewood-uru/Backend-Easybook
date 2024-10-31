import express from "express";
import cors from "cors";
import "dotenv/config";

import { conectarDB } from "./database/conexion.js";

import { getClientes } from "./controllers/getclientes.js";
import { getClientebyID } from "./controllers/getclientebyid.js";
import { postCliente } from "./controllers/postcliente.js";
import { modificarCliente } from "./controllers/modificarcliente.js";
import { deleteCliente } from "./controllers/deletecliente.js";

import { postAdmin } from "./controllers/postadmin.js";
import { loginAdmin } from "./controllers/loginadmin.js";
import { getAdmins } from "./controllers/getAdmins.js";
import { logoutAdmin } from "./controllers/logoutAdmin.js";
import { controlarSession } from "./middlewares/controlarsession.js";




import { mostrarDatos } from "./middlewares/mostrarDatos.js";
import { manejadorErrores } from "./middlewares/manejoErrores.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
await conectarDB();

// MIDDLEWARE > DATOS --> En cada llamada para por el middleware para poder verlo en consola
app.use(mostrarDatos)


// 1° Endpoint
app.get("/", (req, res) => {
    res.send("Api Reservas Easybook");
})


// Administrador 

app.post("/loginadmin", loginAdmin)


app.use(controlarSession)

app.post("/logoutadmin", logoutAdmin)
app.post("/registroadmin", postAdmin)
app.get("/administradores", getAdmins)
// Clientes
app.get("/clientes", getClientes)
app.get("/cliente/:id", getClientebyID)
app.post("/nuevocliente", postCliente)
app.put("/modificarcliente/:id", modificarCliente)
app.delete("/cliente/:id", deleteCliente)

// MIDDLEWARE ERRORES
app.use(manejadorErrores)


app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});


