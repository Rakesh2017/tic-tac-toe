var mysql = require('mysql');

var con = mysql.createConnection({
    host: "74.208.228.35",
    user: "rakesh1",
    password: "?t6Lrj54",
    database: "db_student"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customerTable", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
    });
});

// con.end();