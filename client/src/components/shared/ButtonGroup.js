import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import classnames from './node_modules/classnames';

export default function ButtonGroup({
  buttonStyle,
  title,
  disabled,
  onClick = null,
  style = null,
}) {
  return (
    <button
      className={classnames(`${buttonStyle}`, {
        'form-button-valid filled': disabled !== true ? true : false,
      })}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

ButtonGroup.propTypes = {
  buttonStyle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
