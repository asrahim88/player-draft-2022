import React from 'react';
import './App.css';
import Headers from './Components/Headers/Headers';
import PlayerList from './Components/PlayerLIst/PlayerList';

function App() {
  return (
    <div className='App'>
      <Headers></Headers>
      <PlayerList></PlayerList>
    </div>
  );
}

export default App;
