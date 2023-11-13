import React, { useCallback, useContext } from "react";
import { counterContext } from "../contexts/CounterContextProvider";

const Number = () => {
  const { number } = useContext(counterContext);
  return (
    <div>
      <h1>Number is: {number}</h1>
    </div>
  );
};

export default Number;
