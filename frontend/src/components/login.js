import React from 'react'

export default function Login() {
    return (
        <div >
            <h1 className="header">What's For Dinner?</h1>
            <div className="App">
            <h3><form>
                <label>Email:</label><br/>
                <input /><br/><br/>
                <label>Password:</label><br/>
                <input /><br/>
                <input type="submit" />
            </form>
            </h3>
            <h4>No account? <a href="/signup" className="App-link">Sign Up</a></h4>
            </div>
        </div>
    )
} 