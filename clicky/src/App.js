import React from 'react';
import AllCharacters from './components/allCharacters'
import characters from './data/characters.json'


function App() {
  return (
    <div>
      <AllCharacters list={{characters}} />
    </div>
  );
}

export default App;
