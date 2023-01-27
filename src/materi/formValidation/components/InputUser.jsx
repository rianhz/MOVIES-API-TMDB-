import React from 'react';
import { Button, Form } from 'react-bootstrap';

const InputUser = ({ handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Name</Form.Label>
        <Form.Control name='nama' type='text' placeholder='Enter name' onChange={handleChange} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Umur</Form.Label>
        <Form.Control name='umur' type='number' placeholder='Enter age' onChange={handleChange} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control name='username' type='text' placeholder='Enter username' onChange={handleChange} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <div className='mb-3'>
          <Form.Check inline label='Pria' id='Pria' value='pria' name='gender' type='radio' onChange={handleChange} />
          <Form.Check inline label='Wanita' id='Wanita' value='wanita' name='gender' type='radio' onChange={handleChange} />
        </div>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Select aria-label='Default select example' name='skill' onChange={handleChange}>
          <option value=''>Chose one that you like</option>
          <option value='HTML'>HTML</option>
          <option value='CSS'>CSS</option>
          <option value='Javascript'>Javascript</option>
          <option value='PHP'>PHP</option>
        </Form.Select>
      </Form.Group>

      <Button variant='primary' type='submit'>
        Save
      </Button>
    </Form>
  );
};

export default InputUser;
