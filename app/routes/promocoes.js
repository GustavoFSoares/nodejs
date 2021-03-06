module.exports = function(app){
    app.get("/promocoes/form", function(req, res){
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(err, resultados){
            res.render("promocoes/form", {lista: resultados})
        });
        connection.end();
    });

    app.post("/promocoes", function(req, res){
        let promocao = req.body;

        app.get('io').emit("novaPromocao", promocao)
        res.redirect("promocoes/form");
    })
}