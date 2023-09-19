import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const CardComponent = () => {
  return (
    <Box>
      <Card>
        <CardHeader title="Bentley" subheader="sx-123"></CardHeader>
      </Card>
      <Card raised square>
        <CardHeader title="Bentley 2" subheader="sx-123"></CardHeader>
      </Card>
      <Card variant="outlined">
        <CardHeader title="Bentley 3" subheader="sx-123"></CardHeader>
      </Card>
      <Card>
        <CardActionArea>
          <CardHeader title="Rolls Royce" />
          <CardContent>
            <CardMedia
              component="img"
              image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
            ></CardMedia>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              provident quo impedit neque, quas repudiandae ea praesentium
              fugiat eligendi quibusdam deserunt nulla aperiam debitis quisquam
              vero officiis, placeat corrupti hic.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardHeader title="Rolls Royce 2" />
          <CardContent>
            <CardMedia
              component="img"
              image="/assets/imgs/egor-vikhrev-S0cqn0mZU0E-unsplash.jpg"
            ></CardMedia>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              provident quo impedit neque, quas repudiandae ea praesentium
              fugiat eligendi quibusdam deserunt nulla aperiam debitis quisquam
              vero officiis, placeat corrupti hic.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
export default CardComponent;
