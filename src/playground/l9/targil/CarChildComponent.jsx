import { Typography } from "@mui/material";
import { memo } from "react";

const CarChildComponent = ({ children }) => {
  console.log("CarChildComponent rerender");
  return <Typography>{children}</Typography>;
};
export default memo(CarChildComponent);
