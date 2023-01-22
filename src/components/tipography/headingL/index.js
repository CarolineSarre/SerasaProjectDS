import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeadingL = ({ children, classes,color, ...props }) => {
  return (
    <h2
      className={`${classes} color-${color}`}
      {...props}
    >
      {children}
    </h2>
  );
};

HeadingL.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['dark-low',
  'dark-medium',
  'dark-high',
  'magenta',
  'light-solid',
  'light-high'])
};

HeadingL.defaultProps = {
  children: null,
  classes: null,
};
