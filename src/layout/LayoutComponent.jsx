import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";
import FooterComponent from "./footer/FooterComponent";
import tmc from "twin-moon-color";

const LayoutComponent = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themes = tmc();
  // console.log("themes", themes);
  // const themes = tmc({ primary: "#00FF00", elisheva: "#FF0000" });

  const darkTheme = createTheme(themes.dark);
  const lightTheme = createTheme(themes.light);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });
  // const lightTheme = createTheme({
  //   palette: {
  //     mode: "light",
  //   },
  // });

  const handleThemeChange = (checked) => {
    setIsDarkTheme(checked);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <HeaderComponent
        isDarkTheme={isDarkTheme}
        onThemeChange={handleThemeChange}
      />
      <MainComponent>{children}</MainComponent>
      {/* <MainComponent><Homepage /></MainComponent> */}
      <FooterComponent />
    </ThemeProvider>
  );
};

export default LayoutComponent;
