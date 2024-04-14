
import React from 'react';
import './CoverSection.css'; // Import CSS file for styling

import handloomImg from './../../../assets/weaver1.png';

function CoverSection() {
  return (
    <div className="cover-section">
      <div className="cover-container" style={{backgroundImage: `url(${handloomImg})`}}>
        <div className="cover-text">Handloom</div>
      </div>
    </div>
  );
}

export default CoverSection;
