import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeadingXs = ({ children, classes, color, ...props }) => {
  return (
    <h5
      className={`${classes} color-${color}`}
      {...props}
    >
      {children}
    </h5>
  );
};

HeadingXs.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['dark-low',
  'dark-medium',
  'dark-high',
  'magenta',
  'light-solid',
  'light-high'])
};

HeadingXs.defaultProps = {
  children: null,
  classes: null,
};
