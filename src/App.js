import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MasterList from './components/MasterList/MasterList';
import MyList from './components/MyList/MyList';
import WeddingColors from './components/WeddingColors/WeddingColors';

class App extends Component {
  componentDidMount(){
    axios.get('/api/login')
      .then((response)=>{
        console.log(response.data)
      })
  }
	render() {
		return (
			<div className="app">
			
					<Switch>
						<Route path="/Home" component={Home} />
						<Route path="/Master" component={MasterList} />
						<Route path="/MyList" component={MyList} />
            <Route path="/WeddingColors" component={WeddingColors} />
						<Route path="/" component={Login} />
					</Switch>
			
			</div>
		);
	}
}

export default App;