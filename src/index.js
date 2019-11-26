const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//Server
mongoose.connect('mongodb+srv://admin:huevon33@database-aizqn.gcp.mongodb.net/test?retryWrites=true&w=majority')
    .then(()=> console.log('Database OK'))
    .catch(e => console.log(e));

//Middlewares


//Rutas
app.use(require('./routes/index'));


//Archivos estaticos
app.use(express.static(path.join(__dirname + 'public')));



//Run dev
app.listen(app.get('port'), ()=>{
    console.log('Servidor conectado en puerto: ' + app.get('port'));
});