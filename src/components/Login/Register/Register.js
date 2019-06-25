import React, {Component} from 'react';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            full_name: "",
            email: "",
            password: "",
            bg_names: ""
        }
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
            console.log(resp);
            alert('This user already exists, please proceed to login page.')
        }
    })
}
handleChange = (e) => {
    console.log("hit")
      this.setState({
          [e.target.name]: e.target.value
      })
  }



}


  
export default Register