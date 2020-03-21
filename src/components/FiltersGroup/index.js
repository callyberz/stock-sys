/**
 *
 * FiltersGroup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/styles";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const style = theme => ({
  radioOption: {
    textTransform: "capitalize"
  },
});

function FiltersGroup({
  classes,
  title,
  name,
  options,
  value,
  onChange,
  selectedOption
}) {
  return (
    <div>
      <p>{title}</p>
      {/* <ul> */}
      <RadioGroup aria-label="gender" name="gender1" value={null} onChange={onChange} value={selectedOption.brand}>
        {options.map(option => {
          return (
            <FormControlLabel className={classes.radioOption} key={option.id}
              value={option.id} control={<Radio />} label={option.name} />



            // <li key={option.name || option}>
            //   <Radio
            //     onChange={onChange}
            //     name={name}
            //     message={option.name || option}
            //     value={option.id || option}
            //     checked={value === option.id || value === option}
            //   />
            // </li>
          );
        })}
      </RadioGroup>
      {/* </ul> */}
      <hr />
    </div>
  );
}

FiltersGroup.defaultProps = {
  title: '',
  name: '',
  onChange: () => { },
  options: [],
  value: null,
};

FiltersGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
};

export default withStyles(style)(FiltersGroup);
