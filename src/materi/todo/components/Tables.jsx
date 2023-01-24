import React from 'react';
import { Button, Table } from 'react-bootstrap';

const Tables = (props) => {
  const user = props.user;
  const handleEdit = props.handleEdit;
  const handleDelete = props.handleDelete;

  return (
    <Table striped bordered hover variant='dark' size='sm'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th className='text-center'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {user.map((el, i) => {
          return (
            <tr key={i}>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td className='d-flex gap-2 justify-content-center align-items-center'>
                <Button onClick={() => handleEdit(el.id)}>Edit</Button>
                <Button onClick={() => handleDelete(el.id)} className='btn-warning'>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tables;
