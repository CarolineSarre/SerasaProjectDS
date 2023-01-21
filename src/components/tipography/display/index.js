import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Display = ({ children, classes, ...props }) => {
  return (
    <h1
      className={classes}
      {...props}
    >
      {children}
    </h1>
  );
};

Display.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

Display.defaultProps = {
  children: null,
  classes: null,
};
