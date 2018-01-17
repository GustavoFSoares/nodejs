var express = require("express");
var load = require("express-load");

var app = express();

module.exports = function() {
    app.set('view engine', 'ejs');
    app.set('views', './app/views/');

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}
