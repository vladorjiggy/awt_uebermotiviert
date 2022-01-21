import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function SearchForm() {
    let navigate = useNavigate();
    const [query, setQuery] = useState('');
    function handleChange(e) {
        const { value } = e.target;
        setQuery(value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setQuery('')
        if(query){
            navigate(`/post/search?q=${query}`);
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <div id="div-search">
                <input
                    id="div-search-input"
                    type="text"
                    placeholder="Wonach suchst du?"
                    name="query"
                    value={query}
                    onChange={handleChange}
                />
                <input id="div-search-button" type="submit" />

                <img
                    id="div-search-image"
                    src="/search.png"
                    alt="search.png"
                    onClick={handleSubmit}
                />
            </div>
        </form>
    )
}

export default SearchForm