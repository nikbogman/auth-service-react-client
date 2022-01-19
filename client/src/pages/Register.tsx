import React from "react";
import RegisterForm from "../components/RegisterForm";
import "../styles/Register.css";

const Register = () => {
    return (
        <div className="Register">
            <h1>Register locally:</h1>
            <br></br>
            <RegisterForm />
        </div>
    );

}

export default Register;
