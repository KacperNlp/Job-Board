import { useState, useEffect } from "react";

import AppButton from "@/components/ui/AppButton";
import SectionContainer from "@/components/ui/SectionContainer";
import "./Applications.css";
import type { JobApplied } from "@/types/types";

const Applications = () => {
    const [jobs, setJobs] = useState<JobApplied[]>([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const jobs = [
                {
                    company: "Microsoft",
                    title: "Full Stack Developer",
                    location: "California",
                    date: "2025-01-01",
                    status: "Pending",
                    logo: "https://example.com/assets/company_microsoft.png",
                },
            ];
            setJobs(jobs);
        };

        fetchJobs();
    }, []);

    function handleResume() {
        console.log("Resume");
    }

    function handleEdit() {
        console.log("Edit");
    }

    return (
        <>
            <SectionContainer>
                <div className="applications-header">
                    <h1>Your Resume</h1>
                    <div className="applications-header-actions">
                        <AppButton onClick={handleResume}>Resume</AppButton>
                        <AppButton onClick={handleEdit} variant="secondary">
                            Edit
                        </AppButton>
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer>
                <main className="applications-main">
                    <h2>Jobs You Applied For</h2>
                    <div className="applications-jobs-table">
                        <div className="applications-table-header">
                            <div className="table-header-cell">Company</div>
                            <div className="table-header-cell">Job Title</div>
                            <div className="table-header-cell">Location</div>
                            <div className="table-header-cell">Date</div>
                            <div className="table-header-cell">Status</div>
                        </div>
                        {jobs.map((job) => (
                            <div key={job._id} className="applications-table-row">
                                <div className="table-cell company-cell">
                                    <img src={job.logo} alt={job.company} />
                                    <span>{job.company}</span>
                                </div>
                                <div className="table-cell">{job.title}</div>
                                <div className="table-cell">{job.location}</div>
                                <div className="table-cell">{job.date}</div>
                                <div className="table-cell">
                                    <span
                                        className={`status-badge status-${job.status.toLowerCase()}`}
                                    >
                                        {job.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </SectionContainer>
        </>
    );
};

export default Applications;
