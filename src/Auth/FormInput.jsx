import React from 'react';
import { TextField, Select, MenuItem, InputLabel } from '@material-ui/core';
import { useField } from 'formik';

const FormInput = ({ label, options = [], variant = 'outlined', ...props }) => {
  const [field, meta] = useField(props);
  const { touched, error } = meta;

  const inputProps = {
    ...field,
    ...props,
    error: touched && error,
    helperText: touched && error,
    variant: variant,
    style: {
      fontSize: '14px',
      height: '25px', // Specify the desired height for TextField
    },
    InputLabelProps: {
      style: {
        fontSize: '14px',
      },
    },
  };

  const selectProps = {
    ...field,
    ...props,
    error: touched && error,
    helperText: touched && error,
    variant: variant,
    style: {
      fontSize: '14px',
      height: '15px', // Specify the desired height for Select
    },
    SelectProps: {
      style: {
        fontSize: '14px',
      },
    },
  };

  return (
    <div>
      {props.type === 'select' ? (
        <>
          <InputLabel>{label}</InputLabel>
          <Select {...selectProps}>
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </>
      ) : props.type === 'date' ? (
        <>
          <InputLabel>{label}</InputLabel>
          <TextField {...inputProps} type="date" />
        </>
      ) : (
        <>
          <InputLabel>{label}</InputLabel>
          <TextField {...inputProps} type="text" />
        </>
      )}
    </div>
  );
};

export default FormInput;
