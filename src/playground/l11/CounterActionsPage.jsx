import { Button, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counterSlice";

const CounterActionsPage = () => {
  const [txt, setTxt] = useState("");
  const dispatch = useDispatch();
  const handleAdd1Click = () => {
    dispatch(counterActions.add1());
  };
  const handleChange = (e) => {
    setTxt(e.target.value);
  };
  const handleClickNumber = () => {
    dispatch(counterActions.add(txt));
  };
  return (
    <Fragment>
      <Button onClick={handleAdd1Click}>add 1</Button>
      <TextField value={txt} onChange={handleChange} />
      <Button onClick={handleClickNumber}>add</Button>
    </Fragment>
  );
};

export default CounterActionsPage;
