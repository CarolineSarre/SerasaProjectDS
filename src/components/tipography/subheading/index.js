import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Subheading = ({ children, classes, ...props }) => {
  return (
    <h6
      className={classes}
      {...props}
    >
      {children}
    </h6>
  );
};

Subheading.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

Subheading.defaultProps = {
  children: null,
  classes: null,
};
