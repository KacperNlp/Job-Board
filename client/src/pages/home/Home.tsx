import { useState, useEffect } from "react";
import Filters from "@/components/application/Filters";
import JobCard from "@/components/application/JobCard";
import HeroBanner from "@/components/application/HeroBanner";
import SectionContainer from "@/components/ui/SectionContainer";
import Pagination from "@/components/application/Pagination";
import "./Home.css";

import type { Job, Pager as PagerType } from "@/types/types";

const Home = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [pager, setPager] = useState<PagerType>({
        page: 1,
        pageSize: 6,
        total: 0,
        totalPages: 0,
    });
    const [filters, setFilters] = useState<{ location: string[]; category: string[] }>({
        location: [],
        category: [],
    });

    async function fetchJobs() {
        try {
            const params = new URLSearchParams({
                page: pager.page.toString(),
                pageSize: pager.pageSize.toString(),
                location: filters.location.join(","),
                category: filters.category.join(","),
            });
            const jobsList = await fetch(`/api/jobs?${params.toString()}`);
            const data = await jobsList.json();
            setJobs(data.jobs);
            setPager({
                ...pager,
                total: data.total,
                totalPages: Math.ceil(data.total / pager.pageSize),
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchJobs();
    }, [pager.page, pager.pageSize]);

    useEffect(() => {
        fetchJobs();
    }, [filters]);

    function handlePageChange(page: number) {
        setPager({ ...pager, page });
    }

    const jobsList = jobs.map((job) => <JobCard key={job._id} job={job} />);

    return (
        <>
            <SectionContainer>
                <HeroBanner />
            </SectionContainer>
            <SectionContainer>
                <div className="jobs-list-container">
                    <aside className="jobs-list-filters">
                        <h2>Filters:</h2>
                        <Filters filtersParent={filters} onChange={setFilters} />
                    </aside>
                    <main>
                        <div className="jobs-list-header">
                            <h1>Latest Jobs</h1>
                            <p>Find the latest jobs in the industry</p>
                        </div>
                        <div className="jobs-list">{jobsList}</div>
                        <div className="jobs-list-pager">
                            <Pagination pager={pager} onPageChange={handlePageChange} />
                        </div>
                    </main>
                </div>
            </SectionContainer>
        </>
    );
};

export default Home;
