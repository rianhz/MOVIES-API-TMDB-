import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Hobbiess from './components/category/Hobbiess';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Shop from './components/Shop';

const RoutingTest = () => {
  return (
    <HashRouter>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/hobbies/:name' element={<Hobbiess />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default RoutingTest;
