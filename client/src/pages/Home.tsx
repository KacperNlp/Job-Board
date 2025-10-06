import { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";
import SectionContainer from "@/components/SectionContainer";
import jobsData from "@/data/jobs.json";
import "./Home.css";

import type { Job } from "@/types/types";

const Home = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        setJobs(jobsData);
    }, []);

    const jobsList = jobs.map((job) => <JobCard key={job.id} job={job} />);

    return (
        <>
            <SectionContainer>
                <main>
                    <div className="jobs-list-header">
                        <h1>Latest Jobs</h1>
                        <p>Find the latest jobs in the industry</p>
                    </div>
                    <div className="jobs-list">{jobsList}</div>
                </main>
            </SectionContainer>
        </>
    );
};

export default Home;
