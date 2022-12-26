import React, { useState } from 'react';
import './App.css';

function App() {

  const [stylingOn, setStylingOn] = useState(false)

  
  return (
    <div className={stylingOn === true ? "outer-body" : null}>
      <div>
      <div className={stylingOn === true ? "body" : null}>
        <h1 className={stylingOn === true ? "h1" : null}>Emily Huffman</h1>
        <h2 className={stylingOn === true ? "h2" : null}>Software Engineer | Writer | Child-Wrangler</h2>
        <p className={stylingOn === true ? "paragraph" : null}>Hi! I'm Emily. Welcome to my little spot on the web! You may notice it looks pretty boring around here. If you want to fancy it up, feel free to push the button below.</p>
      </div>
      <button className={stylingOn === true ? "button" : null} onClick={(() => setStylingOn(!stylingOn))}>Push me!</button>
      </div>    
    </div>
  );
}

export default App;
