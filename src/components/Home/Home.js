import React, { Component } from "react";
// import Image from "react-image-resizer";
import "./Home.css";
import { Link } from "react-router-dom";
import * as Actions from "../../redux/actions/action_creator";
import Logout from "../../static/Logout/Logout";
// import MasterList from '../MasterList/MasterList';
// import MyList from '../MyList/MyList';
// import WeddingColors from '../WeddingColors/WeddingColors';
import { connect } from "react-redux";

class Home extends Component {
	// Need to add componentDidMount(){
	// 	axios.get('/api/')
	// 	.then(({data}) =>{
	// 		this.setState({
	// 			thing:thing2

	// 		})
	// 	})
	// }
	//take away individual divs to make items linked display in-a-line
	render() {
		return (
			<div className="Home">
				<Logout className="logout" />

				<h1>August || Emma & Patrick's Wedding || 2019</h1>

				<div className="display-mid">
					<div className="photo-box">
						<div className="photo">August 1st, 2019</div>
					</div>
					<div className="button-box">
						<div className="Links">
							<button>
								<Link to="/Master" className="links">
									Master Volunteer List
								</Link>
							</button>

							<button>
								<Link to="/MyList" className="links">
									My List
								</Link>
							</button>

							<button>
								<Link to="/WeddingColors" className="links">
									Wedding Colors
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="non-mvp">Coming Soon</div>
			</div>
		);
	}
}

export default connect(
	state => state,
	Actions
)(Home);
