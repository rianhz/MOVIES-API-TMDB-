import React from 'react';
import { motion } from 'framer-motion';
import './css/modal.css';

const Popup = (props) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='modal-container' onClick={() => props.setMymodals(false)}>
      <div id='modal-content'>
        {[props.details].map((el, ind) => {
          return (
            <div key={ind} id='modal-wrapper'>
              <div id='images-wrapper'>
                <img src={`${process.env.REACT_APP_IMGURL}/${el.poster_path}`} alt='image' />
              </div>
              <div id='text-wrapper'>
                <h5>{el.title}</h5>
                <p id='duration'>
                  <strong>Duration </strong>
                  <br />
                  {el.runtime} Minutes
                </p>
                <div>
                  <p>
                    <strong>Genre </strong>
                    <br />
                    {el.genres
                      ?.map((a) => {
                        return a.name;
                      })
                      .join(',')}
                  </p>
                </div>
                <p>
                  <strong>Overview </strong>
                  <br />
                  {el.overview}
                </p>
                <button className='btn-modals' onClick={() => props.setMymodals(false)}>
                  close
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Popup;
