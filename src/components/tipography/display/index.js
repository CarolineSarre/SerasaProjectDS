import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Display = ({ children, classes,color, ...props }) => {
  return (
    <h1
      className={`${classes} color-${color}`}
      {...props}
    >
      {children}
    </h1>
  );
};

Display.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['dark-low',
  'dark-medium',
  'dark-high',
  'magenta',
  'light-solid',
  'light-high'])
};

Display.defaultProps = {
  children: null,
  classes: null,
  olor: 'dark-high',
};
