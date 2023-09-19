import { Divider, Typography, Box } from "@mui/material";
import { Fragment } from "react";

const DeviderComponent = () => {
  return (
    <Fragment>
      <Typography>line 1</Typography>
      <Divider />
      <Typography>line 2</Typography>
      <Divider textAlign="left">Navbar</Divider>
      <Box display="flex">
        <Typography>link 1</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>link 2</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>link 3</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>link 4</Typography>
      </Box>
      <Divider />
    </Fragment>
  );
};
export default DeviderComponent;
