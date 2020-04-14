const passport = require('passport')
const GoogleTokenStrategy = require('passport-google-token').Strategy
const jwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy
const keys = require('./keys')
const User = require('../models/user')
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
          const user = await new User({
            username: profile.displayName,
            googleId: profile.id,
            email: profile._json.email,
            photoURL: profile._json.picture
          }).save()
          console.log('new user created' + user)
          done(null, user)
        }
      } catch (err) {
        done(err, false)
      }
    }
  )
)