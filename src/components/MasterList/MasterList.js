import React, {Component} from 'react';
import './MasterList.css';
import * as Actions from '../../redux/actions/action_creator';
import Banner from '../../static/Banner';
import { connect } from 'react-redux';


class MasterList extends Component {
    render(){
        return (

            <div className="MasterList">
                <Banner/>
                <h1>MasterList</h1>
                {/* {ListItems} */}
            </div>
        )
    }
}
export default connect(state => state, Actions)(MasterList);