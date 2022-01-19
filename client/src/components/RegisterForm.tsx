import React from "react";

const RegisterForm = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
        const data = await response.json();
        alert(data.message);
        return;
    }

    return (
        <div className="RegisterForm">
            <form>
                <label>Username:
                    <input
                        type="text"
                        name="usernameInput"
                        required={true}
                        onChange={e => setUsername(e.target.value)} />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="emailInput"
                        required={true}
                        onChange={e => setEmail(e.target.value)} />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="passwordInput"
                        required={true}
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default RegisterForm;