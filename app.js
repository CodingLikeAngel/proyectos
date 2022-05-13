
const express = require('express')
const app = express()
const port = 3000
const router = require('./router');
const cors = require('cors')

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
  console.log(`Example app listssenaing on port ${port}`)
})
