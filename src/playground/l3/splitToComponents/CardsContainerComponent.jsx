import { Grid } from "@mui/material";
import YoutubeCardComponent from "./YoutubeCardComponent";
import MicrosoftCardComponent from "./MicrosoftCardComponent";
import GoogleCardComponent from "./GoogleCardComponent";
import AppleCardContainer from "./AppleCardContainer";
import TemplateCardComponent from "./TemplateCardComponent";
const CardsContainerComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg>
        <TemplateCardComponent
          title="Kodak"
          subTitle="KODAK Mini Shot 2 Retro Instant Camera"
        />
      </Grid>
      <Grid item xs={12} lg>
        <YoutubeCardComponent />
      </Grid>
      <Grid item xs={12} lg>
        <MicrosoftCardComponent />
      </Grid>
      <Grid item xs={12} lg>
        <GoogleCardComponent />
      </Grid>
      <Grid item xs={12} lg>
        <AppleCardContainer />
      </Grid>
    </Grid>
  );
};
export default CardsContainerComponent;
