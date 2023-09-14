import { Typography } from "@mui/material";
import { Fragment } from "react";

const TypografyComponent = () => {
  return (
    <Fragment>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="h5" component="h2">
        should be h2
      </Typography>
      <Typography fontWeight={300}>300</Typography>
      <Typography fontWeight={400}>400</Typography>
      <Typography fontWeight={500}>500</Typography>
      <Typography fontWeight={700}>700</Typography>
      <Typography color="lime">primary color</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam
        amet deleniti aliquid doloremque laborum officia blanditiis asperiores
        consequatur et minima laboriosam adipisci, inventore facilis saepe
        aperiam voluptatem magni officiis? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Incidunt ipsum qui voluptatem. Earum
        itaque eaque veniam veritatis ratione exercitationem, animi accusantium
        aliquid recusandae tenetur qui necessitatibus aut eos blanditiis nihil.
      </Typography>
      <hr />
      <Typography noWrap>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam
        amet deleniti aliquid doloremque laborum officia blanditiis asperiores
        consequatur et minima laboriosam adipisci, inventore facilis saepe
        aperiam voluptatem magni officiis? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Incidunt ipsum qui voluptatem. Earum
        itaque eaque veniam veritatis ratione exercitationem, animi accusantium
        aliquid recusandae tenetur qui necessitatibus aut eos blanditiis nihil.
      </Typography>
    </Fragment>
  );
};
export default TypografyComponent;
