import React from 'react'

function LoginForm({ isLoggedIn, onLogin }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" required />
                <br />
                <label>Password:</label>
                <input type="password" required />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm