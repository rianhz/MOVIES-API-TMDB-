import React, { useState } from 'react';
import MyForm from './components/MyForm';
import './css/parent.css';

const Form = () => {
  const userInfos = [
    {
      nama: 'rian',
      role: 'frontend',
      gender: 'pria',
    },
  ];
  const [userInfo, setUserInfo] = useState(userInfos);

  const [userChange, setUserChange] = useState({ nama: '', role: '', gender: '' });

  const handleChanges = (e) => {
    let data = { ...userChange };
    data[e.target.name] = e.target.value;
    setUserChange(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let datas = { ...userChange };

    userInfos.push({ nama: datas.nama, role: datas.role, gender: datas.gender });
    setUserInfo(datas);
    console.log(userInfos);
    setUserChange({ nama: '', role: '', gender: '' });
  };

  return (
    <div className='wrapper'>
      <MyForm handleChanges={handleChanges} userInfo={userChange} handleSubmit={handleSubmit} />
      {/* <MyList users={user} /> */}
    </div>
  );
};

export default Form;
