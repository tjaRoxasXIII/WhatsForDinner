import React, {useState} from 'react'

export default function Signup() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault()
        alert(`Submitting:  ${firstName} ${lastName} ${email} ${password} ${passwordConfirm}`)
        this.form.reset()
    }

    return (
        <div >
            <h1 className="header">Let's Get Your Account Cooking!</h1>
            <div className="App">
            <h3><form onSubmit={handleOnSubmit} >
                <label>First Name:</label><br/>
                <input name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/><br/><br/>
                <label>Last Name:</label><br/>
                <input name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/><br/><br/>
                <label>Email:</label><br/>
                <input name="email" value={email} onChange={e => setEmail(e.target.value)}/><br/><br/>
                <label>Password:</label><br/>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/><br/><br/>
                <label>Confirm Password:</label><br/>
                <input type="password" name="passwordConfirmation" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/><br/><br/>
                <input type="submit" />
            </form>
            </h3>
            </div>
        </div>
    )
} 