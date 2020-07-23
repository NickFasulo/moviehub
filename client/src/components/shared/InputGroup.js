import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputGroup = ({ name, value, placeholder, type, onChange, error }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        className={classnames('form-style', {
          invalid: error.noError === false ? true : false,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error.noError === false && (
        <div className="invalid-message">{error.message}</div>
      )}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object,
};

InputGroup.defaultProps = {
  type: 'text',
};

export default InputGroup;
