const sql = require('./db.js');

/*Constructor */
const Transaccion = function (transaccion){
    this.codigo = transaccion.codigo,
    this.descripcion = transaccion.descripcion,
    thiis.fechaTransaccion = transaccion.fechaTransaccion,
    this.monto = transaccion.monto,
    this.tipoTransaccion = transaccion.tipoTransaccion,
    this.cuentaNumero = transaccion.cuentaNumero
};

Transaccion.create = (newTransaccion, result) => {
    sql.query('INSERT INTO transaccion SET ?', newTransaccion, (err, res)=>{
        if(err){
            console.log("error insertando datos ", err);
            result(err, null);
            return;
        }
        console.log('Transaccion exitosa ', {id : res.inserId, ...newTransaccion});
        result(null, {id : res.inserId, ...newTransaccion});
    });
};

Transaccion.getTransacciones = result => {
    sql.query(
        'SELECT * FROM TRANSACCION',
        (err, res)=>{
            if(err){
                console.log('Error consultando transacciones: ', err.message);
                result(null, err);
                return;
            }
            console.log("Transacciones: ", res);
            result(null, res);
        });
};

module.exports = Transaccion;