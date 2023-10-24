import { Fragment, useCallback, useState } from "react";
import AnimalName from "./AnimalName";
import { Button, Typography } from "@mui/material";

const AnimalComponent = () => {
  const [light, setLight] = useState(true);
  const [animals, setAnimals] = useState([
    { name: "dog", id: 1 },
    { name: "snai", id: 2 },
    { name: "lion", id: 3 },
    { name: "girafa", id: 4 },
  ]);
  const handleShowName = useCallback((id) => {
    for (let animal of animals) {
      if (animal.id === id) {
        console.log(animal.name);
        break;
      }
    }
  }, []);
  const handleBtnClick = () => {
    setLight(!light);
  };
  return (
    <Fragment>
      <Button onClick={handleBtnClick}>toggle light</Button>
      <Typography>The light is {light ? "on" : "off"}</Typography>
      {animals.map((animal) => (
        <AnimalName key={animal.id} id={animal.id} onShowName={handleShowName}>
          {animal.name}
        </AnimalName>
      ))}
    </Fragment>
  );
};
export default AnimalComponent;
