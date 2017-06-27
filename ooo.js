/**
 * Created by Nikita on 6/15/2017.
 */
var express = require('express');
var buble = require('./buble');
var fs = require('fs');

var ooo = express();

ooo.use(express.static('static'))
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
})

ooo.get('/solve.html', function (req, res) {
    var a = req.query.a;
    var b = req.query.b;
    var c = req.query.c;
    var x1 = buble.solve1(a,b,c);
    var x2 = buble.solve2(a,b,c);
    var text = fs.readFileSync('solve.html', 'UTF-8');
    text = text.replace('{{x1}}', x1);
    text = text.replace('{{x2}}', x2);
    res.send(text);
});

ooo.listen(80, function () {
    console.log('Server started');
});
