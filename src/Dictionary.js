import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary() {
    let [searchTerm, setSearchTerm] = useState("");


    function search(event) {
        event.preventDefault();
        alert(`searching for ${searchTerm}`);
         }

    function handleSearchTermChange(event) {
              setSearchTerm(event.target.value);
            }



    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a word..." autoFocus="on" onChange={handleSearchTermChange}/>
            <input type="submit" value="Search" />
        </form>
    </div>;
}