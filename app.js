const express = require('express')
const app = express()
const port = 3000
const router = require('./router');


app.set('view engine' , 'ejs');
app.use('/public' , express.static('public'))
app.use(router);


app.listen(port, () => {
  console.log(`Example app listssenaing on port ${port}`)
})
