/**
 * Created by Nikita on 6/15/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');
var buble = require('./buble');
var database = require('./database');
var fs = require('fs');

var ooo = express();

ooo.use(express.static('static'));
ooo.use(bodyParser.json());

ooo.get('/sort.html', function (req, res) {
    var array = req.query.array.split(',');

    for (var z = 0; z < array.length; z++) {
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
    var x1 = buble.solve1(a, b, c);
    var x2 = buble.solve2(a, b, c);
    var text = fs.readFileSync('solve.html', 'UTF-8');
    text = text.replace('{{x1}}', x1);
    text = text.replace('{{x2}}', x2);
    res.send(text);
});

ooo.get('/solve.api', function (req, res) {
    var a = req.query.a;
    var b = req.query.b;
    var c = req.query.c;
    var x1 = buble.solve1(a, b, c);
    var x2 = buble.solve2(a, b, c);
    if ((b*b-4*a*c)<0) {
        res.status(404).send('This equation doesnt have roots because the discriminat is negative.');
        return;
    }
    var result = {
        a: a,
        b: b,
        c: c,
        x1: x1,
        x2: x2
    };
    res.json(result);
});

ooo.get('/search.api', function (req, res) {
    var name = req.query.name;
    var flag = req.query.flag;
    var person = buble.search(name, flag);
    var found = {
        name: name,
        person: person,
        flag: flag
    };
    res.json(found);
});

ooo.post('/search.api', function (req, res) {
    var name = req.body.name;
    var flag = req.body.flag;
    var person = buble.search(name, flag);
    var found = {
        name: name,
        person: person,
        flag: flag
    };
    res.json(found);
});

// ooo.post('/sort.api', function (req, res) {
//     var array = req.body.array.split(',');
//
//     for (var z = 0; z < array.length; z++) {
//         array[z] = parseInt(array[z]);
//     }
//
//     var order1;
//     var result1;
//     var sortName;
//
//     if (req.query.asc) {
//         order1 = buble.sortInc(array);
//         sortName = 'increase';
//     } else {
//         order1 = buble.sortDec(array);
//         sortName = 'decrease';
//     }
//     result1 = order1.join(',');
//
//     var text = fs.readFileSync('result.html', 'UTF-8');
//     text = text.replace('{{result1}}', result1);
//     text = text.replace('{{order}}', sortName);
//     res.send(text);
// })


ooo.post('/data/person', function (req, res) {
    database.save(req.body, function (err) {
        if(err) {
            res.status(500).end(err.message);
            return;
        }

        res.status(201).end('saved');
    }) ;
});

ooo.listen(8080, function () {
    console.log('Server started');
});
