const express = require('express');
const passport = require('passport');
const router = express.Router();
const {isAuthenticated} = require('../passport/auth');
const user = require('../models/database');

router.get('/', (req, res)=>{
    res.render('index.ejs');
});

router.get('/default', (req, res)=>{
    res.render('default.ejs')
});

router.get('/pintura', isAuthenticated, (req, res)=>{
    res.render('secciones/pintura.ejs')
});

router.get('/login_fail', (req, res)=>{
    res.render('login_fail')
});

router.post('/profile', async (req, res, next)=>{
    const {nombre, apellido, pais, ciudad, direccion, cp, telefono, genero, facebook, instagram, youtube, f_tecnica, videos, imagenes, paypal, perfil, portada, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30} = req.body;
    await user.updateMany({    
    nombre : nombre,
    apellido : apellido,
    pais : pais,
    ciudad : ciudad,
    direccion : direccion,
    cp : cp,
    telefono : telefono,
    genero : genero,
    facebook : facebook,
    instagram : instagram,
    youtube : youtube,
    f_tecnica : f_tecnica,
    videos : videos,
    imagenes : imagenes,
    paypal : paypal,
    perfil : perfil,
    portada : portada,
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    img7: img7,
    img8: img8,
    img9: img9,
    img10: img10,
    img11: img11,
    img12: img12,
    img13: img13,
    img14: img14,
    img15: img15,
    img16: img16,
    img17: img17,
    img18: img18,
    img19: img19,
    img20: img20,
    img21: img21,
    img22: img22,
    img23: img23,
    img24: img24,
    img25: img25,
    img26: img26,
    img27: img27,
    img28: img28,
    img29: img29,
    img30: img30
    });
    console.log(user);
    res.render('profile');
});


//Login routes
router.get('/signup', (req, res, next) => {
  res.render('register');
});
router.get('/register', (req, res, next)=>{
    res.render('register')
});
router.get('/register_fail', (req, res, next)=>{
    res.render('register_fail')
});
router.get('/profile_panel', isAuthenticated, (req, res, next)=>{
    res.render('profile_panel')
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: 'profile_panel',
    failureRedirect: '/register_fail',
  failureFlash: true
})); 

router.get('/login', (req, res, next) => {
  res.render('login');
});


router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/profile_panel',
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


module.exports = router;