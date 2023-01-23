const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('This Express app was executed by nodeJS container inside docker')
})

app.listen(3000)