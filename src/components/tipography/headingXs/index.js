import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeadingXs = ({ children, classes, ...props }) => {
  return (
    <h5
      className={classes}
      {...props}
    >
      {children}
    </h5>
  );
};

HeadingXs.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

HeadingXs.defaultProps = {
  children: null,
  classes: null,
};
