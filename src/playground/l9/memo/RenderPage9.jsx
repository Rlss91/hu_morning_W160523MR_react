import { TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import NameComponent from "./NameComponent";
import MemoNameComponent from "./MemoNameComponent";

const namesArr = ["kenny", "james", "rick"];

const RenderPage9 = () => {
  const [txt, setText] = useState("");
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  console.log("component rerender");

  return (
    <Fragment>
      <TextField value={txt} onChange={handleInputChange} />
      {namesArr.map((name, index) => (
        <MemoNameComponent key={index}>{name}</MemoNameComponent>
      ))}
    </Fragment>
  );
};
export default RenderPage9;
