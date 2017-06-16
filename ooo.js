/**
 * Created by Nikita on 6/15/2017.
 */
var express = require('express');
var buble = require('./buble');
var fs = require('fs');

var ooo = express();

ooo.get('/', function (req, res) {
    var text = fs.readFileSync('index.html', 'UTF-8');
    res.send(text);
});

ooo.get('/sort.html', function (req, res) {
    var array = req.query.array.split(',');
    
    for(var z = 0;z<array.length;z++){
       array[z] = parseInt(array[z]);
    }
    var order = buble.sort(array);
    var result = order.join(',');

    var text = fs.readFileSync('result.html', 'UTF-8');
    text = text.replace('{{result}}', result);
    res.send(text);
});

ooo.get('/sort/:array', function (req, res) {
    var array = req.params.array.split(',');
    var order = buble.sort(array);

    res.send(order.join(','));
});

ooo.listen(80, function () {
    console.log('Server started');
});
