import React from 'react';
import './App.css';
import SecondsCounter from './SecondsCounter';


function App() {
  return (
    <div className="App">
        <SecondsCounter  seconds={0} />
    </div>
  );
}

export default App;
