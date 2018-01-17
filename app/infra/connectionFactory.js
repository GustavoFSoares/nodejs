var mysql = require('mysql');

function connectMySql(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
}

//wrapper
module.exports = function(){
    return connectMySql;
}