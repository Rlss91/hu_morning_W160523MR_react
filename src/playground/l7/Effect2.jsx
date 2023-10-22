import { Switch } from "@mui/material";
import { useEffect, useState } from "react";

const Effect2 = () => {
  const [isOn, setIsOn] = useState(true);
  useEffect(() => {
    console.log("isOn from useEffect", isOn);
  }, [isOn]);
  const handleChange = (e) => {
    setIsOn(e.target.checked);
    console.log("isOn from handleChange", isOn);
  };
  return <Switch checked={isOn} onChange={handleChange} />;
};
export default Effect2;
