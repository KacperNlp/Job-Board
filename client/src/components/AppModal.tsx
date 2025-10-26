import "./AppModal.css";
import { useImperativeHandle, useState, type ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

export interface AppModalRef {
    open: () => void;
    close: () => void;
}

interface AppModalProps {
    children: ReactNode;
    ref: React.RefObject<AppModalRef | null>;
}

const AppModal = ({ children, ref }: AppModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }));

    function onClose() {
        setIsOpen(false);
    }

    return (
        <div className={`app-modal ${isOpen ? "open" : ""}`}>
            <dialog className="app-modal-content" open={isOpen}>
                <button onClick={onClose} className="close-button">
                    <AiOutlineClose />
                </button>
                <div className="content">{children}</div>
            </dialog>
        </div>
    );
};

export default AppModal;
