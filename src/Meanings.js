import React from "react";
import Synonyms from "./Synonyms"; 
import './Meanings.css';

export default function Meanings({ meaning }) {


  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{meaning.partOfSpeech}</h3>  <br/>
      <div className="definition"> {meaning.definition}</div>
      <div className="example">{meaning.example}</div>
          
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}