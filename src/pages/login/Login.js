import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth1 } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #272b36;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  box-shadow: 0 1px 2px #0003;
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #708090;

  &::after {
    content: "*";
    color: red;
    margin-left: 5px;
  }
`;

const LabelError = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: red;
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px;
  width: 300px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 15px;
  width: 268px;
  border: solid 1px rgba(66, 133, 244, 0.5);
  border-radius: 8px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;

  &::placeholder {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #b5b5b5;
  }
`;

const PasswordToggleIcon = styled.span`
  position: absolute;
  top: 64%;
  right: 23px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #708090;
`;

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;

  & > div {
    width: 7px;
    height: 7px;
    background-color: black;
    border-radius: 50%;
    margin: 0 3px;
    animation: loadingAnimation 0.8s infinite ease-in-out;

    @keyframes loadingAnimation {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #272b36;
`;

const Login = ({ setUsername }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [saveAccount, setSaveAccount] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth1, email, password);
      setUsername(email);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setError('Email inválido.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Senha incorreta.');
      } else if (error.code === 'auth/user-not-found') {
        setError('Conta não encontrada.');
      } else {
        setError('Erro ao fazer login. Verifique suas credenciais.');
      }
    }

    setIsLoading(false);
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSaveAccount = () => {
    setSaveAccount(!saveAccount);
  };

  return (
    <Container>
      <Content>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <InputContainer>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              placeholder="email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Senha</Label>
            <Input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordToggleIcon onClick={handlePasswordToggle}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </PasswordToggleIcon>
          </InputContainer>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              id="saveAccount"
              checked={saveAccount}
              onChange={handleSaveAccount}
            />
            <CheckboxLabel htmlFor="saveAccount">Salvar conta</CheckboxLabel>
          </CheckboxContainer>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <LoadingIndicator>
                <div></div>
                <div></div>
                <div></div>
              </LoadingIndicator>
            ) : (
              'Entrar'
            )}
          </Button>
          {error && <LabelError>{error}</LabelError>}
        </form>
      </Content>
    </Container>
  );
};

export default Login;
