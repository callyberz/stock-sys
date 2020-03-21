/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  restaurantDefaultShape,
  restaurantShape,
} from '../../shapes/restaurant';

import StyledCard from './StyledCard';
import MyCardSection from '../MyCardSection';
import Img from '../Img';

function MyCard({ product, onClick }) {
  const { id, cover } = product;
  const coverURL = cover[0] ? cover[0].url : '';

  return (
    <div>
      <StyledCard onClick={() => onClick(id)} className="clickable-card">
        <div className="img-wrapper">
          <Img
            src={`${process.env.REACT_APP_BACKEND_URL}${coverURL}`}
            alt="cover"
          />
        </div>
        <MyCardSection product={product} />
      </StyledCard>
    </div>

  );
}

MyCard.defaultProps = {
  ...restaurantDefaultShape,
};

MyCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  ...restaurantShape,
};

export default MyCard;
