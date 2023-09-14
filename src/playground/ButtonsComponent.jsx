import { Box, Button, Divider } from "@mui/material";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BatteryCharging20Icon from "@mui/icons-material/BatteryCharging20";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import BoltIcon from "@mui/icons-material/Bolt";
import { Fragment } from "react";

const ButtonsComponent = () => {
  return (
    <Fragment>
      <Divider>Buttons</Divider>
      <Box display="flex" justifyContent="space-evenly">
        <Button variant="contained" color="error">
          contained
        </Button>
        <Button variant="outlined">outlined</Button>
        <Button>text</Button>
      </Box>
      <Divider>Disabled buttons</Divider>
      <Box display="flex" justifyContent="space-evenly">
        <Button variant="contained" disabled>
          disabled contained button
        </Button>
        <Button variant="outlined" disabled>
          disabled outlined button
        </Button>
        <Button disabled>disabled text button</Button>
      </Box>
      <Divider>Buttons with icons</Divider>
      <Box display="flex" justifyContent="space-evenly">
        <Button startIcon={<BathtubIcon />}>icon first</Button>
        <Button startIcon={<BeachAccessIcon />} endIcon={<BoltIcon />}>
          sounded with icons
        </Button>
        <Button endIcon={<BatteryCharging20Icon />}>icon last</Button>
      </Box>
    </Fragment>
  );
};
export default ButtonsComponent;
