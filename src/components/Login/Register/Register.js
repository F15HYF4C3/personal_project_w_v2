import React from 'react';

register = (event) =>{
    event.preventDefault();
    const newUser = {
        full_name: this.state.full_name,
        email: this.state.email,
        password: this.state.password,
        bg_names: this.state.bg_names
    }
    axios.post('/api/register', newUser)
    
    .then((newVisit)=>{
        if(newVisit.data.register){
            
            this.props.dispatch({
                type: 'users',
                payload: newVisit.data.users
                
            })
            this.props.history.push('/dashboard');
            
        }else{
            console.log(resp);
            alert('This user already exists, please proceed to login page.')
        }
    })
}
const Register = (props) =>{

    return (
        <div className="Register">
            <h1>Register</h1>
        </div>
    )
}
export default Register