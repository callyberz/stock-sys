/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import Layout from "../../components/Layout";
import ProductDetail from "./ProductDetail";

function action({ match, history }) {
  return (
    <Layout>
      <ProductDetail match={match} history={history} />
    </Layout>
  );
}

export default action;

/**
 *
 * ProductDetailPage
 *
 */

// import React from "react";
// import PropTypes from "prop-types";

// import { GET_PRODUCT } from "../../queries";
// import Query from "../../components/Query";

// import RenderView from "./RenderView";

// function ProductDetailPage(props) {
//   const {
//     match: {
//       params: { id }
//     }
//   } = props;

//   /* istanbul ignore next */

//   return (

//   );
// }

// ProductDetailPage.defaultProps = {};
// ProductDetailPage.propTypes = {
//   match: PropTypes.object.isRequired
// };

// export default ProductDetailPage;
