import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardTargilComponent = () => {
  return (
    <Card sx={{ maxWidth: "20rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="/assets/imgs/egor-vikhrev-S0cqn0mZU0E-unsplash.jpg"
          alt="something"
        />
        <CardContent>
          <CardHeader
            title="Horse"
            subheader="sub title"
            sx={{ p: 0, mb: 1 }}
          />
          <Divider />
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2">
              <Typography fontWeight="700" variant="subtitle1" component="span">
                Phone:{" "}
              </Typography>
              050-00000000
            </Typography>
            <Typography variant="body2">
              <Typography fontWeight="700" variant="subtitle1" component="span">
                Address:{" "}
              </Typography>
              Shinikin 3 tlv
            </Typography>
            <Typography variant="body2">
              <Typography fontWeight="700" variant="subtitle1" component="span">
                Card Number:{" "}
              </Typography>
              100000000000
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <IconButton>
                <PhoneIcon />
              </IconButton>
              <IconButton>
                <CreateIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardTargilComponent;
