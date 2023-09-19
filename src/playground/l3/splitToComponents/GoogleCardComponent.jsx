import {
  Container,
  Box,
  Typography,
  IconButton,
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import YoutubeCardComponent from "./YoutubeCardComponent";
const GoogleCardComponent = () => {
  return (
    <Card
      sx={{
        boxShadow: "2px 2px 5px",
        border: "3px solid rgb(38, 86, 243)",
        borderRadius: "8px",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ width: "100%", height: "auto" }}
          component="img"
          image="https://th.bing.com/th/id/OIP.r92oPkMFvIFibdEyv5PcjQAAAA?pid=ImgDet&rs=1"
        ></CardMedia>
        <CardHeader
          title="Google"
          subheader="Bard"
          sx={{ backgroundColor: "rgb(38, 86, 243)" }}
        />
        <CardContent sx={{ backgroundColor: "lightblue" }}>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Phone: </span>0543332221
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Address: </span>
            California,USA
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}>Mail: </span>
            Google@gmail.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default GoogleCardComponent;
