import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import styled from 'styled-components';

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const PasswordInput = styled.input`
  padding-right: 2.5rem;
`;

const PasswordToggleIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputWrapper>
      <PasswordInput
        type={showPassword ? 'text' : 'password'}
        placeholder="Senha"
      />
      <PasswordToggleIcon onClick={handleTogglePassword}>
        {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
      </PasswordToggleIcon>
    </PasswordInputWrapper>
  );
};

export default PasswordField;
