import React, { useState } from "react";
import './Dictionary.css';
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [searchTerm, setSearchTerm] = useState("Dictionary");
    let [resultData, setResultData] = useState(null);
    let [error, setError] = useState(false);
    let [loaded, setLoaded] = useState(false);
    

        function handleResponse(response) {
        console.log(response.data);
         setResultData(response.data);
         setError(false);
        
    }
function handleError() {
    setError(true); 
    setResultData(null); 
}
     function search(event) {
        if (event) event.preventDefault(); 
        setError(false);

        if (searchTerm !== "") { 
            let apiKey = "ab6f607t41943e02220ae3724eo64aeb";
            let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchTerm}&key=${apiKey}`;

            axios.get(apiUrl).then(handleResponse).catch(handleError);
        }
    }

    

    function handleSearchTermChange(event) {
              setSearchTerm(event.target.value);
            }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded){
    return (
    <div className="Dictionary">
        <section>
        <h4>What word do you want to search for?</h4>
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a word..." autoFocus="on" onChange={handleSearchTermChange} className="searchbar"/>
            
            <div className="Hint">i.e. Sunset, Forest, Book, Yoga</div>
        </form></section>
        <Results data={resultData} error={error}/>
    </div>
);
} else {
    load();
    return "Loading";
}
}