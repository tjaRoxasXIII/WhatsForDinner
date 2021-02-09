import React from 'react'

const Recipe = ({ recipe }) => {
    let card =
        <div>
            <h3>
                {recipe.name}
            </h3>
            <h5>{recipe.food_type}</h5>
            <ul>
                <li>
                    Serving Size: {recipe.serving_size}
                </li>
                <li>
                    Prep Time: {recipe.prep_time} minutes
                </li>
                <li>
                    Cook Time: {recipe.cook_time} minutes
                </li>
            </ul>
        </div>

    return (
        <div className="recipe_card">
            {card}
        </div>
    )

}

export default Recipe