import { Link } from "react-router";
import Badge from "./Badge";
import AppButton from "./AppButton";
import type { Job } from "@/types/types";
import "./JobCard.css";

const JobCard = ({ job }: { job: Job }) => {
    const badge = <Badge>{job.level}</Badge>;

    const handleApplyNow = () => {
        console.log("Apply Now");
    };

    const handleViewDetails = () => {
        console.log("View Details");
    };

    return (
        <div className="job-card">
            <img src={job.logo} alt={job.company} />
            <strong className="job-card-title">{job.title}</strong>
            <div className="job-card-badges">{badge}</div>
            <p className="job-card-description">{job.description}</p>

            <div className="job-card-footer">
                <AppButton onClick={handleApplyNow}>Apply Now</AppButton>
                <Link to={`/jobs/${job.id}`}>
                    <AppButton onClick={handleViewDetails} variant="secondary">
                        View Details
                    </AppButton>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
