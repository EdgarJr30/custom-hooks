import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const onIncrement = (value = 1) => {
    setCounter(counter + value);
  };

  const onDecrement = (value = 1) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };

  const onReset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    onIncrement,
    onDecrement,
    onReset,
  };
};
