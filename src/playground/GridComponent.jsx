import { Box, Divider, Grid } from "@mui/material";
import { Fragment } from "react";

const GridComponent = () => {
  const style = {
    backgroundColor: "red",
    color: "white",
  };
  return (
    <Fragment>
      <Divider>Auto</Divider>
      <Grid container>
        <Grid item xs>
          1
        </Grid>
        <Grid item xs>
          2
        </Grid>
      </Grid>
      <Divider>8 - 4</Divider>
      <Grid container>
        <Grid item xs={8}>
          1
        </Grid>
        <Grid item xs={4}>
          2
        </Grid>
      </Grid>
      <Divider>Responsive</Divider>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={style}>1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={style}>2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={style}>3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={style}>4</Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default GridComponent;
