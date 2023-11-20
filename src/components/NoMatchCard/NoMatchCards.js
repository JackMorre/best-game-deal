import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./noMatchCards.css";

export const NoMatchCards = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 175 }}
        image="https://unsplash.it/345/150"
        title="Random Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">Text Link</Button>
      </CardActions>
    </Card>
  );
};
