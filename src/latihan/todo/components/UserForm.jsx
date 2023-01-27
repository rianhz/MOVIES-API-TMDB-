import React from 'react';
import { Button, Form } from 'react-bootstrap';

const UserForm = (props) => {
  let formData = props.formData;
  let handleChange = props.handleChange;
  let handleSubmit = props.handleSubmit;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='name' type='text' placeholder='Enter name' onChange={handleChange} value={formData.name} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control name='username' type='text' placeholder='Enter username' onChange={handleChange} value={formData.username} />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Save
      </Button>
    </Form>
  );
};

export default UserForm;
