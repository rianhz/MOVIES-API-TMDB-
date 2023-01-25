import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { uid } from 'uid';
import Tables from './components/Tables';
import UserForm from './components/UserForm';

const Todoapp = () => {
  const usersData = [
    { id: 1, name: 'Rian', username: 'rianhidayat' },
    { id: 2, name: 'Hidayat', username: 'hidayatrian' },
    { id: 3, name: 'Joko', username: 'jokojoko' },
  ];

  const [user, setUser] = useState(usersData);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
  });

  const [isEdit, setIsEdit] = useState({ id: null, status: false });

  const handleChange = (e) => {
    let datas = { ...formData };
    datas[e.target.name] = e.target.value;
    setFormData(datas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataUsers = [...user];

    if (isEdit.status === true) {
      dataUsers.forEach((el) => {
        if (el.id === isEdit.id) {
          el.name = formData.name;
          el.username = formData.username;
          console.log(el.name);
        }
      });
    } else {
      dataUsers.push({ id: uid(), name: formData.name, username: formData.username });
    }

    setIsEdit({ id: null, status: false });
    setUser(dataUsers);
    setFormData({ name: '', username: '' });
  };

  function handleEdit(ids) {
    let datas = [...user];

    let dataFinded = datas.find((elements) => ids === elements.id);

    console.log(dataFinded);

    setFormData({ name: dataFinded.name, username: dataFinded.username });
    setIsEdit({ id: ids, status: true });
  }

  const handleDelete = (id) => {
    let datas = [...user];

    let dataDeleted = datas.filter((e) => e.id !== id);
    console.log(dataDeleted);
    setUser(dataDeleted);
  };
  return (
    <Container>
      <Row className='mt-5'>
        <Col lg={6}>
          <div className='user-input mt-5'>
            <h2>Input User</h2>
            <UserForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </Col>
        <Col lg={6}>
          <div className='user-datas mt-5'>
            <h2>Data users</h2>
            <Tables user={user} handleEdit={handleEdit} handleDelete={handleDelete} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Todoapp;
