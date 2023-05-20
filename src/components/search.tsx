"use client";
import { useState } from "react";

const Search = ({ getSearchResults }) => {
    const [query, setQuery] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch(`api/courses/search?query=${query}`);

        const courses = await res.json();
        getSearchResults(courses);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className=""
                placeholder="Search ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
                Search
            </button>
        </form>
    )
}

export default Search;