import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaSuitcase, FaLocationDot, FaUser, FaMoneyBill } from "react-icons/fa6";
import AppButton from "@/components/ui/AppButton";
import SectionContainer from "@/components/ui/SectionContainer";
import type { Job } from "@/types/types";
import "./JobDetails.css";
import JobCard from "@/components/application/JobCard";

const JobDetails = () => {
    const [job, setJob] = useState<Job | null>(null);
    const [moreJobs, setMoreJobs] = useState<Job[]>([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`/api/jobs/${id}`);
                const data = await response.json();
                setJob(data.job);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJob();
    }, [id]);

    useEffect(() => {
        const fetchMoreJobs = async () => {
            try {
                if (!job?.companyId._id) return;
                const response = await fetch(
                    `/api/jobs/${job?.companyId._id}/related?category=${job?.category}&excludeId=${id}`
                );
                const data = await response.json();
                setMoreJobs(data.relatedJobs);
            } catch (error) {
                console.error(error);
            }
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
                            <img src={job?.companyId?.image} alt={job?.companyId?.name} />
                        </div>
                        <div className="top-container-details-content">
                            <h1>{job?.title}</h1>
                            <div className="top-container-info">
                                <div>
                                    <FaSuitcase />
                                    {job?.companyId ? (
                                        <span>{job?.companyId?.name}</span>
                                    ) : (
                                        <span>Unknown Company</span>
                                    )}
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
                        <h2>More Jobs from {job?.companyId?.name}</h2>
                        {moreJobsList.length > 0 ? (
                            <ul className="job-details-sidebar-list">{moreJobsList}</ul>
                        ) : (
                            <p>No more jobs found</p>
                        )}
                    </aside>
                </div>
            </SectionContainer>
        </>
    );
};

export default JobDetails;
