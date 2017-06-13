var fs = require('fs');


var text = fs.readFileSync('data/names.txt', 'utf8');

var persons = JSON.parse(text);

function printDb(db) {
    for (var i = 0; i < db.length; i++) {
        var record = db[i];

        printRecord(record);
    }
}

function findP(searchName) {
    var search = [];
    for (var i = 0; i < persons.length; i++) {
        if (persons[i].name === searchName) {
            search.push(persons[i]);
        }
    }
    return search;
}


function agg() {
    var oldest;
    oldest = persons[0]
    for (var i = 0; i < persons.length; i++) {
        if (oldest.age < persons[i].age)
            oldest = persons[i];
    }
    console.log('The oldest person is:');
    printRecord(oldest);
    return;
}

function printRecord(rec) {
    console.log(rec.name);
    console.log(rec.surname);
    console.log(rec.age);

    console.log('');
    //console.log(rec.modDate.toString())
}

exports.findP = findP;