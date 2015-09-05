/**
 * Created by aleduarte06 on 5/9/15.
 */
var modulo = require('./respuesta');
var express = require('express');
//var https = require('https');
var request = require('request');
var myApp = express();
//myApp.use(function(req,res,next){
//    console.log(req.url);
//    console.log('soy el middleware');
//    next()
//});

myApp.get('/hola', function () {
    modulo.print();
});
myApp.get('/uno', function (req, res) {
    res.json(modulo.uno);
});
myApp.get('/dos', function (req, res) {
    res.json(modulo.dos);
});
myApp.get('/tres', function (req, res) {
    res.json(modulo.tres);
});
myApp.get('/cuatro', function (req, res) {
    res.json(modulo.cuatro);
});

myApp.get('/meliproxy', function (req, res) {
    var q = req.query;
    console.log(q.q);
    var url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + q.q;
    console.log(url);
    request(url, function(error,response,body){
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    })

});




var server = myApp.listen(8045, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});