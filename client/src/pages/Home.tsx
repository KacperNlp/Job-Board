import React, { useState, useEffect } from "react";
import Filters from "@/components/Filters";
import JobCard from "@/components/JobCard";
import HeroBanner from "@/components/HeroBanner";
import SectionContainer from "@/components/SectionContainer";
import { jobsData } from "../assets/assets";
import "./Home.css";

import type { Job } from "@/types/types";

const Home = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        setJobs(jobsData);
    }, []);

    const jobsList = jobs.map((job) => <JobCard key={job._id} job={job} />);

    return (
        <>
            <SectionContainer>
                <HeroBanner />
            </SectionContainer>
            <SectionContainer>
                <div className="jobs-list-container">
                    <aside className="jobs-list-filters">
                        <h2>Filters:</h2>
                        <Filters />
                    </aside>
                    <main>
                        <div className="jobs-list-header">
                            <h1>Latest Jobs</h1>
                            <p>Find the latest jobs in the industry</p>
                        </div>
                        <div className="jobs-list">{jobsList}</div>
                    </main>
                </div>
            </SectionContainer>
        </>
    );
};

export default Home;
