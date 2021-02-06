import React from 'react'

export default function Home() {

    const signOut = (e) => {
        localStorage.removeItem("token")
    }

    return (
        <div className="App">
            <h2 className="header">What's for dinner?
                <button className="Options" onClick={signOut}>Sign Out</button>
            </h2>

        </div>
    )
} 