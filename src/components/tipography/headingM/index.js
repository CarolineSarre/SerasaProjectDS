import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeadingM = ({ children, classes, color, ...props }) => {
  return (
    <h3
      className={`${classes} color-${color}`}
      {...props}
    >
      {children}
    </h3>
  );
};

HeadingM.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['dark-low',
  'dark-medium',
  'dark-high',
  'magenta',
  'light-solid',
  'light-high'])
};

HeadingM.defaultProps = {
  children: null,
  classes: null,
};
