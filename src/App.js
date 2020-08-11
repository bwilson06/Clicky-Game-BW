import React from 'react';
import AllCharacters from './components/allCharacters'
import characters from './data/characters.json'
import Header from './components/header'
import './styles/style.css'


function App() {
  return (
    <div>
      <AllCharacters list={{characters}} />
    </div>
  );
}

export default App;
