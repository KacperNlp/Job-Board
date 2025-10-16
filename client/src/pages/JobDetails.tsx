import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AppButton from "@/components/AppButton";
import SectionContainer from "@/components/SectionContainer";
import type { Job } from "@/types/types";
import { jobsData, assets } from "../assets/assets";
import "./JobDetails.css";

const JobDetails = () => {
    const [job, setJob] = useState<Job | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchJob = async () => {
            const job = jobsData.find((jobEl: Job) => jobEl._id === id);
            setJob(job);
        };
        fetchJob();
    }, [id]);

    function handleApplyNow() {
        console.log("Apply Now");
    }

    return (
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
                                <img src={assets.location_icon} alt="Location" />
                                <span>{job?.location}</span>
                            </div>
                            <div>
                                <img src={assets.money_icon} alt="Salary" />
                                <span>{job?.salary}</span>
                            </div>
                            <div>
                                <img src={assets.suitcase_icon} alt="Experience" />
                                <span>{job?.companyId.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-container-actions">
                    <AppButton onClick={handleApplyNow}>Apply Now</AppButton>
                </div>
            </div>
        </SectionContainer>
    );
};

export default JobDetails;
