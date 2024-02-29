import React, { useState } from "react";
import './Dictionary.css';
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [searchTerm, setSearchTerm] = useState("");
    let [resultData, setResultData] = useState(null);
    let [error, setError] = useState(false);
    

        function handleResponse(response) {
        
         setResultData(response.data);
         setError(false);
        
    }
function handleError() {
    setError(true); 
    setResultData(null); 
}
     function search(event) {
        event.preventDefault(); 
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



    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a word..." autoFocus="on" onChange={handleSearchTermChange}/>
            <input type="submit" value="Search" />
        </form>
        <Results data={resultData} error={error}/>
    </div>
);
}