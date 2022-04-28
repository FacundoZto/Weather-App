import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
//import CardActions from '@mui/material/CardActions';
//import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import s from './styles/Card.module.css';
import CloseIcon from '@mui/icons-material/Close';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function RecipeReviewCard(props) {
  //const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div className={s.container}>
    <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: 'rgb(0,153,255,0.1)'}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <CloseIcon onClick={() => props.handleClose(props.id)}/>
          </IconButton>
        }
        title={`${props.name} - ${props.country}`}
        subheader={`${props.coord.lat} | ${props.coord.lon}`}
      />
      <CardMedia
        sx={{ width: '115px', margin: 'auto'}}
        component="img"
        height="100"
        image={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="Weather icon"
      />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          <strong>Weather:</strong> {props.description} <br></br>
          <strong>Temp:</strong> {props.temp}° <br></br>
          <strong>Min:</strong> {props.min}° <br></br>
          <strong>Max:</strong> {props.max}°
        </Typography>
      </CardContent>
      {/*<CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over 
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>*/}
    </Card>
    </div>
  );
}
