import { Button, TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

const StateCompo = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(true);
  const handleBtnClick = () => {
    setShow(!show);
  };
  const handleTxtChange = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };
  useEffect(() => {
    console.log("send request to server");
  }, []);
  useEffect(() => {
    console.log("useEffect", userName);
  }, [userName]);
  return (
    <Fragment>
      <Button onClick={handleBtnClick}>toggle</Button>
      <TextField onChange={handleTxtChange} value={userName} />
    </Fragment>
  );
};
export default StateCompo;
