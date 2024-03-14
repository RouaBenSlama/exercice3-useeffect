import React from 'react';

function Recherche(props) {
  return (
    <div>
      <p>Query: {props.query}</p>
      <button onClick={props.onSearch}>Lancer la recherche</button>
    </div>
  );
}

export default Recherche;
