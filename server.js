//npm init -y
// cambiar en package.json node por nodemon
//npm install express mongoose

const express = require("express");
const app = express();

//Inicializamos BD
require("./server/config/mongoose.congif");

//Para usar json y obtener datos de la URL
app.use(express.json(), express.urlencoded({ extended: true }));

//Importar Rutas
const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));