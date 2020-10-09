const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const https = require('https')
// const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const passportSetup = require('./config/passport-setup')

const app = express()

app.use(express.static(path.join(__dirname, 'build')));

// app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://www.polepath.com')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})


//Routes
const usersRoutes = require('./routes/users')
const polemovesRoutes = require('./routes/polemoves')
const mediaRoutes = require('./routes/media')
const authRoutes = require('./routes/auth')
const progressRoutes = require('./routes/progress')
const faqRoutes = require('./routes/faq')

// const privateKey = fs.readFileSync('server.key')
// const certificate = fs.readFileSync('server.cert')

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images')
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname)
//   },
// })

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpeg' ||
//     file.mimetype === 'image/jpg'
//   ) {
//     cb(null, true)
//   } else {
//     cb(null, false)
//   }
// }

dotenv.config()
// app.use(cors())

app.use(bodyParser.json())
// app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Authorization'
  )
  next()
})

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
)

app.use(morgan('dev', { stream: accessLogStream }))

//Register routes
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/moves', polemovesRoutes)
app.use('/api/media', mediaRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/faq', faqRoutes)


app.use(helmet())
app.use(compression())


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


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
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    const server = app.listen(process.env.PORT || 8080) //https.createServer({ key: privateKey, cert: certificate }, app)
  })
  .catch((err) => console.log(err))
