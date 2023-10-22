import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const add1 = () => setCounter((razi) => razi + 1);
  const sub1 = () => setCounter((razi) => razi - 1);
  const reset = () => setCounter(0);
  return [counter, add1, sub1, reset];
};
export default useCounter;
