import { Schema, model } from "mongoose";

export interface Job {
    _id: string;
    title: string;
    location: string;
    level: string;
    companyId: Company;
    description: string;
    salary: number;
    date: number;
    category: string;
}

export interface Company {
    _id: string;
    name: string;
    email: string;
    image: string;
}

export interface JobApplied {
    _id: string;
    company: string;
    title: string;
    location: string;
    date: string;
    status: string;
    logo: string;
}

const JobSchema = new Schema<Job>({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

const JobModel = model<Job>("Job", JobSchema);

export default JobModel;
