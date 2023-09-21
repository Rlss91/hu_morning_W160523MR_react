import { Button } from "@mui/material";

//!do not use anonymous functions in events
const EventsComponent = () => {
  const add = (a, b) => a + b;
  const handleBtnClick = (e) => {
    let sum = add(1, 1);
    console.log("sum", sum);
    console.log("e", e);
    console.log("you clicked");
  };
  return (
    <Button variant="contained" onClick={handleBtnClick}>
      Contained
    </Button>
  );
};
export default EventsComponent;
