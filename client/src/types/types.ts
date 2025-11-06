export interface CompanySummary {
    _id: string;
    name: string;
    email: string;
    image: string;
}

export interface Job {
    _id: string;
    title: string;
    location: string;
    level: string;
    companyId: CompanySummary;
    description: string;
    salary: number;
    date: number;
    category: string;
}

export interface JobApplied {
    company: string;
    title: string;
    location: string;
    date: string;
    status: string;
    logo: string;
}

interface Pager {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}
