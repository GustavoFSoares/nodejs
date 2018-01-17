function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback);
    return this;
}

ProdutosDAO.prototype.salva = function (produtos, callback){
    
    this._connection.query('insert into livros set ?', produtos, callback);
    return this;
}
module.exports = function(){
   return ProdutosDAO;
}