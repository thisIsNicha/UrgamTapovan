import React from 'react';
import DestinationCard from './../../../components/DestinationCard/DestinationCard';

import './TopDestinations.css';
import cardImg1 from './../../../assets/card_img.png'

function TopDestinations() {
  // Sample array of destinations data
  const destinations = [
    { name: 'Destination 1', type: 'Type 1', image: cardImg1 },
    { name: 'Destination 2', type: 'Type 2', image: cardImg1 },
    { name: 'Destination 3', type: 'Type 3', image: cardImg1  },
    { name: 'Destination 4', type: 'Type 3', image:   cardImg1},
  ];

  return (
    <div className="container-fluid main-container">
      
      <div className='band'></div>

      <div className="row topd-row">
        <div className="col text-center d-flex flex-column justify-content-center align-items-center">
          <h2 className="top-destinations-top">top</h2>
          <h2 className="top-destinations-dest">destinations</h2>
          <hr className="horizontal-rule" /> 
          <p className="description text-center"> It's hard enough deciding to move, you don't have to worry about where to move to. These are some of the most popular and best locations to move to in the beautiful Valley</p>
        </div>
      </div>
      <div className="row dest-row">
        {destinations.map((destination, index) => (
          <div className="col-lg-3 col-md-6 px-5">
              <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDestinations;
