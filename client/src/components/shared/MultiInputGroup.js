import React from 'react';
import ChipInputGroup from './ChipInputGroup';
import InputGroup from './InputGroup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MultiInputGroup = props => {
  let multiInputField = null;

  switch (props.type) {
    case 'text':
      multiInputField = (
        <InputGroup
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleOnChange.inputOnChange}
          value={props.value}
          error={props.error}
          type={props.type}
        />
      );
      break;
    case 'email':
      multiInputField = (
        <InputGroup
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleOnChange.inputOnChange}
          value={props.value}
          error={props.error}
          type={props.type}
        />
      );
      break;
    case 'phone':
      multiInputField = (
        <InputGroup
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleOnChange.inputOnChange}
          value={props.value}
          error={props.error}
          type={props.type}
        />
      );
      break;
    case 'dateInput':
      multiInputField = (
        <>
          <label style={{ color: 'green' }}>Enter Friend's Birthday</label>
          <br />
          <DatePicker
            className="birthday--input-date"
            name={props.name}
            selected={props.startDate}
            onChange={props.handleOnChange.inputOnChange}
          />
        </>
      );
      break;
    case 'chipInput':
      multiInputField = (
        <ChipInputGroup
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleOnChange}
          value={props.valueArray}
          error={props.error}
          type={props.type}
        />
      );
      break;
    default:
      return null;
  }
  return <>{multiInputField}</>;
};

export default MultiInputGroup;
