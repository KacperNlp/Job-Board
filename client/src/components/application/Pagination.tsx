import type { Pager } from "@/types/types";
import "./Pagination.css";

interface PaginationProps {
    pager: Pager;
    onPageChange: (page: number) => void;
}

const Pagination = ({ pager, onPageChange }: PaginationProps) => {
    const paginationButtons = [];

    function handlePageChange(page: number) {
        onPageChange(page);
    }

    for (let i = 1; i <= pager.totalPages; i++) {
        if (i === 1 || i === pager.totalPages || (i >= pager.page - 2 && i <= pager.page + 2)) {
            paginationButtons.push(
                <button
                    className={`pagination-button ${i === pager.page ? "active" : ""}`}
                    onClick={() => handlePageChange(i)}
                    key={i}
                >
                    {i}
                </button>
            );
        } else if (i === pager.page - 3 || i === pager.page + 3) {
            paginationButtons.push(
                <span className="pagination-dots" key={i}>
                    ...
                </span>
            );
        }
    }

    return <div className="pagination">{paginationButtons}</div>;
};

export default Pagination;
