import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  background-color: #f0f2f5;
  padding: 20px;
  border-radius: 5px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  outline: none;
  padding: 12px;
  width: 100%;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: transparent;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:focus {
    border-color: #888;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const PasswordInput = styled(Input)`
  padding-right: 60px;
`;

export const PasswordToggle = styled.span`
  position: absolute;
  top: 50%;
  right: 80px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
