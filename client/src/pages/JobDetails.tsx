import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaSuitcase, FaLocationDot, FaUser, FaMoneyBill } from "react-icons/fa6";
import AppButton from "@/components/AppButton";
import SectionContainer from "@/components/SectionContainer";
import type { Job } from "@/types/types";
import { jobsData } from "../assets/assets";
import "./JobDetails.css";
import JobCard from "@/components/JobCard";

const JobDetails = () => {
    const [job, setJob] = useState<Job | null>(null);
    const [moreJobs, setMoreJobs] = useState<Job[]>([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchJob = async () => {
            const job = jobsData.find((jobEl: Job) => jobEl._id === id);
            console.log(job);
            setJob(job);
        };

        fetchJob();
    }, [id]);

    useEffect(() => {
        const fetchMoreJobs = async () => {
            const moreJobs = jobsData
                .filter((jobEl: Job) => jobEl.companyId._id === job?.companyId._id)
                .slice(0, 3);

            setMoreJobs(moreJobs);
        };

        if (job) {
            fetchMoreJobs();
        }
    }, [job]);

    const moreJobsList = moreJobs.map((jobEl: Job) => (
        <li key={jobEl._id}>
            <JobCard job={jobEl} />
        </li>
    ));

    const salary = job?.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    function handleApplyNow() {
        console.log("Apply Now");
    }

    return (
        <>
            <SectionContainer>
                <div className="top-container">
                    <div className="top-container-details">
                        <div className="top-container-img">
                            <img src={job?.companyId.image} alt={job?.companyId.name} />
                        </div>
                        <div className="top-container-details-content">
                            <h1>{job?.title}</h1>
                            <div className="top-container-info">
                                <div>
                                    <FaSuitcase />
                                    <span>{job?.companyId.name}</span>
                                </div>
                                <div>
                                    <FaLocationDot />
                                    <span>{job?.location}</span>
                                </div>
                                <div>
                                    <FaUser />
                                    <span>{job?.level}</span>
                                </div>
                                <div>
                                    <FaMoneyBill />
                                    <span>CTC: {salary}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-container-actions">
                        <AppButton onClick={handleApplyNow}>Apply Now</AppButton>
                    </div>
                </div>
            </SectionContainer>

            <SectionContainer isDiv={true}>
                <div className="job-details-container">
                    <main className="job-details-main">
                        <h2 className="job-details-title">Job Details</h2>
                        <div
                            className="job-details-content"
                            dangerouslySetInnerHTML={{ __html: job?.description || "" }}
                        ></div>
                    </main>

                    <aside className="job-details-sidebar">
                        <h2>More Jobs from {job?.companyId.name}</h2>
                        <ul className="job-details-sidebar-list">{moreJobsList}</ul>
                    </aside>
                </div>
            </SectionContainer>
        </>
    );
};

export default JobDetails;
