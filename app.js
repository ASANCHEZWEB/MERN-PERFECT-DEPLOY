require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors  = require('cors');

//configuración de base de datos , la de produccion y en su defecto la local
mongoose
  .connect( process.env.MONGODB_URI || "mongodb://localhost/pruebaapp", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Middleware Setup(loger de consola , procesador del req.body y cookies)
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//cambio de ruta estatica de servidor para react
app.use(express.static(path.join(__dirname, "client/build")));



// uso de cors para la comunicacion front-back en local(no hace falta eliminarlo en prod)
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'] 
}));
//rutas backend
const index = require("./routes/index");
app.use("/api", index);

//cargar react
app.use((req, res, next) => {
  //cargo el index.html del  build de react
  res.sendFile(__dirname + "/client/build/index.html");
});

module.exports = app;
