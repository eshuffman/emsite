import React, { useState } from 'react';
import './AboutMe.css';

function AboutMe() {

  return (
    <div className={stylingOn === true ? "outer-body" : null}>
        <p>This page is all about me!</p>
    </div>
  );
}

export default AboutMe;
