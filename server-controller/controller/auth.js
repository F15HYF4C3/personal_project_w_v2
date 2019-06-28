const bcrypt = require("bcryptjs")
const saltRounds = 10

module.exports = {
	login: (req, res, next) => {
		const db = req.app.get("db")
		const { email, password } = req.body

		let currentguest
		db.guest_table
			.findOne({ email })
			.then(guest => {
				if (guest) {
					currentguest = guest
					return bcrypt.compare(password, guest.password)
				} else {
					throw "Guest does not exist! Please Register."
				}
			})

			.then(isMatch => {
				if (isMatch) {
					delete currentguest.password
					req.session.guest = currentguest
					res.send({ success: true, currentguest })
				} else {
					throw "Incorrect credentials"
				}
			})
			.catch(err => {
				res.send({ success: false, err })
			})
	},

	register: (req, res, next) => {
		const db = req.app.get("db")
		const { full_name, email, password, bg_names } = req.body

		db.guest_table
			.findOne({ email })
			.then(guest => {
				if (guest) {
					throw "Sorry this email already exists. Please login."
				} else {
					return bcrypt.hash(password, saltRounds)
				}
			})
			.then(hash => {
				return db.guest_table.insert({
					full_name,
					email,
					password: hash,
					bg_names
				})
			})
			.then(guest => {
				delete guest.password
				req.session.guest = guest
				res.send({ success: true, guest })
			})
			.catch(err => {
				res.send({ success: false, err })
			})
	}
}
