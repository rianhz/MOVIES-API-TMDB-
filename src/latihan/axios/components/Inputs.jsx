import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './css/inputs.css';

const Inputs = (props) => {
  return (
    <Container className='mt-5 mb-5 container-inputs'>
      <Row>
        <Col className='input-wrapper'>
          <input type='text' onChange={(e) => props.setQ(e.target.value)} value={props.q} />
          <button className='btn-search' onClick={() => props.handleSearch(props.q)}>
            Search
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Inputs;
