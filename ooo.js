/**
 * Created by Nikita on 6/15/2017.
 */
var express = require('express');
var buble = require('./buble');
var fs = require('fs');

var ooo = express();

ooo.use(express.static('static'))

// ooo.get('/', function (req, res) {
//     var text = fs.readFileSync('index.html', 'UTF-8');
//     res.send(text);
// });
// ooo.get('/style.css', function (req, res) {
//     var text = fs.readFileSync('style.css', 'UTF-8');
//     res.set('Content-Type', 'text/css');
//     res.send(text);
// });
// ooo.get('/dog.jpg', function (req, res) {
//     var buffer = fs.readFileSync('dog.jpg');
//     res.set('Content-Type','image/jpeg');
//     res.send(buffer);
// });
ooo.get('/sort.html', function (req, res) {
    var array = req.query.array.split(',');
    
    for(var z = 0;z<array.length;z++){
       array[z] = parseInt(array[z]);
    }

    var order1;
    var result1;
    var sortName;

    if (req.query.asc) {
        order1 = buble.sortInc(array);
        sortName = 'increase';
    } else {
        order1 = buble.sortDec(array);
        sortName = 'decrease';
    }
    result1 = order1.join(',');

    var text = fs.readFileSync('result.html', 'UTF-8');
    text = text.replace('{{result1}}', result1);
    text = text.replace('{{order}}', sortName);
    res.send(text);
});


ooo.listen(80, function () {
    console.log('Server started');
});
