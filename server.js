// server.js
// where your node app starts

// init project
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')


var app = module.exports = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues', function(req,res,next){

console.log("It Works");
  
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})