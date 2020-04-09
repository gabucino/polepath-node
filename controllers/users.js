const User = require('../models/user')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { jsonSecret } = require('../config/keys')
const bcrypt = require('bcrypt')

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

exports.create = async (req, res, next) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  const hashedPw = await bcrypt.hash(password, 12)

  const user = new User({
    username: username,
    email: email,
    password: hashedPw,
  })
  const createdUser = await user.save()
  console.log(createdUser)

  const token = signToken(createdUser)

  res.status(201).json({
    token: token,
    message: 'User created',
    userId: createdUser._id,
  })
}

exports.login = (req, res) => {
  console.log(console.log('Current user is:' + req.user))
  const token = signToken(req.user)
  res.status(200).json({ token: token, message: 'Login Successful' })
}

exports.googleLogin = (req, res) => {
  console.log(console.log('Current user is:' + req.user))
  const token = signToken(req.user)
  res.status(200).json({ token: token, message: 'Login Successful' })
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

//Oauth controllers

exports.loginWithGoogle = (req, res, next) => {
  passport.authenticate('google', {
    scope: ['profile'],
  })
  //   res.status(201).json({
  //     message: 'Logging in with google',
  //   })
}
