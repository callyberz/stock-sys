/**
 *
 * Card
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

// import {
//   restaurantDefaultShape,
//   restaurantShape,
// } from '../../shapes/restaurant';

import MyCardSection from '../MyCardSection';
import Img from '../Img';

const style = {
  clickableCard: {
    cursor: 'pointer',
  },
  imgWrapper: {
    width: '100%',
    height: '45vh',
    marginBottom: ' ${sizes.margin * 2}px',
    backgroundColor: '${colors.lightGrey}',
  },
};

function MyCard(props) {
  const { product, onClick, classes } = props;
  const { id, cover } = product;
  const coverURL = cover[0] ? cover[0].url : '';

  return (
    <div className={classes.clickableCard} onClick={() => onClick(id)}>
      <div className={classes.imgWrapper}>
        <Img
          src={`${process.env.REACT_APP_BACKEND_URL}${coverURL}`}
          alt="cover"
        />
      </div>
      <MyCardSection product={product} />
    </div>
  );
}

MyCard.defaultProps = {
  // ...restaurantDefaultShape,
};

MyCard.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // ...restaurantShape,
};

export default withStyles(style)(MyCard);
