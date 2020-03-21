/**
 *
 * CardSection
 *
 */

import React from "react";
import PropTypes from "prop-types";

// import { productDefaultShape, productShape } from "../../shapes/product";

import H1 from "../H1";
import H4 from "../H4";
import Price from "../Price";
import Rate from "../Rate";

import StyledCardSection from "./StyledCardSection";

function CardSection({ product, hasLink, history }) {
  const { category, district, id, name, note, price } = product;

  /* istanbul ignore next */
  const goToReviews = () => {
    history.push(`/${id}/reviews`);
    const element = document.getElementById("tab-content");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledCardSection className={hasLink && "banner"}>
      <div className="left-infos">
        {!hasLink ? <span>{name}</span> : <span>{name}</span>}
        <p className="description">
          HKD<Price value={price} />
          {category && <span>&nbsp;•&nbsp;{category.name}</span>}
          {/* <span>
            &nbsp;•&nbsp;
            {district.includes("_") ? district.replace("_", "") : district}
          </span> */}
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
    </StyledCardSection>
  );
}

CardSection.defaultProps = {
  // product: productDefaultShape,
  hasLink: false
};

CardSection.propTypes = {
  // product: PropTypes.shape(productShape),
  hasLink: PropTypes.bool
};

export default CardSection;
