const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const { mongodb } = require('./keys');

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
require('./passport/local-auth');

//Server
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://admin:huevon33@database-aizqn.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database OK'))
    .catch(e => console.log(e));


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    console.log(app.locals)
    next();
});

//Rutas
app.use(require('./routes/index'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


//Run dev
app.listen(app.get('port'), () => {
    console.log('Servidor conectado en puerto: ' + app.get('port'));
});