import React from 'react';
import { useState } from 'react';
import Headers from './components/Headers';
import { detailMovies } from './components/action';
import ListAllMovies from './components/ListAllMovies';
import Popup from './components/Popup';
import TopMovies from './components/TopMovies';

const MyAxios = () => {
  const [details, setDetails] = useState([]);
  const [myModals, setMymodals] = useState(false);

  const handleDetails = (idz) => {
    detailMovies(idz).then((result) => setDetails(result));

    setMymodals(true);
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Headers />
      <TopMovies handleDetails={handleDetails} />
      <ListAllMovies handleDetails={handleDetails} />
      {myModals === false ? <></> : <Popup myModals={myModals} setMymodals={setMymodals} details={details} handleDetails={handleDetails} />}
    </div>
  );
};

export default MyAxios;
