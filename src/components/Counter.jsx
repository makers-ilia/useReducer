import React, { useContext, useState } from "react";
import { counterContext } from "../contexts/CounterContextProvider";

const Counter = () => {
  const { decrement, increment } = useContext(counterContext);
  return (
    <div>
      <button onClick={decrement}>-1</button>
      {/* <h1>Counter: {number}</h1> */}
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;
