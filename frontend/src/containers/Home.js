import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RecipeList from '../components/recipes/RecipeList'

export default function Home() {
    const [yourRecipes, setYourRecipes] = useState([])
    const yourID = useSelector(state => state.auth.userId)
    const yourName = useSelector(state => state.auth.name)
    const dispatch = useDispatch();

    useEffect(() => {

        fetch(`http://localhost:3000/users/${yourID}/recipes`)
            .then(resp => resp.json())
            .then(data => {
                setYourRecipes(data)
                console.log(yourRecipes)
            })
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
            <h5>*You'll want to create a recipe component here*</h5>
            <RecipeList recipes={yourRecipes}/>
        </div>
    )
} 