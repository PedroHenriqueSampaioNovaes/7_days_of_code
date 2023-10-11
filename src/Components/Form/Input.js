import React from 'react';

const Input = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
