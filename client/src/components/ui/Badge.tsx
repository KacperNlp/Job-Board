import "./Badge.css";

const Badge = ({ children }: { children: React.ReactNode }) => {
    return <span className="badge">{children}</span>;
};

export default Badge;
