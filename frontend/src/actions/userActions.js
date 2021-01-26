import { Redirect } from "react-router"

export const signup = (user) => {
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => { 
            if (data.user) {
                localStorage.setItem("token", data.token)
            }
            else {
                console.log(data)
                if (data.email) {
                    alert(`This email address ${data.email}`)
                }
                else {
                    alert(`Your Password and Password Confirmation fields do not match.`)
                }
            }
        })
}