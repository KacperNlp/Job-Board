import React from "react";
import "./AppInput.css";

interface AppInputProps {
    children?: React.ReactNode;
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

const AppInput = ({ children, label, type, value, onChange, placeholder }: AppInputProps) => {
    const randomId = Math.random().toString(36).substring(2, 15);

    return (
        <div className="app-input">
            <label htmlFor={randomId}>{label}</label>
            <div className="app-input-container">
                {children ? <span className="app-input-icon">{children}</span> : null}
                <input
                    className={children ? "is-icon" : ""}
                    id={randomId}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default AppInput;
