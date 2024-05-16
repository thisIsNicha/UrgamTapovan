import './DestinationCard.css'; // Importing CSS file for styling

interface Destination {
  image: string;
  name: string;
  type: string;
}

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
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
