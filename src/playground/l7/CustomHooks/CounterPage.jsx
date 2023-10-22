import { Button, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import useCounter from "./Counter";
const CounterPage = () => {
  const [counter, add1, sub1, reset] = useCounter();
  //   const [counter, setCounter] = useState(0);
  const handleAddClick = () => {
    add1();
  };
  const handleSubClick = () => {
    sub1();
  };
  const handleResetClick = () => {
    reset();
  };
  return (
    <Fragment>
      <Button onClick={handleAddClick} variant="contained" color="primary">
        +1
      </Button>
      <Button onClick={handleSubClick} variant="contained" color="warning">
        -1
      </Button>
      <Button onClick={handleResetClick} variant="contained" color="error">
        0
      </Button>
      <Typography>Counter: {counter}</Typography>
    </Fragment>
  );
};
export default CounterPage;
