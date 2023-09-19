import { Fragment } from "react";
import nextKey from "generate-my-key";
import { Typography } from "@mui/material";

let animals = ["dog", "snaii", "elephant", "armadilo"];
const TargilPropsComponent = () => {
  return (
    <Fragment>
      {animals.map((animal) => (
        <Typography key={nextKey()} variant="body1">
          {animal}
        </Typography>
      ))}
    </Fragment>
  );
};
export default TargilPropsComponent;
