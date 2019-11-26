const express = require('express');
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


module.exports = router;