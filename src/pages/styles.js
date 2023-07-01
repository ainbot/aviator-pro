import styled, { keyframes, css } from "styled-components";
import { FaToggleOn, FaToggleOff, FaPlay, FaPause } from "react-icons/fa";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const zoom = keyframes`
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #272b36;

  ${(props) =>
    props.darkMode &&
    css`
      background-color: #222;
    `}

  padding: 10px; /* Adicione esta linha para definir o espaçamento entre o Container e as margens da página */
`;


export const Header = styled.div`
  width: 100%;
  height: 60px;

  background-color: #708090;
  position: fixed;
  font-size: 29px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9;
  

  h1 {
    color: red;
    font-weight: bold;
    font-size: 10px;
    margin: 10;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 310px;
  padding: 10px;
  margin: 5px 0;
  font-size: 13px;
  background-color: #708090;
  color: white;
  border: none;
  outline: none;
  border-radius: 7px;

  ${(props) =>
    props.darkMode &&
    css`
      background-color: #333;
    `}
`;

export const InputLabel = styled.label`
  color: white;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const GenerateButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #3cb371;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  gap: 7px;
  margin-top: 7px;
  animation: ${zoom} 0.4s ease-in-out;

  &:hover {
    background-color: #2e8b57;
    transform: scale(1.1);
  }

  ${(props) =>
    props.darkMode &&
    css`
      background-color: #008000;
      &:hover {
        background-color: #006400;
      }
    `}
`;

export const TimeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  gap: 7px;
  margin-top: 10px;
`;

export const TimeSlot = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.color};
  padding: 5px;
  border-radius: 5px;
  min-width: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.div`
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 14px;

  p {
    background-color: #272b36;
    padding: 0 10px;
  }
`;

export const WhiteLine = styled.div`
  width: 80%;
  height: 1px;
  background-color: white;
  margin-bottom: 20px;
`;

export const TitleLink = styled.a`
  font-size: 20px;
  color: white;
  text-decoration: none;
  margin-bottom: 100px;
  margin-left: 20px;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;


export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3cb371;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;


