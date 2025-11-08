import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import AppButton from "../ui/AppButton";
import AppInput from "../ui/AppInput";
import "./RegisterLoginForm.css";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div className="register-form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <AppInput
                    label="Name"
                    type="text"
                    value={name}
                    onChange={setName}
                    placeholder="Enter your name"
                >
                    <FaUser />
                </AppInput>
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
                    Register
                </AppButton>
            </form>
        </div>
    );
};

export default RegisterForm;
