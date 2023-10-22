import { Button } from "@mui/material";
import { Fragment, useState } from "react";
import Effect3 from "./Effect3";

const Effect3Page = () => {
  const [showStopper, setShowStopper] = useState(false);
  const handleClick = () => {
    setShowStopper(!showStopper);
  };
  return (
    <Fragment>
      <Button onClick={handleClick}>show/hide stopper</Button>
      {showStopper && <Effect3 />}
    </Fragment>
  );
};
export default Effect3Page;
