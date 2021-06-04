const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.post('/assistance', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.post('/etrail', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
