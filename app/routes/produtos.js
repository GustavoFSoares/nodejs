
module.exports = function (app) {
    var listaProdutos = function(req, res){
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, resultados) {
            res.render("produtos/lista", { lista: resultados });
        });
        connection.end(); 
    }

    app.get("/produtos", listaProdutos);

    app.get("/produtos/form", function(req, res){
        res.render('produtos/form')
    });

    app.post("/produtos", function(req, res){
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        let produto = req.body;
        
        produtosDAO.salva(produto, function(err, resultados){
            res.redirect('/produtos');
        });
    });
}