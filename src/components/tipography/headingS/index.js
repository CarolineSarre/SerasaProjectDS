import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeadingS = ({ children, classes, ...props }) => {
  return (
    <h4
      className={classes}
      {...props}
    >
      {children}
    </h4>
  );
};

HeadingS.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

HeadingS.defaultProps = {
  children: null,
  classes: null,
};
