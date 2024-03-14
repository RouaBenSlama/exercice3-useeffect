import React from 'react';
import Recherche from './components/Recherche';
import Car from './components/Car';

function App() {
  function onSearch() {
    console.log("La fonction de recherche a été appelée.");
  }

  return (
    <div className="App">
      <Recherche query="Recherche initiale" onSearch={onSearch} />
      <Car couleur="rouge" marque="Toyota Matrix" kilometrage="100 km"/>
    </div>
  );
}

export default App;
