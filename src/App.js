import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import translate from 'translate';

const App = () => {

const [text, setText] = useState('')
const [translateVal, setTranslate] = useState('')

const getTranslation = async () => {
const translation = await translate(text,{ to:'es', engine: 'yandex', key: process.env.REACT_APP_YANDEX_KEY})
setTranslate(translation) 
}


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input value={text} onChange={(event) => setText(event.target.value)}/>
        <button onClick={getTranslation}>translate</button>
        </div>
        <p className="App-intro">
        {translateVal}
        </p>
      </div>
    );
}

export default App;
