

const express = require("express");

const bodyParser = require("body-parser");

const request = require("request");

const app = express();


//the folder public is created will have all the static folders of our code
//the static files of style.css and img_folder to our website
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

//get your app up and running
app.get("/" , function(req , res)
{
   res.sendFile(__dirname + "/signup.html");
});

app.post("/" , function(req , res)
{
    var name = req.body.fname;

    var lname = req.body.lname;

    var lmail = req.body.lmail;

    console.log(name , lname , lmail);
    console.log(req.body);
});

app.listen(3000 , function()
{
    console.log("Server is running on port 3000");
});

//API key
//02dafc420bbe8b7a84a26884bc18d54c-us1