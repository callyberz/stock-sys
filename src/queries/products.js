/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_PRODUCTS = gql`query ($limit: Int, $start: Int, $sort: String, $where: JSON) {
  products(limit: $limit, start: $start, sort: $sort, where: $where) {
    id
    name
    sku
    color
    cost
    price
    status
    cover {
      url
      __typename
    }
    brand {
      id
      name
      __typename
    }
    __typename
  }
  productsConnection(where: $where) {
    aggregate {
      count
    }
  }
  brands {
    id
    name
  }
}
`;

export { GET_PRODUCTS };
