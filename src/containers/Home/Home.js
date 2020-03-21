/**
 *
 * Home
 *
 */

import React from "react";
import { withStyles } from "@material-ui/styles";
// import { style, theme } from "./style.js";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Img from "../../components/Img";
import img from "../../assets/img/family.png";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const styles = (theme) => ({
  icon: {
    marginRight: 8,
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: 32,
  },
  cardGrid: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: 24,
  },
});

class Home extends React.Component {
  static propTypes = {
    // news: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     title: PropTypes.string.isRequired,
    //     link: PropTypes.string.isRequired,
    //     content: PropTypes.string,
    //   }),
    // ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  componentDidUpdate() { }

  render() {
    const { classes, history } = this.props;

    return (
      <div>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Grid container>
              <a href="/products">
                <Img src={img} alt="cover" />
              </a>
            </Grid>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Better Life
            </Typography>

              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Select your best products
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => history.push(`products`)}>
                      More
                  </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          {/* <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                    </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                    </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                    </Button>
                      <Button size="small" color="primary">
                        Edit
                    </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container> */}
        </main>
      </div>

      // <div className={classes.root}>
      //   {/* <div className={classes.container}> */}
      //   <Grid container>
      //     <a href="/products">
      //       <Img src={img} alt="cover" />
      //     </a>
      //   </Grid>
      //   {/* </div> */}
      // </div>
    );
  }
}

export default withStyles(styles)(Home);

