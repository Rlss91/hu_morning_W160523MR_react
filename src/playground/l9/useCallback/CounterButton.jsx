import { Button } from "@mui/material";
import { memo } from "react";

const CounterButton = ({ children, onBtnClick }) => {
  console.log("CounterButton");
  return <Button onClick={onBtnClick}>{children}</Button>;
};

export default memo(CounterButton);
