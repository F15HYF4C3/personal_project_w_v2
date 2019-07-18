import React from "react";
import { Link } from "react-router-dom";
import "./Logout.css";

export default function Logout() {
	return (
		<div>
			<button className="logout-button">
				<Link to="/Login" className="links">
					Logout
				</Link>
			</button>
		</div>
	);
}
