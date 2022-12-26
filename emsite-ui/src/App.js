import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from './Home/Home';
import AboutMe from './AboutMe';

function App() {
  
  return (

    <div id="content">
      <Routes>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about-me" render={() => <AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;