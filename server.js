var express = require("express");
var proRouter = require("./routes/product");
var config = require("config");

var app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content");
    next();
})

app.use("/product", proRouter);

app.listen(9999, ()=>{
    console.log("Server started on port 9999...");
});
