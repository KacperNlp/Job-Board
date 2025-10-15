import { useState } from "react";
import AppButton from "./AppButton";
import "./HeroBanner.css";

const HeroBanner = () => {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(search);
        console.log(location);
    }

    return (
        <div className="hero-banner">
            <h2 className="hero-banner-title">Over 10,000 jobs available</h2>
            <p className="hero-banner-description">
                Your dream job is just a click away. Search and apply to your dream job.
            </p>

            <form action="" onSubmit={handleSearch} className="hero-banner-form">
                <label className="sr-only" htmlFor="search">
                    Search
                </label>
                <input
                    placeholder="Search for a job"
                    type="text"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <label className="sr-only" htmlFor="location">
                    Location
                </label>
                <input
                    placeholder="Location"
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <AppButton buttonType="submit" variant="primary">
                    Search
                </AppButton>
            </form>
        </div>
    );
};

export default HeroBanner;
