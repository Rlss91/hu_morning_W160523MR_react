import { Fragment, useCallback, useState } from "react";
import CounterButton from "./CounterButton";

const CounterL9Page = () => {
  const [age, setAge] = useState(1);
  const [heigh, setHeight] = useState(0);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const handleHeigh = useCallback(() => {
    setHeight(heigh + 1);
  }, [heigh]);

  return (
    <Fragment>
      <CounterButton onBtnClick={handleAge}>age {age}</CounterButton>
      <CounterButton onBtnClick={handleHeigh}>height {heigh}</CounterButton>
    </Fragment>
  );
};

export default CounterL9Page;
