import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Fab } from "@mui/material";
import iguana from "../assets/images/contemplative-reptile.jpg";

const ImageCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={iguana} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Fab size="small" color="primary" variant="extended">
          Share
        </Fab>
        <Fab size="small" color="secondary" variant="extended">
          Learn More
        </Fab>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
