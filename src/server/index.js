var express = require('express');
var app  = express();
let fs = require('fs');
let bodyParser = require('body-parser');
var sample=require('./data/sample.json');

app.get('/getPopularTitles',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  res.json(sample);
});

app.listen(8080,function(){
    console.log('App running successfully: 8080');
});

