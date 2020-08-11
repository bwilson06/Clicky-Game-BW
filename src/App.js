import React from 'react';
import AllCharacters from './components/allCharacters'
import characters from './data/characters.json'
import './styles/style.css'


function App() {
  return (
    <div className="container">
      <AllCharacters list={{characters}} />
    </div>
  );
}

export default App;
