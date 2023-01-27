import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ({ datas }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
      {datas.map((el, i) => {
        return (
          <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant='top' src={el.urlToImage} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{new Date(el.publishedAt).toLocaleString()}</Card.Text>
              <Card.Text>{el.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
