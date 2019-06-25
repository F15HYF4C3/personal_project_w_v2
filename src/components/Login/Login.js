import React, {Component} from 'react';
import './Login.css';
import axios from 'axios';
import {connect} from 'react-redux';


class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

    login = (event) =>{
        event.preventDefault();
        const credentials = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/api/login', credentials)
        .then((login)=>{
            if(login.data.success){
                this.props.dispatch({
                    type: 'guest',
                    payload: login.data.guest
                })
                this.props.history.push('/Home');
            }else{
                alert('Failed Login Attempt')
            }
        })
    }
    
    handleChange = (e) => {
      console.log("hit")
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
       
    return ( 
    
<div className="login">
{/* <form onSubmit={this.login}> */}
    <h1>Welcome to the Wedding Coordinator, Please Login.
</h1>
    <div className="login-box">
    <p>If you are new to this website, please click the register button below, and sign up as an Event Administrator or an Event Contributor. Event Administrators will be given a blank canvas to start their wedding journey.</p>
        <input 
        type="text" 
        placeholder="email" 
        name="email" 
        onChange={this.handleChange} 
        value={this.state.email} />

        <input 
        type="password" 
        placeholder="Password" 
        name="password" 
        onChange={this.handleChange} 
        value={this.state.password} />

        <div className="buttons">

            <button type="submit" onClick={this.login}>
                Login
                {/* <Link to="/Home"></Link> */}
            </button>

            <button type="submit" onClick={this.register}>
                Register
            {/* <Link to="/Register"></Link> */}
            </button>
            
        </div>

    </div>
{/* </form> */}
</div>


    )
}
}
export default  connect(state => state)(Login)