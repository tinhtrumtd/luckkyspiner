const express = require('express')
const app = express()
const port = 3000
const  morgan  = Required ( ' morgan ' ) 
app.use(morgan('combined'))
app.use(express.urlencoded());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})