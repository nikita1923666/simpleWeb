/**
 * Created by Nikita on 7/2/2017.
 */
var pg = require('pg');
var pool = new pg.Pool({
    user: 'nikita',
    database: 'nikita',
    password: 'Gold2000',
    host: '192.168.56.101',
    port: 5432
});


function save(person, cb){
    pool.query('INSERT INTO persons (name, surname, region, age, title, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [person.name, person.surname, person.region, person.age,  person.title,  person.email,  person.password],
        function (err, result) {
            cb(err);
        });
}
exports.save = save;