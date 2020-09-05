import React, { useState } from 'react';

const increment = (count) => count + 1;
const decrement = (count) => count - 1;

const Counter = (props) => {
  const [state, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(decrement)}>-</button>
      <span>{state}</span>
      <button onClick={() => setCounter(increment)}>+</button>
    </div>
  );
};

export default Counter;
