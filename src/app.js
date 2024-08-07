const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.routes"); //<=todas las rutas

const app = express();

// Middleware para procesar formularios
app.use(express.urlencoded({ extended: true }));

/* ------MIDDLEWARES---------------------------------------------------------- */
/* middleware para aceptar jsons */
app.use(express.json());
/* ----------------------CORS----------------------------------------- */
/* ----------------------CORS----------------------------------------- */
app.use(cors());
/* -----------------------RUTAS------------- */
/* Para los endpoints */
app.use("", routes); 

module.exports =  app;
