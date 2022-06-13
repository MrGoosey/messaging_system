var config = require('../config.json')
var mysql = require('mysql')

var con = mysql.createConnection({
    host: config.ip,
    user: config.user,
    password: config.password
})

con.connect(function (err) {
    if (err)
        throw (err)
    console.log("Connected!")
    con.query("CREATE DATABASE users", function (err, result) {
        if (err)
            throw err
        console.log("Database created!")
    })
})