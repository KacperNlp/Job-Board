import { Request, Response } from "express";

export const getJobs = (req: Request, res: Response) => {
    res.json({ jobs: [] });
};

export const getJobById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ job: id });
};
