import React from 'react';
import Pagination from './Components/Pagination/Pagination';
import Timer from './Components/Timer/Timer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Timer
        time={10} //sec
        step={500} //ms
      ></Timer>
      <Timer time={100} autostart={true} step={90}></Timer>
    </div>
  );
}

export default App;
