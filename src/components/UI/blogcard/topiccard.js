import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
  },
  cardcontent: {
    color: "#fff",
    backgroundColor: '#f24638'
  },
  title:{
    fontFamily: "Montserrat, sans-serif"
  },
  media: {
    height: 240
  },
}));

function TopicCard({title, cardimg}) {
  const classes = useStyles();

  return (
      <Grid item xs={12} sm={6} md={4}>
        <Link to={`/blogs/${title.toLowerCase().replace(' ','-')}`} style={{textDecoration: 'none'}}>
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={cardimg}
                title={title}
            />
            <CardContent className={classes.cardcontent}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>{title}</Typography>
                
            </CardContent>
            </CardActionArea>
        </Card>
        </Link>
      </Grid>
  );
}

export default TopicCard;