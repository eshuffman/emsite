import React, { useState } from 'react';
import './App.css';

function App() {

  const [stylingOn, setStylingOn] = useState(false)

  
  return (
    <div>
      <div className={stylingOn === true ? "body" : null}>
        <h1>Emily Huffman</h1>
        <h2>Software Engineer | Writer | Child-Wrangler</h2>
        <p>Hi! I'm Emily. Welcome to my little spot on the web! You may notice it looks pretty boring around here. If you want to fancy it up, feel free to push the button below.</p>
        <p>Styling is {stylingOn}</p>
      </div>
      <button onClick={(() => setStylingOn(!stylingOn))}>Push me!</button>
    </div>
  );
}

export default App;
