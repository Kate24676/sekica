import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import image from './images.jpg';
import translate from './translate/src/index'

const App = () => {

const [text, setText] = useState('')
const [translateVal, setTranslate] = useState('')

const getTranslation = async () => {
  const translation = await translate(text,{ to:'hr', engine: 'yandex', key: process.env.REACT_APP_YANDEX_KEY})
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
        <img src={image}/>
      </div>
    );
}

export default App;
