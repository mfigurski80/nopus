import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { style } from '@mui/system';

const styles = {
    card: {
        width: '30%',
        maxHeight: '50%',
    },
    cardMedia: {
        maxHeight :'300px'
    }
  };

export default function ActionAreaCard({img, title, text}) {
  return (
    <Card style={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt={title}
          style={styles.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}