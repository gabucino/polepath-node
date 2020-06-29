const passport = require('passport')

const GoogleTokenStrategy = require('passport-google-token').Strategy
const jwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const FacebookTokenStrategy = require('passport-facebook-token')

const { ExtractJwt } = require('passport-jwt')
const keys = require('./keys')
const User = require('../models/users')
const bcrypt = require('bcrypt')

//JWT Strategy
passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),
      secretOrKey: keys.jsonSecret,
    },
    async (payload, done) => {
      try {
        //Find the user from token
        const user = await User.findById(payload.sub)
        if (!user) {
          return done(null, false)
        }

        done(null, user)
      } catch (err) {
        done(err, false)
      }
    }
  )
)

//Local strategy
passport.use(
  new LocalStrategy(
    //localstrategy assumes you are logging in with username and pw
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email })
        if (!user) {
          return done(null, false)
        }
        const isPwMatch = await bcrypt.compare(password, user.password)
        if (!isPwMatch) {
          return done(null, false)
        }
        //passport sets req.user
        done(null, user)
      } catch (err) {
        done(err, false)
      }
    }
  )
)

//Google Strategy
passport.use(
  'googleToken',
  new GoogleTokenStrategy(
    {
      //options for the google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // console.log('AccessToken', accessToken)
        // console.log('profile', profile)

        const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser) {
          console.log('user already exists:' + existingUser)
          done(null, existingUser)
        } else {
          let stageName = profile.name.givenName
          const stageNameCheck = await User.findOne({
            stageName: profile.name.givenName,
          })
          if (stageNameCheck) {
            const userCount = await User.count({})
            stageName = stageName + (userCount + 1)
          }

          const user = await new User({
            stageName: stageName,
            googleId: profile.id,
            email: profile._json.email,
            photoURL: profile._json.picture,
          }).save()
          done(null, user)
        }
      } catch (err) {
        done(err, false)
      }
    }
  )
)

passport.use(
  'facebookToken',
  new FacebookTokenStrategy(
    {
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('AccessToken', accessToken)
      console.log('profile', profile)
      console.log('ProfileId', profile.id)
      try {
        const existingUser = await User.findOne({
          facebookId: profile.id,
        })

        if (existingUser) {
          return done(null, existingUser)
        }
        const newUser = new User({
          facebookId: profile.id,
          email: profile.emails[0].value,
          stageName: profile.name.givenName,
          photoURL: profile.photos[0].value,
        })

        await newUser.save()
        done(null, newUser)
      } catch (error) {
        done(error, false, error.message)
      }
    }
  )
)
