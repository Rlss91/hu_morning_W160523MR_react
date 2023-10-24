import { Typography } from "@mui/material";

const NameComponent = ({ children }) => {
  console.log("NameComponent rerender");
  return <Typography>{children}</Typography>;
};

export default NameComponent;
