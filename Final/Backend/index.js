const express = require("express");
const passport = require("passport");
const authRoutes = require("./routes/auth");
const app = express();
const session = require("express-session");
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/olxcloneIITg',()=>{
    console.log("connected to mongoose")
})

// app.use(
//     cookieSession({ name: "session", keys: ["larrgrgrma"], maxAge: 24 * 60 * 60 * 100 })
//   );

app.use(session({
    secret: 'somethingsecretgoeshere',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true,maxAge:5*60*1000 }
 }));





app.use(passport.initialize());
app.use(passport.session());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
  
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use('/auth',authRoutes)



app.get('/',(req,res)=>{
    res.send('Home')
})

app.listen(5000,()=>{
    console.log("listening at port 5000")
})