import React from 'react';
import InputBody from './style';

const Input = ({ onChange, onBlur, border, placeholder, className, type, name, defaultValue }) => (
  <InputBody
    defaultValue={defaultValue}
    onChange={onChange}
    onBlur={onBlur}
    border={border}
    name={name}
    type={type}
    className={className}
    placeholder={placeholder}
  />
);

export default Input;
