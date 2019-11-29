const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.ejs');
});

router.get('/default', (req, res)=>{
    res.render('default.ejs')
});

router.get('/pintura', (req, res)=>{
    res.render('secciones/pintura.ejs')
});

router.get('/login_fail', (req, res)=>{
    res.render('login_fail')
});

//Login routes
router.get('/signup', (req, res, next) => {
  res.render('register');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile_panel',
  failureRedirect: '/register',
  failureFlash: true
})); 

router.get('/login', (req, res, next) => {
  res.render('login');
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/profile',
  failureRedirect: '/login_fail',
  failureFlash: true
}));

router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}
module.exports = router;