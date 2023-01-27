import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import InputUser from './components/InputUser';

const MyForm = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ nama: '', umur: 0, username: '', gender: '', skill: '' });

  const handleChange = (e) => {
    let data = { ...user };

    data[e.target.name] = e.target.value;
    setUser(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { ...user };

    let nama = data.nama;
    let umur = data.umur;
    let username = data.username;

    if (username.length < 5 || nama.length < 5 || umur === 0) {
      if (nama.length < 5) {
        alert('nama harus lebih dari 5 karakter');
      }
      if (username.length < 1) {
        alert('username harus lebih dari 5 karakter!');
      }
      if (umur === 0) {
        alert('umur tidak boleh kosong');
      }
    } else {
      alert(`nama : ${user.nama} \numur : ${user.umur} \nrole : ${user.username} \ngender : ${user.gender} \nlove : ${user.skill}`);
    }
  };
  return (
    <Container>
      <InputUser handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default MyForm;
