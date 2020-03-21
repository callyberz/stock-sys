/**
 *
 * Filters
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/styles";

import { Collapse } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import FiltersGroup from '../FiltersGroup';

const style = theme => ({
  root: {
    // width: 345
    // display: "flex",
    padding: "2vh 0",
  },
  filterButton: {

    color: "rgb(150, 150, 150)",
    cursor: "pointer",
    display: "inline"
  },
});

function Filters({ classes, filters, onChange, selectedOption }) {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.filterButton} onClick={() => toggleIsOpen(!isOpen)}>
        <MoreHorizIcon />
        <span> Filters</span>
      </div>

      {/* <StyledFilters /> */}
      <div>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {/* <h1>Filters</h1> */}
          <hr />
          <div className="filters-wrapper">
            {filters.map(filter => {
              return (
                <FiltersGroup
                  {...filter}
                  key={filter.name}
                  selectedOption={selectedOption}
                  /* istanbul ignore next */
                  onChange={e => {
                    /* istanbul ignore next */
                    if (window.innerWidth < 768) {
                      toggleIsOpen(!isOpen);
                    }
                    /* istanbul ignore next */
                    onChange(e);
                  }}
                />
              );
            })}
          </div>
        </Collapse>
      </div>
    </div>
  );
}

Filters.defaultProps = {
  filters: [],
  onChange: () => { },
};

Filters.propTypes = {
  filters: PropTypes.array,
  onChange: PropTypes.func,
};

export default withStyles(style)(Filters);
