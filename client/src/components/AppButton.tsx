import "./AppButton.css";

const AppButton = ({
    children,
    type = "primary",
    onClick,
}: {
    children: React.ReactNode;
    type?: "primary" | "secondary";
    onClick?: () => void;
}) => {
    return (
        <button className={`app-button ${type}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default AppButton;
