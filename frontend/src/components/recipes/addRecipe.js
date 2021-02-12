import React from 'react'

export default function AddRecipe() {
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    const closeModal = () => {
        let modal = document.getElementById("recipe-modal")
        let form = document.getElementById("recipe-form")
        form.reset()
        modal.style.display = "none"
    }

    return (
        <div class="modal" id="recipe-modal">
            <div class="modal-content">
                <h3>Add a Recipe
                    <span class="close" onClick={closeModal}>&times;</span>
                </h3>
                <form id="recipe-form" onSubmit={handleOnSubmit}>
                    <label>Recipe Name:  </label>
                    <input /><br/>

                    <label>Food Type:  </label>
                    <input type="select"/><br/>

                    <label>Serving Size:  </label>
                    <input type="select"/><br/>

                    <label>Prep Time:  </label>
                    <input /><br/>

                    <label>Cook Time:  </label>
                    <input /><br/><br/>

                    <label class="formfield">
                        Instructions:  <textarea rows="4"/><br/>
                    </label>
                </form>
            </div>
        </div>
    )
}