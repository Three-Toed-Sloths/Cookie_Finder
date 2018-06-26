// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS APP
var PORT = process.env.PORT || 3000;
var app = express();

// MODELS
var db = require("./models");

// PARSE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC DIRECTORY
app.use(express.static("public"));

//======================================================================================
// ROUTES
//======================================================================================
require("./routes/seller-routes.js")(app);
require("./routes/products-routes.js")(app);
require("./routes/inventory-routes.js")(app);


//======================================================================================
// SYNC
//======================================================================================
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("listening at localhost:", PORT)
    });
});