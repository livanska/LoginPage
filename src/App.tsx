import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherTable } from './components/WeatherTable/WeatherTable';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <WeatherTable />
      </Provider>
    </div>
  );
}

export default App;
