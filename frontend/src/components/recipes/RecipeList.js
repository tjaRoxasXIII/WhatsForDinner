import React from 'react'
import Recipe from './Recipe'

 const RecipeList = ({ recipes }) => {
    return (
        <div >
            { recipes.map(recipe => <Recipe 
                name={recipe.name}
            />)}
        </div>
    )

}

export default RecipeList