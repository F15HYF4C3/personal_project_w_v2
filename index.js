const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const auth = require('./server-controller/controller/auth');
// const login = require('./server-controller/controller/auth');
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


    // app.get('/api/guest', (req, res, next)=>{
    //     const db = req.app.get('db');
    //     db.GUEST_TABLE({id:req.query.id})
    //     .then((guest)=>{
    //         console.log(guest)
    //         res.send(guest)

    //     })
    //     // .catch
    // })

app.use(cors());
app.use(bodyParser.json(SESSION_SECRET));
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge:30000}
}));

app.use('/api/*', (req, res, next) => {
    if(!req.session.user){
        res.send({success:false, message:'You will need to login to access this page.'})
    }else{
        next();
    }

})



app.post('/auth/register', auth.register)
app.post('/auth/login', auth.login)

app.get('/auth/guest', (req, res, next)=>{
    if(req.session.user){
        res.send({success:true})
    }else{
        res.send({success:false})
    }
   
})







app.listen(PORT, ()=>{
    console.log(`Man the bow! portside ${PORT}!`)
})
