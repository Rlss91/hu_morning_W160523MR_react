import { Button, TextField, Typography } from "@mui/material";
import { Fragment, useMemo, useState } from "react";

const UseMemoPage = () => {
  const [light, setLight] = useState(true);
  const [startCalcFrom, setStartCalcFrom] = useState(0);
  const longOperationValue = useMemo(() => {
    let counter = startCalcFrom;
    for (let i = 0; i < 2000000000; i++) {
      counter++;
    }
    return counter;
  }, [startCalcFrom]);
  const handleBtnClick = () => {
    setLight(!light);
  };
  const handleTextChange = (e) => {
    setStartCalcFrom(e.target.value);
  };
  return (
    <Fragment>
      <Button onClick={handleBtnClick}>toggle light</Button>
      <TextField value={startCalcFrom} onChange={handleTextChange} />
      <Typography>the light is {light ? "on" : "off"}</Typography>
      <Typography>{longOperationValue}</Typography>
    </Fragment>
  );
};
export default UseMemoPage;
