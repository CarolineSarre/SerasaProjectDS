import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeadingL = ({ children, classes, ...props }) => {
  return (
    <h2
      className={classes}
      {...props}
    >
      {children}
    </h2>
  );
};

HeadingL.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

HeadingL.defaultProps = {
  children: null,
  classes: null,
};
