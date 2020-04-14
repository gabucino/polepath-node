const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')

const passportSetup = require('./config/passport-setup')

//Routes
const usersRoutes = require('./routes/users')
const polemovesRoutes = require('./routes/polemoves')

const app = express()

dotenv.config()
app.use(cors())

app.use(bodyParser.json())
app.use(morgan('dev'))


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization')
  next()
})

//Register routes
app.use('/users', usersRoutes)
app.use('/moves', polemovesRoutes)

//error handling middleaware
app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    const server = app.listen(8080)
  })
  .catch((err) => console.log(err))
