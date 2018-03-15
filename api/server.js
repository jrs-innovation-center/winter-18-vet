//REQUIREMENTS
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const resources = require('./routes/resources')
const categories = require('./routes/categories')
const HTTPError = require('node-http-error')

app.use(bodyParser.json())
app.use(cors({ credentials: true }))

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Veterans API.')
})

resources(app)
categories(app)

app.listen(PORT, () => console.log('API UP!! on ', PORT))
