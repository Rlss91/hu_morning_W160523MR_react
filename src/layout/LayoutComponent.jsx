import { Fragment } from "react";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";
import FooterComponent from "./footer/FooterComponent";

const LayoutComponent = ({ children }) => {
  return (
    <Fragment>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      {/* <MainComponent><Homepage /></MainComponent> */}
      <FooterComponent />
    </Fragment>
  );
};

export default LayoutComponent;
