import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        if (json.success === true) {
            console.log(json.message);
            console.log(json);
            localStorage.setItem("access", json.data.access)
            localStorage.setItem("refresh", json.data.refresh)
            return navigate('/dashboard');
        } else {
            alert(json.message);
        }
        setEmail("");
        setPassword("");
        return;
    }

    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input
                        type="email"
                        value={email}
                        name="emailInput"
                        required={true}
                        onChange={e => setEmail(e.target.value)} />
                </label>
                <label>Password:
                    <input
                        value={password}
                        type="password"
                        name="passwordInput"
                        required={true}
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div >
    );
}

export default LoginForm;