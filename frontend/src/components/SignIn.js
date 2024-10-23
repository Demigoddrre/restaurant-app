import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form>
                <label>Email:</label>
                <input type="email" name="email" required />

                <label>Password:</label>
                <input type="password" name="password" required />

                <button type="submit">Sign In</button>
            </form>
            <p>Or</p>
            <button className="google-signin">Sign in with Google</button>
        </div>
    );
};

export default SignIn;
