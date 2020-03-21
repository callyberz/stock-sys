/* eslint-disable import/prefer-default-export */
import gql from "graphql-tag";

const GET_PRODUCT = gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      name
      sku
      color
      cost
      price
      status
      cover {
        url
      }
      brand {
        id
        name
      }
    }
  }
`;

export { GET_PRODUCT };
