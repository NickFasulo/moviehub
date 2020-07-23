import React from 'react';
import classnames from 'classnames';
import ChipInput from 'material-ui-chip-input';

const ChipInputGroup = ({ value, onChange, error, placeholder }) => {
  return (
    <div className="form-group">
      <ChipInput
        className={classnames('chipInput', {
          invalid: error.noError === false ? true : false,
        })}
        placeholder={placeholder}
        value={value}
        onAdd={chip => onChange.inputOnChange.handleAddChip(chip)}
        onDelete={(chip, index) =>
          onChange.inputOnChange.handleDeleteChip(chip, index)
        }
        //dataSource={["food", "drinks"]}
      />
      {error.noError === false && (
        <div className="invalid-message">{error.message}</div>
      )}
    </div>
  );
};

export default ChipInputGroup;
