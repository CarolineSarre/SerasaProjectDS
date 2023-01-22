import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Subheading = ({ children, classes,color,...props }) => {
  return (
    <h6
      className={`${classes} color-${color}`}
      {...props}
    >
      {children}
    </h6>
  );
};

Subheading.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['dark-low',
  'dark-medium',
  'dark-high',
  'magenta',
  'light-solid',
  'light-high'])
};

Subheading.defaultProps = {
  children: null,
  classes: null,
};
