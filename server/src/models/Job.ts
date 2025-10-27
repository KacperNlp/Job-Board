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
