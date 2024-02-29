import React from "react";

// Component to render synonyms inline with comma separation
export default function Synonyms({ synonyms }) {
  if (!synonyms || synonyms.length === 0) return null;

  return (
    <div style={{ marginTop: '10px' }}>
      <strong>Synonyms:</strong> {synonyms.map((synonym, index) => (
        <span key={index}>{synonym}{index < synonyms.length - 1 ? ', ' : ''}</span>
      ))}
    </div>
  );
}