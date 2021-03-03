import React from 'react';
import Pagination from './Components/Pagination/Pagination';
import Timer from './Components/Timer/Timer';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <Pagination
        activePage={1}
        totalItems={23}
        perPage={5}
        withActions={true}
        classes={{ btn: 'btn', activeBtn: 'activeBtn' }}
        onChangePage={() => {}}
      ></Pagination> */}
      <Timer
        time={102}
        onTimeStart={() => {
          {
            console.log('Started1');
          }
        }}
        onTimePause={() => {
          console.log('Paused1');
        }}
        onTimeEnd={() => {
          {
            console.log('Ended1');
          }
        }}
        onTick={() => {
          {
            console.log('Tick1');
          }
        }}
        autostart={true}
        step={4}
      ></Timer>
      <Timer
        time={535}
        onTimeStart={() => {
          {
            console.log('Started2');
          }
        }}
        onTimePause={() => {
          console.log('Paused2');
        }}
        onTimeEnd={() => {
          {
            console.log('Ended2');
          }
        }}
        onTick={() => {
          {
            console.log('Tick2');
          }
        }}
        autostart={true}
        step={1}
      ></Timer>
      <Timer
        time={124}
        onTimeStart={() => {
          {
            console.log('Started3');
          }
        }}
        onTimePause={() => {
          console.log('Paused3');
        }}
        onTimeEnd={() => {
          {
            console.log('Ended3');
          }
        }}
        onTick={() => {
          {
            console.log('Tick3');
          }
        }}
        autostart={false}
        step={6}
      ></Timer>
    </div>
  );
}

export default App;
