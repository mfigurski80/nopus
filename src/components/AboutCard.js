import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core';

export default function AboutCard({img, title, text}) {
  return (
    <ActionCard>
      <CardActionArea>
        <Media
          component="img"
          image={img}
          alt={title}
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
    </ActionCard>
  );
}

const ActionCard = styled(Card)`
    margin-top: 3em;
    width: 30%;
    max-height: 500px;
`;

const Media = styled(CardMedia)`
  max-height: 250px;
`;