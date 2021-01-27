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
                dispatchEvent({type: 'SIGN_IN', payload: data.user})
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

export const autoSignIn = (token) => {
    if(token){
        fetch('http://localhost:3000/auto_login', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            return (dispatch) => {
                dispatch({ type: 'SIGN_IN', payload: data})
            }
        })
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

