import React from 'react';
import { Button, Form } from 'react-bootstrap';

const InputForm = ({ userForm, handleChange, handleSubmit }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control name='nama' type='text' placeholder='Enter name' onChange={handleChange} value={userForm.nama} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control name='role' type='text' placeholder='Enter role' onChange={handleChange} value={userForm.role} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Save
        </Button>
      </Form>
    </>
  );
};

export default InputForm;
