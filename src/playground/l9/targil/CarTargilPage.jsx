import { Fragment, useState } from "react";
import CarChildComponent from "./CarChildComponent";
import { Button, TextField } from "@mui/material";

const CarTargilPage = () => {
  const [cars, setCars] = useState(["car1", "car2", "car3"]);
  const [txt, setTxt] = useState("");
  const handleTxtChange = (e) => {
    setTxt(e.target.value);
  };
  const handleBtnClick = () => {
    setCars((carsState) => [...carsState, txt]);
  };
  return (
    <Fragment>
      <TextField value={txt} onChange={handleTxtChange} />
      <Button onClick={handleBtnClick}>Add car</Button>
      {cars.map((car, index) => (
        <CarChildComponent key={index}>{car}</CarChildComponent>
      ))}
    </Fragment>
  );
};

export default CarTargilPage;
