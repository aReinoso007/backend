const Transaccion = require('../models/transaccion.model');

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Contenido no debe ser vacio!"
      });
    }
  
    // Create a Customer
    const transaccion = new Transaccion({
        descripcion: req.body.descripcion,
        fechaTransaccion: req.body.fechaTransaccion,
        monto: req.body.monto,
        tipoTransaccion: req.body.tipoTransaccion,
        cuentaNumero: req.body.cuentaNumero
    });
  
    // Save Customer in the database
    Transaccion.create(transaccion, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error ocurrio realizando transaccion."
        });
      else res.send(data);
    });
};

exports.getTransacciones = (req, res)=>{
    Transaccion.getTransacciones((err, data)=>{
        if(err)
            res.status(500).send({
                message:
                err.message || 'Ocurrio un error obteniendo las transacciones'
            });
        else res.send(data)
        
    })
};