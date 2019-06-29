import React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
	return (
		<div>
			<div className="logout">
				<Link to="/Login">
					<span containerstyle="font-size: 48px; color: Dodgerblue;">
						<i className="fas fa-angle-double-left">Logout</i>
					</span>
				</Link>
			</div>
		</div>
	);
}
