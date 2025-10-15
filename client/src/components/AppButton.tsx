import "./AppButton.css";

const AppButton = ({
    children,
    variant = "primary",
    buttonType = "button",
    onClick,
}: {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    buttonType?: "button" | "submit" | "reset";
    onClick?: () => void;
}) => {
    return (
        <button className={`app-button ${variant}`} onClick={onClick} type={buttonType}>
            {children}
        </button>
    );
};

export default AppButton;
