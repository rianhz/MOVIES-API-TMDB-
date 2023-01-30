import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Hobbiess = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('../');
  };
  return (
    <>
      <div>ini adalah {params.name}</div>
      <button onClick={handleClick}>BACK HOME</button>
    </>
  );
};

export default Hobbiess;
