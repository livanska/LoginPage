import React from 'react';
import Pagination from './Components/Pagination/Pagination';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Pagination
        activePage={1}
        totalItems={23}
        perPage={5}
        withActions={true}
        classes={{ btn: 'btn', activeBtn: 'activeBtn' }}
        onChangePage={() => {}}
      ></Pagination>
    </div>
  );
}

export default App;
