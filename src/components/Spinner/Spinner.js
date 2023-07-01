import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-top-color: #3cb371;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => <SpinnerContainer />;

export default Spinner;
