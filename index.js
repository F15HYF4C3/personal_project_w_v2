const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const login = require('./server-controller/controller/login');
const register = require('./server-controller/controller/login');
// const masterList = require('.server-controller/controller/master_list');
// const myList = require('.server-controller/controller/my_list');

const {PORT, SESSION_SECRET, DB_STRING} = process.env;
const app = express();

massive(DB_STRING)
    .then((dbPresence)=>{
        app.set('db', dbPresence)
        console.log('Data; saving the world one semicolon at a time.')
    })
    .catch((err)=>{
        console.log(`You have been defeated by ${err}.`)
    })

    app.get('/api/guest', (req, res, next)=>{
        const db = req.app.get('db');
        db.GUEST_TABLE({id:req.query.id})
        .then((guest)=>{
            console.log(guest)
            res.send(guest)

        })
        // .catch
    })
// app.get('/api/guests', function(rq, res, next){
//     req.app.get('db').GUEST_TABLE()
//     .then(guests =>{})
// })
app.use(cors());
app.use(bodyParser.json(SESSION_SECRET));
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge:30000}
}));




app.post('/api/register', register.register)
app.post('/api/login', login.login)

app.use((req, res, next)=>{
    if(req.session.user){
        next();
    }else{
        res.send({success:false, isLoggedIn:false, err:"Login or Sign Up"})
    }
})  

app.listen(PORT, ()=>{
    console.log(`Man the bow! portside ${PORT}!`)
})
