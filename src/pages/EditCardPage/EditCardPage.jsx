import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const EditCardPage = () => {
  const { id } = useParams();
  return (
    <Box>
      <Typography variant="h1">Edit card page</Typography>
      <Typography variant="h3">ID: {id}</Typography>
    </Box>
  );
};
export default EditCardPage;
