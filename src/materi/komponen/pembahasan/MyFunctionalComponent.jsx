import React, { useState } from 'react';

const MyFunctionalComponent = (props) => {
  const [val, setVal] = useState(0);

  const clickPlus = () => {
    setVal((prev) => prev + 1);
  };
  const clickMinus = () => {
    setVal(val <= 0 ? val : val - 1);
  };
  return (
    <div>
      <h1>Functional Component</h1>
      <h1>Hai {props.nama}</h1>
      <div>
        <button onClick={clickMinus}>-</button>
        <span> {val}</span>
        <button onClick={clickPlus}>+</button>
      </div>
    </div>
  );
};

export default MyFunctionalComponent;
