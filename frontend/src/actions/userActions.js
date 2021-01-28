

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

