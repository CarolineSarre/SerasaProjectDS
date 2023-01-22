import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = (props) => {
  const {
    text,
    isDisabled,
    size,
    backgroundColor,
    textColor,
    onClick,
    shadow,
  } = props;

  const shadows = shadow ? 'shadow' : '';
  const disabled = isDisabled ? 'disabled' : '';

  return (
    <button
      onClick={onClick}
      className={[
        'button',
        `${size}`,
        `${shadows}`,
        `${disabled}`,
        `bg-${backgroundColor}`,
        `text-${textColor}`,
      ].join(' ')}
      disabled={isDisabled}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isDisabled: false,
  type: 'filled',
  size: 'medium',
  backgroundColor: 'transparent',
  textColor: 'white',
  shadow:true
};

export { Button };