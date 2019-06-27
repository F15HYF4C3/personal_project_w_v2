const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const massive = require("massive")
const session = require("express-session")
require("dotenv").config()
const path = require("path")
const auth = require("./server-controller/controller/auth")
// const login = require('./server-controller/controller/auth');
// const masterList = require('.server-controller/controller/master_list');
// const myList = require('.server-controller/controller/my_list');

const { PORT, SESSION_SECRET, DATABASE_URL } = process.env
const app = express()

app.use(express.static(path.join(__dirname, "/build")))

massive(DATABASE_URL)
	.then(dbPresence => {
		app.set("db", dbPresence)
		console.log("Data; saving the world one semicolon at a time.")
	})
	.catch(err => {
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

app.use(cors())
app.use(bodyParser.json(SESSION_SECRET))
app.use(
	session({
		secret: SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		cookie: { maxAge: 30000 }
	})
)

app.post("/api/register", auth.register)
app.post("/api/login", auth.login)

app.use("/api/*", (req, res, next) => {
	if (!req.session.user) {
		res.send({
			success: false,
			message: "You will need to login to access this page."
		})
	} else {
		next()
	}
})

app.get("/api/guest", (req, res, next) => {
	if (req.session.user) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
})
app.use("/*", (req, res) => {
	res.sendFile("index.html", {
		root: path.join(__dirname, "build")
	})
})

//GET first - then write your create, update, delete (POST, PUT\PATCH, DELETE)

app.listen(PORT, () => {
	console.log(`Man the bow! portside ${PORT}!`)
})
