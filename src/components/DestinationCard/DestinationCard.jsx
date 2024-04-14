import React from 'react';
import './DestinationCard.css'; // Importing CSS file for styling

function DestinationCard({ destination }) {
  return (
    <div className="card bg-dark text-white">
      <img src={destination.image} className="card-img" alt={destination.name}/>
      <div className="card-img-overlay card-img-overlay-destcard">
        <h3 className="card-title">{destination.type}</h3>
        <p className="card-text">{destination.name}</p>
      </div>
    </div>
  );
}

export default DestinationCard;
