const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { jsonSecret } = require('../config/keys')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

signToken = (user) => {
  return jwt.sign(
    {
      iss: 'polepath',
      sub: user._id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1), //plus one day
    },
    jsonSecret
  )
}

exports.create = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = new User({
        email: email,
        username: username,
        password: hashedPw,
      })
      return user.save().then((createdUser) => {
        const token = signToken(createdUser)
        res
          .status(201)
          .json({ message: 'User created', token: token, user: createdUser })
      })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.login = (req, res) => {
  console.log(console.log('Current user is:' + req.user))
  const token = signToken(req.user)
  res.status(200).json({
    token: token,
    role: req.user.role,
    message: 'Login Successful',
    userData: {
      username: req.user.username,
      email: req.user.email,
      photoURL: req.user.photoURL,
    },
  })
}

exports.logout = (req, res) => {
  //handle with passport
  res.status(201).json({
    message: 'Logged out',
  })
}

exports.secret = (req, res) => {
  res.json({ secret: 'resource' })
}
