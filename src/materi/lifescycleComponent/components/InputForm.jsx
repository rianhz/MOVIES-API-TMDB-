import React from 'react';
import { Form } from 'react-bootstrap';

const InputForm = ({ searchText, handleChange }) => {
  return (
    <Form className='pt-5'>
      <Form.Group className='mb-3'>
        <Form.Control name='nama' type='text' placeholder='Enter name' onChange={handleChange} value={searchText} />
      </Form.Group>
    </Form>
  );
};

export default InputForm;
