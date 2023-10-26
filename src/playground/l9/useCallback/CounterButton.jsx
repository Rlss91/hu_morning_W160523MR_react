import { Button } from "@mui/material";
import { memo } from "react";

const CounterButton = ({ children, onBtnClick, txt }) => {
  console.log("CounterButton", txt);
  return <Button onClick={onBtnClick}>{children}</Button>;
};

export default memo(CounterButton, (p, c) => {
  console.log({ p, c });
});
