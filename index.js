const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const AuthRoutes = require('./express/routes/auth')

mongoose.connect("mongodb+srv://admin:admin@cluster0-kn2s0.mongodb.net/test?retryWrites=true")

const port = process.env.PORT || 4001
const app = express()

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'))
}

app.use(bodyParser.json())
app.use('/auth', AuthRoutes)

app.get('/', (req, res) => res.send('Default route!'))

app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`)
})