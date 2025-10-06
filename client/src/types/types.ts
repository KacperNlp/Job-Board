export interface Job {
    logo: string;
    company: string;
    id: number;
    title: string;
    description: string;
    location: string;
    level: string;
    salary: {
        min: number;
        max: number;
    };
}
