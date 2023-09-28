import { Fragment, useState } from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Typography,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import myLinks from "../myLinks";
import NavLinkComponent from "../header/NavLinkComponent";
import { NavLink } from "react-router-dom";
import nextKey from "generate-my-key";

const FooterComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <Divider></Divider>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {myLinks.map((mylink) => (
          <NavLinkComponent to={mylink.to} key={nextKey()}>
            {mylink.children}
          </NavLinkComponent>
        ))}
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
    </Fragment>
  );
};

export default FooterComponent;
