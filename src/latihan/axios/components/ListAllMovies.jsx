import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { allMoviesGet } from './action';
import { searchMovies } from './action';
import Inputs from './Inputs';
import './css/allmovies.css';

const ListAllMovies = (props) => {
  const [movies, setMovies] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    allMoviesGet().then((movies) => setMovies(movies));
  }, []);

  const handleSearch = (val) => {
    searchMovies(val).then((result) => setMovies(result));
  };

  return (
    <Container>
      <Inputs q={q} setQ={setQ} handleSearch={handleSearch} />
      <h3>All Movies</h3>
      <div className='card-wrappers'>
        {movies.map((el, index) => {
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
              <button id='details-movie' onClick={() => props.handleDetails(el.id)}>
                Details
              </button>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default ListAllMovies;
