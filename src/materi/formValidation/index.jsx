import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import InputUser from './components/InputUser';

const MyForm = () => {
  const [user, setUser] = useState({ nama: '', username: '', gender: '', skill: '' });

  const handleChange = (e) => {
    let data = { ...user };

    data[e.target.name] = e.target.value;
    setUser(data);
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`nama : ${user.nama} \nrole : ${user.username} \ngender : ${user.gender} \nlove : ${user.skill}`);
  };
  return (
    <Container>
      <InputUser handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default MyForm;
