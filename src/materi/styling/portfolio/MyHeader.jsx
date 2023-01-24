import React from 'react';
import './header.css';
import cv from './pdf/CV-Rian-Hidayat.pdf';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import imgMe from './images/hoho.png';

const MyHeader = () => {
  return (
    <div className='personal-wrappers'>
      <div className='personal-content'>
        <div className='hero-item-left'>
          <span>Hi, im</span>
          <h5>Rian Hidayat</h5>
          <p>Front End Developer</p>
          <div className='sosmed'>
            <a href='https://github.com/rianhz' target='_blank' rel='noreferrer' className='a-link'>
              <BsGithub />
            </a>
            <a href='https://www.instagram.com/rianhiday_/' target='_blank' rel='noreferrer' className='a-link'>
              <BsInstagram />
            </a>
            <a href='https://www.linkedin.com/in/rian-hidayat-275a46226' target='_blank' rel='noreferrer' className='a-link'>
              <BsLinkedin />
            </a>
            <a href='https://web.facebook.com/rian.hidayat.73744/' target='_blank' rel='noreferrer' className='a-link'>
              <BsFacebook />
            </a>
          </div>
          <button href={cv} className='cv' download disabled>
            Download CV
          </button>
        </div>
        <div className='hero-item-right'>
          <div className='personal-image'>
            <img src={imgMe} alt='Rian Hidayat' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHeader;
