
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Collections.css'; // Import CSS file for styling
import image1 from './../../../assets/crochetrose.png';
import image2 from './../../../assets/crochetrose.png';
import image3 from './../../../assets/crochetrose.png';
import image4 from './../../../assets/crochetrose.png';
import image5 from './../../../assets/crochetrose.png';

// Sample data dictionary with imported images
const collectionsData = [
  { id: 1, name: 'Collection 1', image: image1 },
  { id: 2, name: 'Collection 2', image: image2 },
  { id: 3, name: 'Collection 3', image: image3 },
  { id: 4, name: 'Collection 4', image: image4 },
  { id: 5, name: 'Collection 5', image: image5 },
];

function Collections() {
  return (
    <div className="collections-section">
      <h2 className='collections-heading'>Collections</h2>
       
      <Row className="collections-row">
        {collectionsData.map((collection) => (
          <Col md={4} key={collection.id}>
            <Card className="collection-card">
              <Card.Img variant="top" src={collection.image} />
              <Card.Body>
                <Card.Title>{collection.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Collections;
