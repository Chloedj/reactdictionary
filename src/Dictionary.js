import React, { useEffect, useState } from "react";
import './Dictionary.css';
import axios from "axios";

export default function Dictionary() {
    let [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (searchTerm !== "") { 
            let apiKey = "ab6f607t41943e02220ae3724eo64aeb";
            let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchTerm}&key=${apiKey}`;

            axios.get(apiUrl).then(handleResponse);
        }
    }, [searchTerm]);

    function handleResponse(response) {
        console.log(response.data);
    }

    function search(event) {
        event.preventDefault();
        
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