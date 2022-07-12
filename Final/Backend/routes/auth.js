const router = require('express').Router()
const passport = require('./outlookAuth')


router.get('/login/failed',(req,res)=>{
  res.send('login failed')
})

router.get('/getUser',(req,res)=>{
  if(req.user){
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
    else{
      res.status(200).json({
        success: false,
        message: "successfull",
        
      });
    }
})


router.get('/outlook',
  passport.authenticate('windowslive', {
    scope: [
      'openid',
      'profile',
      'offline_access',
      'https://outlook.office.com/Mail.Read'
    ]
  })
);


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/');
});

router.get('/outlook/redirect', 
  passport.authenticate('windowslive', {successRedirect: 'http://localhost:3000/', failureRedirect: '/login/failed' }),
  // function(req, res) {
  //   res.redirect('http://localhost:3000/');
  // }
  );

module.exports = router