import { Request, Response } from "express";
import Job from "../models/Job";

export const getJobs = async (req: Request, res: Response) => {
    const { page, pageSize, location, category } = req.query;

    const filters: Record<string, unknown> = {};

    if (location) {
        const locations = Array.isArray(location) ? location : (location as string).split(",");
        filters.location = { $in: locations };
    }

    if (category) {
        const categories = Array.isArray(category) ? category : (category as string).split(",");
        filters.category = { $in: categories };
    }

    const total = await Job.countDocuments(filters);

    const jobs = await Job.find(filters)
        .populate("companyId")
        .skip((Number(page) - 1) * Number(pageSize))
        .limit(Number(pageSize));

    res.json({ jobs, total });
};

export const getJobById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const job = await Job.findById(id).populate("companyId");

    res.json({ job });
};

export const getRelatedJobs = async (req: Request, res: Response) => {
    const { companyId } = req.params;
    const { category, excludeId } = req.query;

    let relatedJobs = await Job.find({
        $or: [{ companyId }, { category }],
        _id: { $ne: excludeId },
    })
        .populate("companyId")
        .limit(3);

    res.json({ relatedJobs: relatedJobs || [] });
};

export const getJobsFilters = async (req: Request, res: Response) => {
    const locations = await Job.distinct("location");
    const categories = await Job.distinct("category");

    res.json({ locations, categories });
};

export const applyForJob = async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.json({ message: "Job applied successfully", success: true });
};
