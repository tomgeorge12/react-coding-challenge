var express = require('express');
var app  = express();
let fs = require('fs');
let path = require('path');
let bodyParser = require('body-parser');
var sample=require('./data/sample.json');
// const auth = require('./middleware/auth');
const port = process.env.PORT || 8080;

// Bodyparser Middleware
app.use(express.json());

app.get('/getPopularTitles', function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.json(sample);
});


if(process.env.NODE_ENV === 'production') {
  // Serve static assets if in production
  app.use('/static', express.static(path.join(__dirname, 'client/build')));
  // app.use(express.static(path.join(__dirname, 'client', 'build')));
  console.log('Debug | inside if CP#1');

  app.get('*', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    console.log(req.url, 'Debug | inside app.get * CP#3');
    
  });
  console.log('Debug | inside if CP#2');
  
}
//port varies on prod
app.listen(port,function(){
    console.log('App running successfully:', port);
});

