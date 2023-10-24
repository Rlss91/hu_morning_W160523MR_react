import { Typography } from "@mui/material";
import { memo, useEffect } from "react";

const MemoNameComponent = ({ children }) => {
  console.log("MemoNameComponent rerender");
  return <Typography>{children}</Typography>;
};

export default memo(MemoNameComponent);
