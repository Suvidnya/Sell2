const passport = require('passport')
const OutlookStrategy = require('passport-outlook').Strategy
const User = require('../models/User')



passport.use(new OutlookStrategy({
  clientID: '93c8f041-e0ab-43a1-a759-2d81cd38b7cb',
  clientSecret: 'YkI8Q~8n.Kuil.FOB4TlOAnHsxDfLsUjOzVBWc7_',
  callbackURL: 'http://localhost:5000/auth/outlook/redirect'
},
  async (accessToken, refreshToken, profile, done) => {

    //console.log(profile)
    let user = {
      outlookId: profile.id,
      name: profile.displayName,
      iitgEmail: profile.emails[0].value
    };
    

    User.findOrCreate(user, function (err, user) {
      return done(err, user);
    });
  }
));


passport.serializeUser((user,done)=>{
  done(null,user)
})
passport.deserializeUser((user,done)=>{
  done(null,user)
})





module.exports = passport