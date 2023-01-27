import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { uid } from 'uid';
import InputForm from './komponen/InputForm';
import List from './komponen/List';

const Todos = () => {
  const dummyData = [
    {
      id: uid(),
      nama: 'Rian',
      role: 'Front end',
    },
    {
      id: uid(),
      nama: 'Joko',
      role: 'Back end',
    },
  ];

  const [user, setUser] = useState(dummyData);
  const [userForm, setUserForm] = useState({ id: null, nama: '', role: '' });
  const [isUpdate, setIsUpdate] = useState(false);

  const handleChange = (e) => {
    let data = { ...userForm };
    data[e.target.name] = e.target.value;

    setUserForm(data);
    console.log(userForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = [...user];

    if (isUpdate) {
      data.forEach((el) => {
        if (el.id === userForm.id) {
          el.id = userForm.id;
          el.nama = userForm.nama;
          el.role = userForm.role;
        }
      });
    } else {
      data.push({ id: uid(), nama: userForm.nama, role: userForm.role });
    }

    setUser(data);
    setUserForm({ id: null, nama: '', role: '' });
    setIsUpdate(false);
    console.log(data);
  };

  const handleUpdate = (ids) => {
    let data = [...user];

    let findedData = data.find((el) => el.id === ids);
    console.log(findedData);
    setUserForm({ id: findedData.id, nama: findedData.nama, role: findedData.role });
    setIsUpdate(true);
  };
  const handleDelete = (ids) => {
    let data = [...user];

    let filtered = data.filter((el) => el.id !== ids);
    console.log(filtered);
    setUser(filtered);
  };
  return (
    <Container>
      <Row className='mt-5'>
        <Col lg={6}>
          <div className='user-input mt-5'>
            <h2>Input User</h2>
            <InputForm userForm={userForm} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </Col>
        <Col lg={6}>
          <div className='user-datas mt-5'>
            <h2>Data users</h2>
            <List user={user} handleUpdate={handleUpdate} handleDelete={handleDelete} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Todos;
