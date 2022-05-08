const express = require('express');
const rutas = express.Router();


rutas.get('/' , (req,res) => 
{
    res.render('./pages/index')
})


rutas.get('/saludo' , (req,res) => 
{
    res.send('saludo  desde express')
})


module.exports = rutas;



// mongodb, no sql databases, api rest express , .net core, java , java spring , react , vue , microfrontends , grunt ,git, gulp , cd ci jetbrains and others;
// ingles , sql , blocchain solidty , test drive desing,  arquitectura web y back , test unitarios e integracion back front, python