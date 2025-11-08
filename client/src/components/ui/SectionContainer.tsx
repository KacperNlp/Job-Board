import "./SectionContainer.css";

const SectionContainer = ({
    isDiv = false,
    children,
}: {
    isDiv?: boolean;
    children: React.ReactNode;
}) => {
    return isDiv ? (
        <div className="section-container">{children}</div>
    ) : (
        <section className="section-container">{children}</section>
    );
};

export default SectionContainer;
