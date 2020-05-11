/**
 *
 * CardSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

// import { productDefaultShape, productShape } from "../../shapes/product";

import Price from '../Price';
import Rate from '../Rate';

const style = {
  clickableCard: {
    // cursor: 'pointer',
  },
  itemContainer: {},
  // imgWrapper: {
  //   width: '100%',
  //   height: '45vh',
  //   marginBottom: ' ${sizes.margin * 2}px',
  //   backgroundColor: '${colors.lightGrey}',
  // },
};

function CardSection(props) {
  const { product, hasLink, history, classes } = props;
  const { brand, id, name, note, price } = product;

  /* istanbul ignore next */
  const goToReviews = () => {
    history.push(`/${id}/reviews`);
    const element = document.getElementById('tab-content');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.itemContainer}>
        {!hasLink ? <span>{name}</span> : <span>{name}</span>}
        <p className={classes.description}>
          HKD
          <Price value={price} />
          {brand && <span>&nbsp;•&nbsp;{brand.name}</span>}
        </p>
      </div>
      {/* <div className="right-infos">
        <Rate value={Math.floor(note)} clickable={false} />
        {hasLink && (
          <div className="link-wrapper">
            <a onClick={goToReviews} className="link" role="navigation">
              <p>See all reviews</p>
            </a>
          </div>
        )}
      </div> */}
    </div>
  );
}

CardSection.defaultProps = {
  // product: productDefaultShape,
  hasLink: false,
};

CardSection.propTypes = {
  // product: PropTypes.shape(productShape),
  hasLink: PropTypes.bool,
};

export default withStyles(style)(CardSection);
