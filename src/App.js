import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Home from './components/Home/Home';
import MasterList from './components/MasterList/MasterList';
import MyList from './components/MyList/MyList';
import WeddingColors from './components/WeddingColors/WeddingColors';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
	
		}
	}

  componentDidMount(){
    axios.get('/api/login')
      .then((response)=>{
        console.log(response.data)
      })
  }

	render() {
		// let path = this.props;
		// let home;
		// 	if(path ==="/Master"  
		// 	|| path ==="/MyList" 
		// 	|| path ==="/WeddingColors"){
		// 		home = <Home/>
		// 	} else {
		// 		home = null
		// }
		// Keep getting TypeError: Cannot read property 'pathname' of undefined
	
		return (
			<div className="app">
				{/* {home} */}
			{/* <h1></h1> */}
				<Switch>
					<Route path="/Home" component={Home} />
					<Route path="/Master" component={MasterList} />
					<Route path="/MyList" component={MyList} />
					<Route path="/WeddingColors" component={WeddingColors} />
					<Route path="/Register" component={Register} />
					<Route path="/" component={Login} />
				</Switch>
			
			</div>
		);
	}
}

export default App;