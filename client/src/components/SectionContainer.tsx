import "./SectionContainer.css";

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
    return <section className="section-container">{children}</section>;
};

export default SectionContainer;
