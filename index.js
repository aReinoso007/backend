const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const cors = require("cors");

var corsOptions = {
    origin : "http://localhost:3001/"
};

/*Asignar uso del cors */
app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/hola", (req, res) => {
  res.json({ message: "Backend funciona correctamente" });
});

require('./app/routes/transacciones.routes')(app);
app.listen(port, ()=>{
    console.log(`Backend listening at http://localhost:${port}`)
});