import React, {Component} from 'react';
import './Register.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Register extends Component{
  
        state = {
            full_name: '',
            email: '',
            password: '',
            bg_names: ''
        }
    
handleChange = (event) => {
    console.log("hit")
      this.setState({
          [event.target.name]: event.target.value
      })
  }
register = (event) =>{
    event.preventDefault();
    const newGuest = {
        full_name: this.state.full_name,
        email: this.state.email,
        password: this.state.password,
        bg_names: this.state.bg_names
    }

    axios.post('/api/register', newGuest)
    .then((newGuest)=>{
        if(newGuest.data.register){
            this.props.dispatch({
                type: 'guest',
                payload: newGuest.data.guest
            })
            
            this.props.history.push('/Home');
            
        }else{
           
            alert('This user already exists, please proceed to Login page.')
        }
    })
}





render(){
    return ( 
    
<div className="Register">
 
    <h1>Thank you for visiting the Wedding Coordinator for the first time, please register.</h1>
        <div className="about">
            <p>Sign up as an Event Administrator or an Event Contributor. Event Administrators will be given a blank canvas to start their wedding journey.</p>
        </div> 
        <div>   
            <input 
        type="text" 
        placeholder="Full Name" 
        name="full_name" 
        onChange={this.handleChange} 
        value={this.state.full_name} />

            <input 
        type="text" 
        placeholder="Email" 
        name="email" 
        onChange={this.handleChange} 
        value={this.state.email} />

            <input 
        type="password" 
        placeholder="Password" 
        name="password" 
        onChange={this.handleChange} 
        value={this.state.password} />

            <input 
        type="text" 
        placeholder="Bride & Groom" 
        name="bg_names" 
        onChange={this.handleChange} 
        value={this.state.bg_names} />

        </div>

        <div className="buttons">
            
            <button type="submit" onClick={this.Register}>
                Register
            </button>

            <button onClick={this.Login}>
                
            <Link to="/">Login</Link>
            </button>
            
        </div>
</div>    


    )
}
}
export default  connect(state => state)(Register)