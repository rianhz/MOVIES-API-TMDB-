import React, { useRef } from 'react';
import KontenOne from './components/KontenOne';
import KontenDua from './components/KontenDua';
import KontenTiga from './components/KontenTiga';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';

const MyRef = () => {
  const handleScroll = (refs) => {
    refs.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
  return (
    <HashRouter>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '40px' }}>
          <NavLink to='/'>home</NavLink>
          <NavLink to='/konten1' onClick={() => handleScroll('satu')}>
            satu
          </NavLink>
          <NavLink to='/konten2' onClick={() => handleScroll('dua')}>
            dua
          </NavLink>
          <NavLink to='/konten3' onClick={() => handleScroll('tiga')}>
            tiga
          </NavLink>
        </div>
        <div style={{ height: '60vh' }}>spacer</div>
        <Routes>
          <Route path='/' element={<KontenOne />} />
          <Route path='/konten1' element={<KontenOne id='satu' />} />
          <Route path='/konten2' element={<KontenDua id='dua' />} />
          <Route path='/konten3' element={<KontenTiga id='tiga' />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default MyRef;
