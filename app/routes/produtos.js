
module.exports = function (app) {
    
    app.get("/produtos", function (req, res) {
        let connection = app.infra.connectionFactory();
        let produtosBanco = app.infra.produtosBanco(connection);

        produtosBanco.lista(function(err, resultados){
            res.render("produtos/lista", {lista: resultados});
        });
        connection.end(); 
    });

    app.get('/produtos/remove', function(){
        let connection = app.infra.connectionFactory();
        let produtosBanco = app.infra.produtosBanco;
        let produto = produtosBanco.carrega(connection, id, callback);
        if(produto){
            produtosBanco.remove(connection, produto, callback)
        }
    });
}