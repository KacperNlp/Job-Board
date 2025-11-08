import { Request, Response } from "express";
import Job from "../models/Job";

export const getJobs = async (req: Request, res: Response) => {
    const { page, pageSize } = req.query;
    const total = await Job.countDocuments();

    const jobs = await Job.find()
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
