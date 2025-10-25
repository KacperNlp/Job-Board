import "./AppModal.css";
import { useImperativeHandle, useState, type ReactNode } from "react";

interface AppModalProps {
    children: ReactNode;
    isOpen: boolean;
}

const AppModal = ({ children }: AppModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }));

    return (
        <div className={`app-modal ${isOpen ? "open" : ""}`}>
            <dialog className="app-modal-content">
                <button onClick={onClose}>Close</button>
                <div className="content">{children}</div>
            </dialog>
        </div>
    );
};

export default AppModal;
