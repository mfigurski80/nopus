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
    width: 30%;
    max-height: 50%;
`;

const Media = styled(CardMedia)`
  max-height: 300px;
`;