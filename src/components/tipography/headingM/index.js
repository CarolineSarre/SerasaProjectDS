import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeadingM = ({ children, classes, ...props }) => {
  return (
    <h3
      className={classes}
      {...props}
    >
      {children}
    </h3>
  );
};

HeadingM.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

HeadingM.defaultProps = {
  children: null,
  classes: null,
};
