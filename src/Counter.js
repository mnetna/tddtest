import React, {useState} from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  }

  const decrease = () => {
    setValue(value - 1);
  }

  return (
    <div data-test="component-app"> 
      <p>
        <b>{value}</b>
      </p>
      <button id="increase" onClick={increase}>+1</button>
      <button id="decrease" onClick={decrease}>-1</button>
    </div>
  );
};

export default Counter;