import { useState, cloneElement } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import UserMngComponent from "./ui/UserMngComponent";
import nextKey from "generate-my-key";
function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

let initialUsersArr = [
  { name: "kenny", id: "123" },
  { name: "james", id: "125" },
  { name: "john", id: "135" },
  { name: "rick", id: "136" },
];

const UserManagement = () => {
  const [dense, setDense] = useState(true);
  const [userArr, setUserArr] = useState(initialUsersArr);
  const handleDelete = (id) => {
    setUserArr((copyOfUsers) => copyOfUsers.filter((user) => user.id != id));
  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Avatar with text and icon
        </Typography>

        <List dense={dense}>
          {userArr.map((user) => (
            <UserMngComponent
              key={nextKey()}
              userInfo={{ userName: user.name, id: user.id, keyboard: "test" }}
              onDelete={handleDelete}
            />
          ))}
        </List>
      </Grid>
    </Box>
  );
};
export default UserManagement;
