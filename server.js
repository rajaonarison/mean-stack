//All requires are there
let app = require("./config/exp");
let indexRoutes = require("./routes/index");
let lotRoutes = require("./routes/lotRouting");
let statRoutes = require("./routes/stat");
let productRoutes = require("./routes/product");
let path = require("path")
let axios = require("axios") //  Requete AJAX

//Routage de l'application


app.use("/" , indexRoutes);

app.post("/lot/insert" , (req ,res) => {
    lotRoutes.postLot(req ,res)
});

app.get("/lot/all" , (req ,res) => {
    lotRoutes.getAll(req , res);
})

app.get("/lot" , (req , res) => {
    lotRoutes.index(req , res);
})

app.use("/stat" , statRoutes);
app.use("/product" , productRoutes);

app.listen(8080)