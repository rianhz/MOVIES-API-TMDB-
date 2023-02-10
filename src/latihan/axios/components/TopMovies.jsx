import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './css/topmovie.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { topMoviesGet } from './action';
import { useState } from 'react';
import { useEffect } from 'react';

const TopMovies = (props) => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    topMoviesGet().then((result) => setTopMovies(result));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className='mt-5'>
      <h3>Top Movies</h3>
      <Carousel responsive={responsive}>
        {topMovies.map((el, index) => {
          return (
            <Card key={index}>
              <Card.Img src={`${process.env.REACT_APP_IMGURL}/${el.poster_path}`} style={{ height: '300px' }} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Title>{el.release_date}</Card.Title>
                <Card.Text>
                  <span style={{ fontSize: '20px' }}>&#9733;</span> {el.vote_average}
                </Card.Text>
              </Card.Body>
              <button className='details' onClick={() => props.handleDetails(el.id)}>
                Details
              </button>
            </Card>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default TopMovies;
