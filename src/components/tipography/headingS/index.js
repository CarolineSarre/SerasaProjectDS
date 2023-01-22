import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeadingS = ({ children, classes, color, ...props }) => {
  return (
    <h4
      className={`${classes} color-${color}`}
      {...props}
    >
      {children}
    </h4>
  );
};

HeadingS.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['dark-low',
  'dark-medium',
  'dark-high',
  'magenta',
  'light-solid',
  'light-high'])
};

HeadingS.defaultProps = {
  children: null,
  classes: null,
};
