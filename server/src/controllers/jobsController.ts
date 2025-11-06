import { Request, Response } from "express";
import Job from "../models/Job";

export const getJobs = async (req: Request, res: Response) => {
    const { page, pageSize } = req.query;

    const jobs = await Job.find()
        .skip((Number(page) - 1) * Number(pageSize))
        .limit(Number(pageSize));

    res.json({ jobs });
};

export const getJobById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ job: id });
};
