/**
 *
 * Informations
 *
 */

import React from "react";
// import PropTypes from 'prop-types';

import {
  restaurantDefaultShape,
  restaurantShape
} from "../../shapes/restaurant";

import H1 from "../H1";
import NotePaper from "../NotePaper";
import OpeningHours from "../OpeningHours";
import Grid from "../Grid";

/* eslint-disable camelcase */
function Informations({ product }) {
  // console.log(product)
  const name = product.name ? product.name : null;
  const sku = product.sku ? product.sku : null;
  const color = product.color ? product.color : null;
  const price = product.price ? product.price : null;
  const status = product.status ? product.status : null;
  const brandname =
    product.brand && product.brand.name ? product.brand.name : null;

  return (
    <div>
      <H1>Informations</H1>
      <Grid>
        <li className="column informations-card">
          <div>{name}</div>
          <div>{brandname}</div>
          <div>{sku}</div>
          <div>{color}</div>
          <div>{status}</div>
        </li>

        {/* {infos.map(info => (
          <li key={info.title} className="column informations-card">
            <NotePaper informations={info} />
          </li>
        ))} */}
      </Grid>
    </div>
  );
}

Informations.defaultProps = {
  restaurant: restaurantDefaultShape
};

Informations.propTypes = {
  ...restaurantShape
};

export default Informations;
