import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Box from "@material-ui/core/Box";
import MyCardSection from "../../components/MyCardSection";
import Slider from "../../components/Slider";
import Gallery from "../../components/Gallery";
import Tabs from "../../components/Tabs";

const style = theme => ({
  root: {
    padding: 30
  },
  titleContainer: {
    // padding: "2vh 0"
  },
  priceText: {
    lineHeight: "1.33",
    marginTop: "6px",
    fontSize: "12px",
    color: "#969696"
  },
  paper: {
    padding: 8,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
});

const RenderView = ({
  product,
  // rest: {
  //   reviewsConnection: {
  //     aggregate: { count }
  //   }
  // },
  history,
  match: {
    params: { content, id }
  },
  classes
}) => {
  const { cover } = product;
  const tabs = ["informations"];

  const toggle = tab => {
    if (content !== tab) {
      history.push(`/${id}/${tab}`);
    }
  };

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid> */}


      <Grid container >
        <Grid item xs={9}>
          <Gallery slides={cover} />
        </Grid>

        <Grid item xs={3}>
          <Box className={classes.titleContainer}>
            {console.log(product)}
            <h5>{product.name}</h5>
            <span
              className={classes.priceText}
            >{`Price: $${product.price} HKD`}</span>
          </Box>
        </Grid>
      </Grid>


      {/* <div className="slider-wrapper">
        <Gallery slides={cover} />
      </div> */}
      {/* <div className="informations-wrapper">
        <Tabs
          product={{ ...product }}
          toggleTab={toggle}
          selected={"informations"}
          tabs={tabs}
        />
      </div> */}
    </div >
  );
};

RenderView.defaultProps = {
  product: {
    cover: [],
    price: null
  }
};

RenderView.propTypes = {
  product: PropTypes.shape({
    cover: PropTypes.array,
    price: PropTypes.number
  }),
  history: PropTypes.object.isRequired
};

export default withStyles(style)(RenderView);
