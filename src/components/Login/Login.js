import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
	state = {
		email: "",
		password: ""
	};

	login = () => {
		// event.preventDefault();
		const credentials = {
			email: this.state.email,
			password: this.state.password
		};
		axios.post("/api/login", credentials).then(credentials => {
			if (credentials.data.success) {
				this.props.dispatch({
					type: "guest",
					payload: credentials.data.guest
				});
				this.props.history.push("/Home");
			} else {
				alert("Failed Login Attempt");
			}
		});
	};

	handleChange = event => {
		console.log("hit");
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div className="login">
				<h1>Welcome to the Wedding Coordinator, Please Login.</h1>
				<div className="login-box">
					<p>
						If you are new to this website, please click the register button
						below, and sign up as an Event Administrator or an Event
						Contributor. Event Administrators will be given a blank canvas to
						start their wedding journey.
					</p>
					<input
						type="text"
						placeholder="email"
						name="email"
						onChange={this.handleChange}
						value={this.state.email}
					/>

					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={this.handleChange}
						value={this.state.password}
					/>

					<div className="buttons">
						<button onClick={this.login}>Login</button>

						<button type="submit" onClick={this.register}>
							<Link to="/Register" className="links">
								Register
							</Link>
						</button>
					</div>
				</div>
				{/* </form> */}
			</div>
		);
	}
}
export default connect(state => state)(Login);
