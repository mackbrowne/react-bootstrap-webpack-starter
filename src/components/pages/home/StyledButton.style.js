/* eslint-disable */
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const RotatingTitle = styled.h1`
  animation: ${rotate360} 2s linear infinite;
`;

export const Button = styled.button.attrs({
  type: 'button',
  name: 'styled-button'
})`
  animation: ${({rotate}) => rotate ? `${rotate360} 2s linear infinite` : `none`};
  color: ${({color}) => color};
  background-color: ${({background}) => background};
  border-radius ${({round}) => (round ? '40px' : '0')};
`;
