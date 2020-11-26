let mysql = require("mysql");
 
let connexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pharmacie'
})

connexion.connect();

module.exports = connexion