var express = require('express');
var search = require('./search');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/hello/:name', function (req, res) {

    var found = search.findP(req.params.name);

    if (found.length === 0) {
        res.status(404).send('Person not found');
        return;
    }
    res.send('Found name is: ' + found[0].surname);
});

app.listen(80, function () {
    console.log('Server started');
});

;