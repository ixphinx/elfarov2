const express = require('express');
const passport = require('passport');
const router = express.Router();
const { isAuthenticated } = require('../passport/auth');
const user = require('../models/database');

router.get('/', (req, res) => {
    user.find({}, function (err, doc) {
        res.render('index', { 'docs': doc });
        console.log(doc);
    });
});

router.get('/default', (req, res) => {
    res.render('default.ejs')
});

router.get('/pintura', isAuthenticated, (req, res) => {
    res.render('secciones/pintura.ejs')
});

router.get('/login_fail', (req, res) => {
    res.render('login_fail')
});

router.post('/profile', async (req, res) => {
    const { id, 
        nombre, 
        apellido, 
        pais, 
        ciudad, 
        direccion,
        cp,
        telefono,
        genero,
        facebook,
        instagram,
        youtube,
        f_tecnica,
        videos,
        imagenes,
        paypal,
        perfil,
        portada,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        vimg1,
        vimg2,
        vimg3,
        vimg4,
        vimg5,
        vimg6,
        vimg7,
        vimg8,
        vimg9,
        vimg10,
        vimg11,
        vimg12,
        vimg13,
        vimg14,
        vimg15,
        vimg16,
        vimg17,
        vimg18,
        vimg19,
        vimg20,
        vimg21,
        vimg22,
        vimg23,
        vimg24,
        vimg25,
        vimg26,
        vimg27,
        vimg28,
        vimg29,
        vimg30,
    } = req.body;
    await user.findByIdAndUpdate(id, {
        nombre,
        apellido,
        pais,
        ciudad,
        direccion,
        cp,
        telefono,
        genero,
        facebook,
        instagram,
        youtube,
        f_tecnica,
        videos,
        imagenes,
        paypal,
        perfil,
        portada,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        vimg1,
        vimg2,
        vimg3,
        vimg4,
        vimg5,
        vimg6,
        vimg7,
        vimg8,
        vimg9,
        vimg10,
        vimg11,
        vimg12,
        vimg13,
        vimg14,
        vimg15,
        vimg16,
        vimg17,
        vimg18,
        vimg19,
        vimg20,
        vimg21,
        vimg22,
        vimg23,
        vimg24,
        vimg25,
        vimg26,
        vimg27,
        vimg28,
        vimg29,
        vimg30,
    });
    req.flash('success_msg', 'Note Updated Successfully');
    console.log(user);
    console.log('prueba');
    res.redirect('profile');
});

router.post('/user', (req, res, next) => {
    user.find({ email: req.body.email }, function (err, doc) {
        res.render('user', { 'docs': doc });
        console.log(doc);
    });

});

//Login routes
router.get('/signup', (req, res, next) => {
    res.render('register');
});
router.get('/register', (req, res, next) => {
    res.render('register')
});
router.get('/register_fail', (req, res, next) => {
    res.render('register_fail')
});
router.get('/profile_panel', isAuthenticated, (req, res, next) => {
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

router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('profile');
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});


module.exports = router;