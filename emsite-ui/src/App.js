import React, { useState, createContext, useContext } from 'react';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';

import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Blog from './Blog/Blog';
import Resume from './Resume/Resume';


function App() {
  const [stylingOn, setStylingOn] = useState(false)
  
  return (
   
    <div id="content">
      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home stylingOn={stylingOn} setStylingOn={setStylingOn} />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume stylingOn={stylingOn} setStylingOn={setStylingOn} />} />
        </Routes>
        </BrowserRouter>
      </div>
      
  );
}

export default App;