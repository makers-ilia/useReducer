import React, { createContext, useReducer, useState } from "react";
import { act } from "react-dom/test-utils";

export const counterContext = createContext();

//! useReducer
const INIT_STATE = {
  number: 0,
  number2: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: action.payload };
    case "DECREMENT":
      return { ...state, number: action.payload };
    case "MINUS_TEN":
      return { ...state, number2: action.payload };
    case "PLUS_10":
      return { ...state, number2: action.payload };
    default:
      return state;
  }
}

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function increment() {
    const action = {
      type: "INCREMENT",
      payload: state.number + 1,
    };
    ////////////////////
    dispatch(action);
  }

  function decrement() {
    const action = {
      type: "DECREMENT",
      payload: state.number - 1,
    };
    ////////////////////
    dispatch(action);
  }

  function increment2() {
    const action = {
      type: "PLUS_10",
      payload: state.number2 + 10,
    };
    ////////////////////
    dispatch(action);
  }

  function decrement2() {
    const action = {
      type: "MINUS_TEN",
      payload: state.number2 - 10,
    };
    ////////////////////
    dispatch(action);
  }

  //  без useReducer
  //   const [number, setNumber] = useState(0);
  //   const [number2, setNumber2] = useState(0);

  //   const decrement = () => setNumber(number - 1);

  //   const increment = () => setNumber(number + 1);

  //   const decrement2 = () => setNumber2(number2 - 10);

  //   const increment2 = () => setNumber2(number2 + 10);

  //   console.log(number);

  return (
    <counterContext.Provider
      value={{
        increment,
        decrement,
        number: state.number,
        number2: state.number2,
        increment2,
        decrement2,
      }}
    >
      {children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;
