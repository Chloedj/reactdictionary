import React from "react";
import Meanings from "./Meanings";

export default function Results(props){
     if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        {props.data.meanings.slice(0, 3).map((meaning, index) => (
          <Meanings key={index} meaning={meaning} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}