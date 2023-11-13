import React, { useContext, useState } from "react";
import { counterContext } from "../contexts/CounterContextProvider";

const Counter2 = () => {
  const { decrement2, increment2 } = useContext(counterContext);
  return (
    <div>
      <button onClick={decrement2}>-10</button>
      <button onClick={increment2}>+10</button>
    </div>
  );
};

export default Counter2;
