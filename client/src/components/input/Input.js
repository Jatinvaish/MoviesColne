import React from 'react';
import './input.scss';
//for common input there are 4 basic and required props in this... 
const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
};

export default Input;
