import { JobLocations, JobCategories } from "@/assets/assets";
import "./Filters.css";

const Filters = () => {
    const filters = [
        {
            label: "Location",
            value: "location",
        },
    ];

    const locationsFilters = JobLocations.map((location: string) => (
        <li key={location}>
            <input type="checkbox" id={location} name={location} value={location} />
            <label htmlFor={location}>{location}</label>
        </li>
    ));

    const categoriesFilters = JobCategories.map((category: string) => (
        <li key={category}>
            <input type="checkbox" id={category} name={category} value={category} />
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
