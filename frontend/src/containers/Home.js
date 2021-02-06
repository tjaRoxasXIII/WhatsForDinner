import React from 'react'
// import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
    const yourName = useSelector(state => state.auth.name) 
    const dispatch = useDispatch();

    const signOut = (e) => {
        localStorage.removeItem("token")
        dispatch({ type: 'SIGN_OUT'})
    }

    return (
        <div className="App">
            <h2 className="header">What's for dinner, {yourName}?
                <button className="Options" onClick={signOut}>Sign Out</button>
            </h2>
            
        </div>
    )
} 