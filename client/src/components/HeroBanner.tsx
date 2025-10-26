import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import AppButton from "./AppButton";
import AppInput from "./AppInput";
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
                <AppInput
                    label="Search"
                    type="text"
                    value={search}
                    onChange={setSearch}
                    placeholder="Search for a job"
                >
                    <FaSearch />
                </AppInput>

                <AppInput
                    label="Location"
                    type="text"
                    value={location}
                    onChange={setLocation}
                    placeholder="Location"
                >
                    <FaMapMarkerAlt />
                </AppInput>

                <AppButton buttonType="submit" variant="primary">
                    Search
                </AppButton>
            </form>
        </div>
    );
};

export default HeroBanner;
