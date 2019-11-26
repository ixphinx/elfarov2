const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.ejs');
});

router.get('/default', (req, res)=>{
    res.render('menu/default.ejs')
});

router.get('/pintura', (req, res)=>{
    res.render('menu/pintura.ejs')
});

router.get('/marta_pereyra', (req, res)=>{
    res.render('artistas/marta_pereyra.ejs')
});

module.exports = router;