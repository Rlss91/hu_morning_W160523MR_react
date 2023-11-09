import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";
import FooterComponent from "./footer/FooterComponent";
import tmc from "twin-moon-color";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkThemeSlice";

const LayoutComponent = ({ children }) => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const isDarkTheme = useSelector((bigPie) => bigPie.darkThemeSlice.darkTheme);
  const dispatch = useDispatch();

  const themes = tmc({
    "text.headerColor": "!gray",
    "text.headerActive": "*white",
    favActive: "*#FB0000",
  });

  const darkTheme = createTheme(themes.dark);
  const lightTheme = createTheme(themes.light);

  const handleThemeChange = (checked) => {
    dispatch(darkThemeActions.changeTheme());
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <HeaderComponent
        isDarkTheme={isDarkTheme}
        onThemeChange={handleThemeChange}
      />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </ThemeProvider>
  );
};

export default LayoutComponent;
