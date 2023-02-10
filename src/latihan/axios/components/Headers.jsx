import React from 'react';
import { Container } from 'react-bootstrap';
import myCarousel from '../../../images/aaaa.jpg';
import './css/header.css';

const Headers = () => {
  return (
    <Container fluid className='p-0 m-0 caros'>
      <img src={myCarousel} alt='asd' />
      <div className='caros-text'>
        <h1>CINEMAS</h1>
        <span>Search your favorite movies and enjoy ...</span>
      </div>
    </Container>
  );
};

export default Headers;
