import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardMui = ({ title, description, imageUrl,video = "false"}) => {
  return (
    <Card>
      <CardMedia
        component={video ? video : img}
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};