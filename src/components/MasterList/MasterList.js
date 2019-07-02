import React, { Component } from "react";
import "./MasterList.css";
import * as Actions from "../../redux/actions/action_creator";
import Banner from "../../static/Banner";
import { connect } from "react-redux";

class MasterList extends Component {
	render() {
		return (
			<div className="master-list">
				<Banner />
				<h1>MasterList</h1>

				<div className="top-section">
					<div className="title">Available Items - Volunteer to help!</div>
					<div className="non-mvp">
						Short Explanation of how to accept items you wnt to volunteer for
					</div>

					{/* {ListItems} */}
				</div>
				<div
					className="list-items"
					style={{
						backgroundImage: `url("./WeddingDaisySmaller.PNG")`
					}}>
					<span>Item Section 1</span>
					<span>Item Section 2</span>
					<span>item Section 3</span>
				</div>
			</div>
		);
	}
}
export default connect(
	state => state,
	Actions
)(MasterList);
