var express = require('express');
var app  = express();
let fs = require('fs');
let path = require('path');
let bodyParser = require('body-parser');
var sample=require('./data/sample.json');
const auth = require('./middleware/auth');
const port = process.env.PORT || 8080;

// Bodyparser Middleware
app.use(express.json());

app.get('/getPopularTitles', auth, function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.json(sample);
});

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));
  console.log('Debug | inside if CP#1');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    console.log('Debug | inside app.get * CP#3');
    
  });
  console.log('Debug | inside if CP#2');
  
}
//port varies on prod
app.listen(port,function(){
    console.log('App running successfully:', port);
});

