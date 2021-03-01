import React from 'react';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='container-page-content'>
        <div className='container-image'>
          <img className='image' src='https://wallpaperaccess.com/full/1545922.jpg'></img>
        </div>
        <div className='container-logging-form'>
          <div className='logging-form-content'>
            <div className='headers'>
              <h2 className='title'>Log in</h2>
              <h4 className='subtitle'>
                If you don`t have an account yet, please <a href=''>register</a> first.
              </h4>
            </div>
            <div className='inputs'>
              <input className='form-input' placeholder='Your e-mail'></input>
              <input className='form-input' placeholder='Your password'></input>
              <a href=''>I forgot my password</a>
            </div>
            <div className='container-checkbox'>
              <label htmlFor='remember-me-input' className='checkbox'>
                <input id='remember-me-input' className='custom-input' type='checkbox'></input>
                <span className='checkmark'></span>
                <p>Remember me</p>
              </label>
            </div>
            <button className='button-primary'>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
