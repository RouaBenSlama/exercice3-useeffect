import React, { useState } from 'react';

function Car() {
  const [couleur, setCouleur] = useState('');
  const [marque, setMarque] = useState('');
  const [kilometrage, setKilometrage] = useState('');

  function startEngine() {
    console.log("Je démarre");
  }

  return (
    <div>
      <input type="text" placeholder="Couleur" value={couleur} onChange={(e) => setCouleur(e.target.value)} />
      <input type="text" placeholder="Marque" value={marque} onChange={(e) => setMarque(e.target.value)} />
      <input type="text" placeholder="Kilométrage" value={kilometrage} onChange={(e) => setKilometrage(e.target.value)} />
      <p>Couleur: {couleur}</p>
      <p>Marque: {marque}</p>
      <p>Kilométrage: {kilometrage}</p>
      <button onClick={startEngine}>Démarrer</button>
    </div>
  );
}

export default Car;
