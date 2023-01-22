import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const BodyM = ({ children, classes, weight, color, ...props }) => {
  return (
    <p
      className={`${classes} ${weight === 'bold' ? 'bold' : ''} color-${color}`}
      {...props}
    >
      {children}
    </p>
  );
};

BodyM.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
  weight: PropTypes.oneOf(['regular', 'bold']),
  color: PropTypes.oneOf(['dark-low',
  'dark-medium',
  'dark-high',
  'magenta',
  'light-solid',
  'light-high'])
};

BodyM.defaultProps = {
  children: null,
  classes: null,
  weight: 'regular',
  color: 'dark-high',
};
