const passport      = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User          = require('../models/User');
const bcrypt        = require('bcrypt');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, callback) => {
    User.findOne({ googleId: profile.id })
      .then(user => {
        if(user) {
          return callback(null,user)
        }
        User.create({
          googleId: profile.id,
          username: profile.emails[0].value
        })
        .then(newUser => {
          return callback(null, newUser)
        })
        .catch(e=> callback(e))
      })
      .catch(e => callback(e))
  })
);
