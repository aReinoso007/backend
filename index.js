const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require('./app/routes/transacciones.routes')(app);
app.listen(port, ()=>{
    console.log(`Backend listening at http://localhost:${port}`)
});