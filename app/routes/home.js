module.exports = function(app){
    
    app.get("/", function (req, res) {
        
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, resultados) {
            
            res.render("home/index", { livros: resultados }); 
        });
        connection.end();
    });
    
}
