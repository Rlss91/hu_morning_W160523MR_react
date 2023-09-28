import { Button } from "@mui/material";

const ButtonComponent = ({ children, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};
export default ButtonComponent;
