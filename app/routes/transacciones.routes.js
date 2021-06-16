module.exports = app =>{
    const transacciones = require('../controller/transaccion.controller');

    /*Post para hacer transaccion */
    app.post('/transaccion', transacciones.create)

    /*Get todas transacciones */
    app.get('/transacciones', transacciones.getTransacciones);
}