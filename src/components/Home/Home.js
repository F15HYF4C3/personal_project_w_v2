import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
import * as Actions from '../../redux/actions/action_creator';
import Logout from '../../static/Logout/Logout'
// import MasterList from '../MasterList/MasterList';
// import MyList from '../MyList/MyList';
// import WeddingColors from '../WeddingColors/WeddingColors';
import { connect } from 'react-redux';


class Home extends Component {
//take away individual divs to make items linked display in-a-line
    render(){
        return (
            <div className="Home">
                <Logout/>
                <h1>Home</h1>

                <div>
                <Link to="/Master">
                    <span containerStyle="font-size: 48px; color: Dodgerblue;">
                        <i class="fas fa-angle-double-left">Master List</i>
                    </span>
                </Link>  
                </div>

                <div>
                <Link to="/MyList">
                    <span containerStyle="font-size: 48px; color: Dodgerblue;">
                        <i class="fas fa-angle-double-left">My List</i>
                    </span>
                </Link>
                </div>

                <div>
                <Link to="/WeddingColors">
                    <span containerStyle="font-size: 48px; color: Dodgerblue;">
                        <i class="fas fa-angle-double-left">Wedding Colors</i>
                    </span>
                </Link>
                </div>

<span>
    {/* <WeddingColors/> */}
</span>


            </div>
        )
    }
}
export default connect(state => state, Actions)(Home);