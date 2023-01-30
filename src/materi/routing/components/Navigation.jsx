import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './css/navi.css';

const Navigation = () => {
  return (
    <div className='navi'>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/hobbies/olahraga'>olahraga</NavLink>
        <NavLink to='/hobbies/coding'>coding</NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
