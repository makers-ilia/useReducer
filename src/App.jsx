import React from "react";
import Counter from "./components/Counter";
import Number from "./components/Number";
import Counter2 from "./components/Counter2";
import Number2 from "./components/Number2";

const App = () => {
  return (
    <div>
      <div>
        <Counter />
        <Number />
      </div>
      <div>
        <Counter2 />
        <Number2 />
      </div>
    </div>
  );
};

export default App;
