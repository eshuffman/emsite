import React, { useState } from 'react';
import './App.css';

function App() {

  const [stylingOn, setStylingOn] = useState(false)

  
  return (
    <div className={stylingOn === true ? "outer-body" : null}>
      <div>
        <div className={stylingOn === true? "middle-body" : null}>
      <div className={stylingOn === true ? "body" : null}>
        <h1 className={stylingOn === true ? "h1" : null}>Emily Huffman</h1>
        <h2 className={stylingOn === true ? "h2" : null}>Software Engineer | Writer | Child-Wrangler</h2>
        <p className={stylingOn === true ? "paragraph" : null}>{stylingOn === false ? "Hi! I'm Emily. Welcome to my little spot on the web! You may notice it looks pretty boring around here. If you want to fancy it up, feel free to push the button below." : "Much better! Look around, and if you want to change it back, just push the button again."}</p>
        </div>
        <div className={stylingOn === true ? "links-box" : null}>
          <p>About Me</p>
          <p>Blog</p>
          <p>Resume</p>
          <p>Contact Info</p>
          </div>
          </div>
      <button className={stylingOn === true ? "button" : null} onClick={(() => setStylingOn(!stylingOn))}>{stylingOn === false? "Push me!" : "Push me again!"}</button>
      </div>    
    </div>
  );
}

export default App;
