/**
 *
 * ProductsPage
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/styles';
import { style, theme } from './style.js';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { set } from 'lodash';

import { GET_PRODUCTS } from '../../queries';
import Query from '../../components/Query';

import getQueryParameters from '../../utils/getQueryParameters';

import RenderView from './RenderView';
import Filters from '../../components/Filters';

class ProductsPage extends React.Component {
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
    const {
      location: { search },
      history,
      classes,
    } = this.props;

    const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;
    const orderby = getQueryParameters(search, 'orderby') || 'name';
    const range = 10;

    const setSearch = (where, nextStart) => {
      history.push({
        search: `?brand=${where.brand}&start=${nextStart}`,
      });
    };

    const getWhereParams = () => {
      const brand = getQueryParameters(search, 'brand');
      return {
        brand,
      };
    };

    const prepareWhereParams = () => {
      const where = getWhereParams();
      return Object.keys(where).reduce((acc, current) => {
        if (!!where[current] && !where[current].includes('all')) {
          acc[current] = where[current];
        }
        return acc;
      }, {});
    };

    const handleClick = (id) => history.push(`/${id}/details`);

    const handleChange = ({ target }) => {
      let where = getWhereParams();
      where.brand = target.value;
      setSearch(where, 0);
    };

    const handlePageChange = ({ target }) => {
      let where = getWhereParams();
      where.brand = where.brand ? where.brand : 'all';
      setSearch(where, target.value);
    };

    const renderFilters = ({ brands }) => {
      const filters = [
        {
          title: 'Brands',
          name: 'brands',
          options: [{ id: 'all', name: 'all' }, ...brands],
          value: getQueryParameters(search, 'brand') || 'all',
        },
      ];
      const selectedBrand =
        getWhereParams().brand != null ? getWhereParams() : 'All';

      return (
        <Filters
          filters={filters}
          onChange={handleChange}
          range={range}
          selectedOption={selectedBrand}
        />
      );
    };

    const renderView = ({ products, ...rest }) => {
      console.log(rest);
      return (
        <div>
          {renderFilters(rest)}
          <RenderView
            products={products}
            onClick={handleClick}
            onPagingChange={handlePageChange}
            rest={rest}
            start={start}
            range={range}
          />
        </div>
      );
    };

    return (
      <div className={classes.root}>
          <Query
            query={GET_PRODUCTS}
            render={renderView}
            variables={{
              limit: 10,
              start,
              sort: `${orderby}:ASC`,
              where: prepareWhereParams(),
            }}
          />
      </div>
    );
  }
}

// ProductsPage.defaultProps = {
//   location: {
//     pathname: null,
//     search: null
//   }
// };

// ProductsPage.propTypes = {
//   history: PropTypes.object.isRequired,
//   location: PropTypes.shape({
//     search: PropTypes.string.isRequired
//   })
// };

export default withStyles(style)(ProductsPage);
