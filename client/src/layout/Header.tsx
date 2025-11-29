import { useRef, useState } from "react";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router";
import AppButton from "@/components/ui/AppButton";
import AppModal from "@/components/ui/AppModal";
import LoginForm from "@/components/application/LoginForm";
import RegisterForm from "@/components/application/RegisterForm";
import type { AppModalRef } from "@/components/ui/AppModal";
import "./Header.css";

const Header = () => {
    const { openSignIn } = useClerk();
    const { user, isSignedIn } = useUser();
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    const modalRef = useRef<AppModalRef>(null);

    function handleSignIn() {
        openSignIn();
    }

    function handleRecruiterLogin() {
        modalRef.current?.open();
    }

    const notSignedInStructuer = (
        <div className="header-buttons">
            <AppButton onClick={handleRecruiterLogin} variant="secondary">
                Recruiter Login
            </AppButton>
            <AppButton onClick={handleSignIn}>Login In</AppButton>
        </div>
    );

    const signedInStructuer = (
        <div className="header-buttons">
            <Link to="/applications">Applied Jobs</Link>
            <span>|</span>
            <div className="header-buttons-user">
                <span>
                    Hi, {user?.firstName} {user?.lastName}
                </span>
                <UserButton />
            </div>
        </div>
    );

    const dontHaveAnAccountButton = (
        <div className="login-register-bottom-text">
            Don't have an account?{" "}
            <button onClick={() => setIsLoginFormOpen(false)}>Register</button>
        </div>
    );
    const alreadyHaveAnAccountButton = (
        <div className="login-register-bottom-text">
            Already have an account? <button onClick={() => setIsLoginFormOpen(true)}>Login</button>
        </div>
    );

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="logo">
                        <Link to="/" aria-label="Go to home page">
                            <img src="/assets/logo.svg" alt="Insider Logo | Job Board" />
                        </Link>
                    </div>
                    {isSignedIn ? signedInStructuer : notSignedInStructuer}
                </div>
            </header>
            <AppModal ref={modalRef}>
                {isLoginFormOpen ? <LoginForm /> : <RegisterForm />}
                {isLoginFormOpen ? dontHaveAnAccountButton : alreadyHaveAnAccountButton}
            </AppModal>
        </>
    );
};

export default Header;
