import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles";
// import { style, theme } from "./style.js";
import Grid from "@material-ui/core/Grid";

import Paging from "../../components/Paging";
// import Grid from "../../components/Grid";
import MyCard from "../../components/MyCard";
import H1 from "../../components/H1";
import Img from "../../components/Img";

import img from "../../assets/img/ooops.png";

const RenderView = ({
  onClick,
  onPagingChange,
  products,
  rest: { productsConnection: { aggregate: count } },
  start,
  range
}) => {
  const counter = count && count.count;
  const renderPagination = () => {
    return (
      <Paging
        onChange={onPagingChange}
        count={counter}
        range={range}
        page={start}
      />
    );
  };
  // const count = products.length;

  return (
    <div>
      <Grid container spacing={1}>
        {products.map(product => (
          <Grid key={product.id} item xs={6}>
            <MyCard product={product} onClick={onClick} />
          </Grid>
        ))}
      </Grid>

      <Grid></Grid>
      {counter > range && renderPagination()}
      {/* {products.length < 1 && (
                <div className="ooops-wrapper">
                    <div className="ooops-img">
                        <Img src={img} alt="oops" />
                    </div>
                    <p className="ooops-title">Ooops!</p>
                    <p className="ooops-text">
                        Seems like there are no products matchings thoses filters.
          </p>
                </div>
            )} */}
    </div>
  );
};

RenderView.defaultProps = {
  onClick: () => { },
  onPagingChange: () => { },
  range: 0,
  products: [],
  rest: {},
  start: 0
};

RenderView.propTypes = {
  onClick: PropTypes.func,
  onPagingChange: PropTypes.func,
  range: PropTypes.number,
  products: PropTypes.array,
  rest: PropTypes.object,
  start: PropTypes.number
};

export default RenderView;
