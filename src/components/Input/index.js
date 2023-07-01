import React, { useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputWrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #999;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4285f4;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Input = ({ type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputWrapper>
      <InputField
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
      />
      {type === "password" && (
        <PasswordToggle onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </PasswordToggle>
      )}
    </InputWrapper>
  );
};

export default Input;
