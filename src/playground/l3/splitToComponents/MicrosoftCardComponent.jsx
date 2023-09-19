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
const MicrosoftCardComponent = () => {
  return (
    <Card
      sx={{
        boxShadow: "2px 2px 5px",
        border: "3px solid rgb(38, 86, 243)",
        borderRadius: "8px",
        height: "100%",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: "100%", paddingTop: "31%", paddingBottom: "31%" }}
          image="data:image/png;base64,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"
        ></CardMedia>
        <CardHeader
          title="MicroSoft"
          subheader="Windows11"
          sx={{
            backgroundColor: "rgb(38, 86, 243)",
          }}
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
            Msft@Outlook.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MicrosoftCardComponent;
