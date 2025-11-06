import { useState, useEffect } from "react";
import Filters from "@/components/Filters";
import JobCard from "@/components/JobCard";
import HeroBanner from "@/components/HeroBanner";
import SectionContainer from "@/components/SectionContainer";
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

    async function fetchJobs() {
        const jobsList = await fetch(`/api/jobs?page=${pager.page}&pageSize=${pager.pageSize}`);
        const data = await jobsList.json();
        console.log(data);
        setJobs(data.jobs);
    }

    useEffect(() => {
        fetchJobs();
    }, [pager.page, pager.pageSize]);

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
                        <Filters />
                    </aside>
                    <main>
                        <div className="jobs-list-header">
                            <h1>Latest Jobs</h1>
                            <p>Find the latest jobs in the industry</p>
                        </div>
                        <div className="jobs-list">{jobsList}</div>
                        <div className="jobs-list-pager">
                            <button onClick={() => setPager({ ...pager, page: 1 })}>1</button>
                            <button onClick={() => setPager({ ...pager, page: 2 })}>2</button>
                        </div>
                    </main>
                </div>
            </SectionContainer>
        </>
    );
};

export default Home;
