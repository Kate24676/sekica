import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

const [text, setText] = useState('')

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input value={text} onChange={(event) => setText(event.target.value)}/>
        <button onClick={() => console.log(text)}>translate</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}

export default App;
