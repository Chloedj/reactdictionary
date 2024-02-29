import React from "react";
import Synonyms from "./Synonyms"; 

export default function Meanings({ meaning }) {

console.log(meaning);
  return (
    <div style={{ marginBottom: '20px' }}>
      <strong>Part of Speech:</strong> {meaning.partOfSpeech} <br/>
      <strong>Definition:</strong> {meaning.definition} <br/>
      {meaning.example && (
        <div style={{ marginTop: '10px' }}>
          <strong>Example:</strong> <em>"{meaning.example}"</em> <br/>
        </div>
      )}
      
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}