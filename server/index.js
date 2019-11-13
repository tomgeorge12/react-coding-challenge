var express = require('express');
var app  = express();
let fs = require('fs');
let path = require('path');
let bodyParser = require('body-parser');
var sample=require('./data/sample.json');
const port = process.env.PORT || 8080;

app.get('/getPopularTitles',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.json(sample);
});

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  app.use('client/build');

  app.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port,function(){
    console.log('App running successfully:', port);
});

