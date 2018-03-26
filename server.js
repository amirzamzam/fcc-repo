// server.js
// where your node app starts

// init project
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues', function(req,res,next){

  
  
});

app.listen(8080, function(){

console.log("It's working");  
  
});