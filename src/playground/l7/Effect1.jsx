import { Typography } from "@mui/material";
import { useEffect } from "react";

const Effect1 = () => {
  useEffect(() => {
    //onload of the component
    console.log("this console will be printed when component ready");
  }, []);
  return <Typography>effect 1</Typography>;
};

export default Effect1;
