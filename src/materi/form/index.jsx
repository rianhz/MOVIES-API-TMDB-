import React, { useState } from 'react';
import MyForm from './components/MyForm';
import MyList from './components/MyList';
import './css/parent.css';

const Form = () => {
  const users = [
    {
      id: 1,
      nama: 'rian',
      role: 'front end',
      gender: 'pria',
      skills: 'js',
    },
    {
      id: 2,
      nama: 'joko',
      role: 'back end',
      gender: 'pria',
      skills: 'golang',
    },
  ];
  const [user, setUser] = useState(users);

  return (
    <div className='wrapper'>
      <MyForm users={user} setUser={setUser} />
      <MyList users={user} />
    </div>
  );
};

export default Form;
