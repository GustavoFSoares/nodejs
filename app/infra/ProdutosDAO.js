function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback);
    return this;
}

module.exports = function(){
   return ProdutosDAO;
}