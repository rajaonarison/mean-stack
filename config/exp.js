let express = require("express")
let app = express()

app.set('view engine' , 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/assets" , express.static('public/'))


module.exports = app