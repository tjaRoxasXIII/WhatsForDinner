import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'
// import { signIn } from '../actions/userActions'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const data = {user: {
        email,
        password
        }
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
        

    const handleOnSubmit = (event) => {
        event.preventDefault()
        // signIn(requestOptions)
        dispatch({ type: 'START_SIGN_IN'})
        fetch("http://localhost:3000/login", requestOptions)
            .then(response => response.json())
            .then(data => { 
                if (data.user) {
                    localStorage.setItem("token", data.token)
                    dispatch({type: 'SIGN_IN', payload: data.user})
                }
                else {
                    console.log(data)
                    alert("No user could be authenticated.  Please check your email and password.")
                }
            })
        
    }

    return (
        <div >
            <h1 className="header">What's For Dinner?</h1>
            <div className="App">
            <h3>
                <form onSubmit={handleOnSubmit}>
                    <label>Email:</label><br/>
                    <input name="email" onChange={e => setEmail(e.target.value)}/><br/><br/>
                    <label>Password:</label><br/>
                    <input name="password" type="password" onChange={e => setPassword(e.target.value)}/><br/>
                    <input type="submit" />
                </form>
            </h3>
            <h4>No account? <a href="/signup" className="App-link">Sign Up</a></h4>
            </div>
        </div>
    )
}
