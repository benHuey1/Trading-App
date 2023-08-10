import React from "react";
import Form from "../Form/Form";

export default function LoginSignUp() {
    return (
        <>
        <section className="login_signup">
            <div className="loginPage">
                <h2>Login</h2>
                <p>Welcome to our Trading App !</p>
                <Form />
                <p>Not yet registered ? <a href="">Sign-Up</a> </p>
            </div>
            <div className="signUpPage">
                <h2>Sign-up</h2>
                <p>Welcome to our Trading App !</p>
                <p>It's time to Level Up, go for your own account !</p>
                <Form />
                <span>Already registered ? <a href="">Login</a> </span>
            </div>
        </section>
        </>
        )
}