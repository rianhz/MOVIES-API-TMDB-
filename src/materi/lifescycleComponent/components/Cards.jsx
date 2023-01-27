import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ({ datas }) => {
  return (
    <>
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
    </>
  );
};

export default Cards;
