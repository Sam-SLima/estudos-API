import React from "react";

const Input = ({ label, type, placeholder, onChange, required }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </>
  );
};

export default Input;
