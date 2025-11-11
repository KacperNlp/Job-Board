import { Link } from "react-router";
import { toast } from "react-toastify";
import Badge from "../ui/Badge";
import AppButton from "../ui/AppButton";
import type { Job } from "@/types/types";
import "./JobCard.css";

const JobCard = ({ job }: { job: Job }) => {
    const badge = <Badge>{job.level}</Badge>;

    const handleApplyNow = async () => {
        try {
            const response = await fetch(`/api/jobs/${job._id}/apply`, {
                method: "POST",
            });
            const data = await response.json();

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {}
    };

    const handleViewDetails = () => {
        console.log("View Details");
    };

    return (
        <div className="job-card">
            {/* <img src={job.companyId.image} alt={job.companyId.name} /> */}
            <strong className="job-card-title">{job.title}</strong>
            <div className="job-card-badges">{badge}</div>
            <div
                className="job-card-description"
                dangerouslySetInnerHTML={{ __html: job.description.slice(0, 100) }}
            />

            <div className="job-card-footer">
                <AppButton onClick={handleApplyNow}>Apply Now</AppButton>
                <Link to={`/jobs/${job._id}`}>
                    <AppButton onClick={handleViewDetails} variant="secondary">
                        View Details
                    </AppButton>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
