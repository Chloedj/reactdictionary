import React from "react";


export default function Meanings({ meaning }) {
  return (
    <div> 
      <strong>{meaning.partOfSpeech}</strong> <br/>
      {meaning.definition} <br/>
      {meaning.example && (
        <div>
          <em>"{meaning.example}"</em>
        </div>
      )}
    </div>
  );
}