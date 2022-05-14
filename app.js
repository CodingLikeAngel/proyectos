
const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const cors = require('cors')


//let sample = './data.csv';


const corsOptions ={
  origin:['http://localhost:3000',],
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));


app.set('view engine' , 'ejs');
app.use('/static', express.static('public'))
app.use(router);







app.listen(port, () => {
 
 /* var fs = require('fs');
var pepe = require('jquery-csv');
var sample =  './data.csv';
fs.readFile(sample, 'UTF-8', function (err, csv) {
  if (err) { console.log(err); }
  pepe.toArrays(csv, {}, function (err, data) {
    if (err) { console.log(err); }
    for (var i = 0, len = data.length; i < len; i++) {
      console.log(data[i]);
    }
  });
});*/
  
  console.log(`Example app listssenaing on port ${port}` )
})
