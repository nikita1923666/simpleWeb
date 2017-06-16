/**
 * Created by Nikita on 6/15/2017.
 */
var express = require('express');
var buble = require('./buble');

var ooo = express();

ooo.get('/', function (req, res) {
    res.send('This is sort machine!');
});

ooo.get('/sort/:array', function (req, res) {
    var array = req.params.array.split(',');
    var order = buble.sort(array);

    res.send(order.join(','));
});

ooo.listen(80, function () {
    console.log('Server started');
});
