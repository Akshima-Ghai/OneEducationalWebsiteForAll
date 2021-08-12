import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  readbook: {
      display: "flex",
      cursor: 'pointer',
  },
  readmore: {
    margin:'5px'
  },
}));

function BlogCard({blog}) {
  const classes = useStyles();
  const {cardimg, title, desc, avatarimg, author, date} = blog;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image={cardimg}
            title={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <Typography variant="p" color="textSecondary" component="p">{desc}</Typography>
        </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
            <Avatar src={avatarimg} />
            <Box ml={2}>
                <Typography variant="subtitle1" component="p">{author}</Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">{date}</Typography>
            </Box>
        </Box>
        <Box className={classes.readbook}>
            <Typography variant="subtitle1"  color="textSecondary"  component="p" className={classes.readmore}>
               READ MORE
            </Typography>
            <BookmarkBorderIcon fontSize="large"/>
        </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BlogCard;