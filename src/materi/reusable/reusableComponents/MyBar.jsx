import React from 'react';

const MyBar = (props) => {
  return <h1 onChange={props.handleChange}>{props.total}</h1>;
};

export default MyBar;
