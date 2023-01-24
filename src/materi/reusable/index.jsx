import React, { useState } from 'react';
import ContentReusable from './reusableComponents/ContentReusable';
import MyBar from './reusableComponents/MyBar';
import MyNames from './reusableComponents/MyNames';

const InfosReusable = () => {
  const [counter, setCounter] = useState(0);
  const [changes, setChanges] = useState('');
  const [show, setShow] = useState(false);

  const cekMinus = () => {
    setCounter((prev) => (prev < 1 ? prev : prev - 1));
  };

  const cekPlus = () => {
    setCounter((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setChanges(e.target.value);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <h1 style={{ display: show === false ? 'none' : 'block' }}>
        Hai <MyNames name='Rian' />
      </h1>
      <button onClick={handleShow}>Show</button>
      <MyBar total={counter} handleChange={handleChange} />
      <ContentReusable handlePlus={cekPlus} handleMinus={cekMinus} />
    </>
  );
};

export default InfosReusable;
