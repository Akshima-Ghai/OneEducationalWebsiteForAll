import React,{ useState } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import BlogsData from './TopicBlogs.data';
import BlogCard from '../../components/UI/blogcard/blogcard';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.resourcifi.com/blog/wp-content/uploads/2020/09/Why-Use-React-Native-For-Your-Business-in-2020.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogTitle: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
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

function TopicBlogs() {
  const classes = useStyles();
  const params = useParams();
  let topic = params.topic.replace('-',' ');
  topic = topic[0].toUpperCase() + topic.slice(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(BlogsData.length / itemsPerPage);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) =>
  {
    setPage(value);
    window.scrollTo({
      top: 560,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <Box className={classes.hero}>
        <Box>{topic} Blogs</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
         Trending Blogs
        </Typography>
        <Grid container spacing={3}>
          {
            BlogsData.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((blogobj, index) => {
            return (
              <BlogCard key={index} blog={blogobj}/>
            )
          })
          }
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination 
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            defaultPage={1}
            size="large" 
            variant="outlined" 
            color="secondary"
          />
        </Box>
      </Container>
    </div>
  );
}

export default TopicBlogs;