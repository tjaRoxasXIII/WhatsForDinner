import React, {useState, useEffect} from 'react'
// import { useHistory } from 'react-router';
import { signup } from '../actions/userActions'

export default function Signup() {
    //Setting state for form entry fields
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirm] = useState('');

    const user = {user: {
        first_name,
        last_name,
        email,
        password,
        password_confirmation
       }
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(signup(user))
        
    }

    return (
        <div >
            <h1 className="header">Let's Get Your Account Cooking!</h1>
            <div className="App">
            <h3><form onSubmit={handleOnSubmit} >
                <label>First Name:</label><br/>
                <input name="first_name" value={first_name} onChange={e => setFirstName(e.target.value)}/><br/><br/>
                <label>Last Name:</label><br/>
                <input name="last_name" value={last_name} onChange={e => setLastName(e.target.value)}/><br/><br/>
                <label>Email:</label><br/>
                <input name="email" value={email} onChange={e => setEmail(e.target.value)}/><br/><br/>
                <label>Password:</label><br/>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/><br/><br/>
                <label>Confirm Password:</label><br/>
                <input type="password" name="password_confirmation" value={password_confirmation} onChange={e => setPasswordConfirm(e.target.value)}/><br/><br/>
                <input type="submit" />
            </form>
            </h3>
            </div>
        </div>
    )
} 