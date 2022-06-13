import { ip } from "../config.js"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
var mysql = require('mysql')

var con = mysql.createConnection({
    host: ip,
    user: "user"
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