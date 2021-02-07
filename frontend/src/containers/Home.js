import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
    const yourName = useSelector(state => state.auth.name)
    const yourID = useSelector(state => state.auth.userId)
    const [yourRecipes, setYourRecipes] = useState({recipes: []})
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${yourID}/recipes`)
            .then(resp => resp.json())
            .then(data => setYourRecipes(data.data))
    }, [])

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