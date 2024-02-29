import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
    if (props.data && props.data.meanings) {
        return (
            <div className="Results">
                <h2>{props.data.word}</h2>
                {props.data.meanings.slice(0, 3).map((meaning, index) => (
                    <Meanings key={index} meaning={meaning} />
                ))}
            </div>
        );
    } else if (props.error) {
        
        return <div className="Error">Sorry, we couldn't find the word you were looking for. Please try a different search.</div>;
    } else {
        
        return null;
    }
}