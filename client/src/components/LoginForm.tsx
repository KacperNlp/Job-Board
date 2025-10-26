import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <AppInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="Enter your email"
                >
                    <FaEnvelope />
                </AppInput>
                <AppInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="Enter your password"
                >
                    <FaLock />
                </AppInput>

                <AppButton buttonType="submit" variant="primary">
                    Login
                </AppButton>
            </form>
        </div>
    );
};

export default LoginForm;
