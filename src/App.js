import './App.css';
import { Container, Grid, Box, Typography, Card, CardContent, CardActions, CardMedia, CardActionArea, Button, CardHeader, Avatar, IconButton } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => createStyles({
  root: {
    backgroundColor: theme.palette.grey[200],
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(5)
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <Card>
            <CardHeader
              avatar={<Avatar>PV</Avatar>}
              title="Post"
              subheader="posted on 28-12-2020"
              action={
                <IconButton>
                  <ShoppingCartIcon/>
                 </IconButton>
              }
            />
            <CardActionArea>
              <CardMedia image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg" style={{ height: 200, width: 300 }} />
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aut autem rem, facilis nemo omnis eligendi explicabo inventore eaque est ea odio iusto nisi ut voluptatem aliquid ex minus numquam!</Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg" style={{ height: 200, width: 300 }} />
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aut autem rem, facilis nemo omnis eligendi explicabo inventore eaque est ea odio iusto nisi ut voluptatem aliquid ex minus numquam!</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg" style={{ height: 200, width: 300 }} />
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aut autem rem, facilis nemo omnis eligendi explicabo inventore eaque est ea odio iusto nisi ut voluptatem aliquid ex minus numquam!</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg" />
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aut autem rem, facilis nemo omnis eligendi explicabo inventore eaque est ea odio iusto nisi ut voluptatem aliquid ex minus numquam!</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
