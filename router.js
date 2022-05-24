const express = require('express');
const rutas = express.Router();

rutas.get('/', (req, res) => {
  
  res.render('./pages/index', {mydata: []})
})


rutas.get('/vue', (req, res) => {
  res.sendFile('C:/Users/aniet/Desktop/proyectos/ann/vue.html');
})


rutas.get('/react', (req, res) => {
  res.sendFile('C:/Users/aniet/Desktop/proyectos/ann/react.html');
})


rutas.get('/ann', (req, res) => {
  let mydata = [];
  var fs = require('fs');
  var pepe = require('jquery-csv');
  var sample = './data.csv';
  fs.readFile(sample, 'UTF-8', function (err, csv) {
    if (err) { console.log(err); }
    pepe.toArrays(csv, {}, function (err, data) {
      if (err) { console.log(err); }
      for (var i = 0, len = data.length; i < len; i++) {
        mydata.push(data[i]);
      }
    });
    res.send({mydata});
  });
})



rutas.get('/pepe', (req, res) => {
  let mydata = [];
  var fs = require('fs');
  var pepe = require('jquery-csv');
  var sample = './data.csv';
  fs.readFile(sample, 'UTF-8', function (err, csv) {
    if (err) { console.log(err); }
    pepe.toArrays(csv, {}, function (err, data) {
      if (err) { console.log(err); }
      for (var i = 0, len = data.length; i < len; i++) {
        mydata.push(data[i]);
      }
    });
    res.render('./pages/index', {mydata: mydata});
  });
})


module.exports = rutas;



// mongodb, no sql databases, api rest express , .net core, java , java spring , react , vue , microfrontends , grunt ,git, gulp , cd ci jetbrains and others;
// ingles , sql , blocchain solidty , test drive desing,  arquitectura web y back , test unitarios e integracion back front, python