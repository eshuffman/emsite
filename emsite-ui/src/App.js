import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [setStylingOn, stylingOn] = useState(false)

  function handleClick() {
    setStylingOn(!stylingOn)
  }
  return (
    <div className={stylingOn === true ? "body" : null}>
      <h1>Emily Huffman</h1>
      <h2>Software Engineer | Writer | Child-Wrangler</h2>
      <p>Hi! I'm Emily. Welcome to my little spot on the web! You may notice it looks pretty boring around here. If you want to fancy it up, feel free to push the button below.</p>
      <button onClick={handleClick}>Push me!</button>
    </div>
  );
}

export default App;
