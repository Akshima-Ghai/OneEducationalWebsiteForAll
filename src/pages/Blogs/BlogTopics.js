import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import TopicCard from '../../components/UI/blogcard/topiccard';
import TopicsData from './BlogTopics.data';

const useStyles = makeStyles((theme) => ({
  blogTitle: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    fontFamily: "Montserrat, sans-serif"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    '& .Mui-selected': {
      color: "#fff",
      backgroundColor: '#f24638',
     },
  }
}));

function BlogTopics() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Typography variant="h4" className={classes.blogTitle}>
          Find Blogs on various Topics
        </Typography>
        <Grid container spacing={3}>
          {TopicsData.map((topicobj,index) => {
              return (
                <TopicCard key={index} title={topicobj.title} cardimg={topicobj.cardimg} />
              )
          })}
        </Grid>
        <Box my={3} className={classes.paginationContainer}>
          <Pagination count={10} size="large" variant="outlined" color="secondary"/>
        </Box>
      </Container>
    </div>
  );
}

export default BlogTopics;