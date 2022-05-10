const express = require('express')
const app = express()
const port = 3000
const  morgan  = require('morgan') 
const route = require('./router')
route(app);
app.use(morgan('combined'))
app.use(express.urlencoded());
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})