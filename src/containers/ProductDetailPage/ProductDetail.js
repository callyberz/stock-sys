/**
 *
 * ProductDetailPage
 *
 */

import React from "react";
import { withStyles } from "@material-ui/styles";
import { style, theme } from "./style.js";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { set } from "lodash";

import { GET_PRODUCT } from "../../queries";
import Query from "../../components/Query";

import RenderView from "./RenderView";

class ProductDetailPage extends React.Component {
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

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { match, classes, history } = this.props;
    const params = match && match.params;
    const id = params && params.id ? params.id : null;
    console.log(id);

    const renderView = ({ product, ...rest }) => {
      return <RenderView product={product} rest={rest} {...this.props} />;
    };

    return (
      <div>
        <Container>
          <div className="page-wrapper" id="product-page">
            <Query
              query={GET_PRODUCT}
              render={renderView}
              variables={{ id, reviewsFilter: { product: id } }}
            />
          </div>
        </Container>
      </div>
    );
  }
}

// ProductDetailPage.defaultProps = {
//   location: {
//     pathname: null,
//     search: null
//   }
// };

// ProductDetailPage.propTypes = {
//   history: PropTypes.object.isRequired,
//   location: PropTypes.shape({
//     search: PropTypes.string.isRequired
//   })
// };

export default withStyles(style)(ProductDetailPage);
