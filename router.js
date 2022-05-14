const express = require('express');
const rutas = express.Router();


rutas.get('/' , (req,res) => 
{
    res.render('./pages/index')
})


rutas.get('/ann' , (req,res) => 
{
    let mydata = [];
  var fs = require('fs');
var pepe = require('jquery-csv');
var sample =  './data.csv';
fs.readFile(sample, 'UTF-8', function (err, csv) {
  if (err) { console.log(err); }
  pepe.toArrays(csv, {}, function (err, data) {
    if (err) { console.log(err); }
    for (var i = 0, len = data.length; i < len; i++) {
   //   console.log(data[i]);
     mydata.push(data[i]);
    }
  });
  res.send( mydata);
});
})


module.exports = rutas;



// mongodb, no sql databases, api rest express , .net core, java , java spring , react , vue , microfrontends , grunt ,git, gulp , cd ci jetbrains and others;
// ingles , sql , blocchain solidty , test drive desing,  arquitectura web y back , test unitarios e integracion back front, python