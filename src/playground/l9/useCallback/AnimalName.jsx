import { Button } from "@mui/material";
import { memo } from "react";

const AnimalName = ({ children, id, onShowName }) => {
  console.log("AnimalName");
  const handleClick = () => {
    onShowName(id);
  };
  return <Button onClick={handleClick}>{children}</Button>;
};
export default memo(AnimalName);
