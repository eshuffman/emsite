import React, { useContext, useState } from 'react';
import './Resume.css';

function AboutMe({stylingOn, setStylingOn}) {
  
  return (
    <div className={stylingOn === true ? "resume" : null}>
        <p>Resume goes here!</p>
    </div>
  );
}

export default AboutMe;
