import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from 'react-router-dom';

import Home from './Home/Home';
import AboutMe from './AboutMe';

function App() {
  
  return (

    <div id="content">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;