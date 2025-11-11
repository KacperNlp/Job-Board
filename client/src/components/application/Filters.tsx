import { useState, useEffect } from "react";
import "./Filters.css";

interface FiltersProps {
    filtersParent: { location: string[]; category: string[] };
    onChange: (filters: { location: string[]; category: string[] }) => void;
}

const Filters = ({ filtersParent, onChange }: FiltersProps) => {
    const [jobLocations, setJobLocations] = useState<string[]>([]);
    const [jobCategories, setJobCategories] = useState<string[]>([]);
    const [filters, setFilters] = useState<{ location: string[]; category: string[] }>(
        filtersParent
    );

    useEffect(() => {
        const fetchFilters = async () => {
            const response = await fetch("/api/jobs/filters");
            const data = await response.json();

            console.log(data.locations);

            setJobLocations(data.locations);
            setJobCategories(data.categories);
        };
        fetchFilters();
    }, []);

    function handleFiltersChange(
        e: React.ChangeEvent<HTMLInputElement>,
        filtersKey: "location" | "category"
    ) {
        const newFilters = [...filters[filtersKey]];
        if (newFilters.includes(e.target.value)) {
            newFilters.splice(newFilters.indexOf(e.target.value), 1);
        } else {
            newFilters.push(e.target.value);
        }

        setFilters({ ...filters, [filtersKey]: newFilters });
        onChange({ ...filters, [filtersKey]: newFilters });
    }

    const locationsFilters = jobLocations.map((location: string) => (
        <li key={location}>
            <input
                type="checkbox"
                id={location}
                name={location}
                value={location}
                checked={filters.location.includes(location)}
                onChange={(e) => handleFiltersChange(e, "location")}
            />
            <label htmlFor={location}>{location}</label>
        </li>
    ));

    const categoriesFilters = jobCategories.map((category: string) => (
        <li key={category}>
            <input
                type="checkbox"
                id={category}
                name={category}
                value={category}
                checked={filters.category.includes(category)}
                onChange={(e) => handleFiltersChange(e, "category")}
            />
            <label htmlFor={category}>{category}</label>
        </li>
    ));

    return (
        <div className="filters">
            <div>
                <h3>Location</h3>
                <ul>{locationsFilters}</ul>
            </div>
            <div>
                <h3>Category</h3>
                <ul>{categoriesFilters}</ul>
            </div>
        </div>
    );
};

export default Filters;
