import { Container } from "@mui/material";
import nextKey from "generate-my-key";
import { Typography } from "@mui/material";

let animals = [];

const ConditionalReturnComponent = () => {
  if (!animals.length) {
    return (
      <Container>
        <Typography variant="h4">All animals adopted successfully</Typography>
      </Container>
    );
  }

  return (
    <Container>
      {animals.map((animal) => (
        <Typography key={nextKey()} variant="body1">
          {animal}
        </Typography>
      ))}
    </Container>
  );
};
export default ConditionalReturnComponent;
