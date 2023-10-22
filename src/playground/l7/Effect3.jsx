import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Effect3 = () => {
  const [c, setC] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setC((razi) => razi + 1);
    }, 1000);
    return () => {
      console.log("component dead");
    };
  }, []);
  useEffect(() => {
    console.log("c from useEffect", c);
  }, [c]);
  return <Typography>Effect 3</Typography>;
};
export default Effect3;
