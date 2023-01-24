import React from 'react';

const ContentReusable = (props) => {
  return (
    <div>
      <button onClick={props.handleMinus}>-</button>
      <button onClick={props.handlePlus}>+</button>
    </div>
  );
};

export default ContentReusable;
