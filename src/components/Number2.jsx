import React, { useCallback, useContext } from "react";
import { counterContext } from "../contexts/CounterContextProvider";

const Number2 = () => {
  const { number2 } = useContext(counterContext);
  return (
    <div>
      <h1>Number is: {number2}</h1>
    </div>
  );
};

export default Number2;
