module.exports = (app) => {
    app.get('/pedidos', (req,res) => {
        var connection = app.config.database();
        var query = app.models.pedidosModel;
        query.getPedidos(connection, (err, result) =>{
            if (!err) {
                res.json(result);
            };
        });
    });

    app.post('/pedidos', (req,res) => {
        var pedidos = req.body;
        var connection = app.config.database();
        var query = app.models.pedidosModel;
        query.setPedidos(pedidos, connection, (err, result) => {
        });
      });
}