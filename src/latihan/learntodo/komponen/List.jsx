import React from 'react';
import { Button, Table } from 'react-bootstrap';

const List = ({ user, handleUpdate, handleDelete }) => {
  return (
    <Table striped bordered hover variant='dark' size='sm'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th className='text-center'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {user.map((el, i) => {
          return (
            <tr key={i}>
              <td>{el.id}</td>
              <td>{el.nama}</td>
              <td>{el.role}</td>
              <td className='d-flex gap-2 justify-content-center align-items-center'>
                <Button onClick={() => handleUpdate(el.id)}>Edit</Button>
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

export default List;
