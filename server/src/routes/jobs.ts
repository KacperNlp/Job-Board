import { Router } from "express";
import { getJobs, getJobById, getRelatedJobs, getJobsFilters } from "../controllers/jobsController";

const router = Router();

router.get("/", getJobs);
router.get("/filters", getJobsFilters);
router.get("/:id", getJobById);
router.get("/:companyId/related", getRelatedJobs);

export default router;
