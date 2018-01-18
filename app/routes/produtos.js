
module.exports = function (app) {
    var listaProdutos = function(req, res){
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, resultados) {
            res.format({
                html: function(){
                    res.render("produtos/lista", { lista: resultados });
                },
                json: function(){
                     res.json(resultados);
                }
            });
        });
        connection.end(); 
    }

    app.get("/produtos", listaProdutos);

    app.get("/produtos/form", function(req, res){
        res.render('produtos/form', {errosValidacao:{}, produto: {}})
    });

    app.post("/produtos", function(req, res){
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        let produto = req.body;
        
        req.assert('titulo', "Titulo Obrigatorio").notEmpty();
        req.assert('preco', "Formato Inválido").isFloat();

        var erros = req.validationErrors();
        if(erros){
            res.render('produtos/form', {errosValidacao: erros, produto: produto});
            res.format({
                html: function () {
                    res.status(400).render('produtos/form', { errosValidacao: erros, produto: produto });
                },
                json: function () {
                    res.status(400).json(erros);
                }
            });
            return;
        }
            
        produtosDAO.salva(produto, function(err, resultados){
            console.log(err);    
            res.redirect('/produtos');
        });
    });
}