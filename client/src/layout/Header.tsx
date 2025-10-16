import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router";
import { assets } from "@/assets/assets";
import AppButton from "@/components/AppButton";
import "./Header.css";

const Header = () => {
    const { openSignIn } = useClerk();
    const { user, isSignedIn } = useUser();

    function handleSignIn() {
        openSignIn();
    }

    const notSignedInStructuer = (
        <div className="header-buttons">
            <AppButton variant="secondary">Recruiter Login</AppButton>
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

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/" aria-label="Go to home page">
                        <img src={assets.logo} alt="Insider Logo | Job Board" />
                    </Link>
                </div>
                {isSignedIn ? signedInStructuer : notSignedInStructuer}
            </div>
        </header>
    );
};

export default Header;
