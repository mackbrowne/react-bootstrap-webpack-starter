import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const BlueButton = styled.button.attrs({
  type: 'button',
  name: 'styled-button'
})`
  background-color: blue;
  color: white;
`;

export const RoundButton = BlueButton.extend`
  border-radius: 40px;
`;

export const RedButton = RoundButton.extend`
  background-color: red;
  color: black;
`;

export const RotateButton = styled(RedButton)`
  animation: ${rotate360} 2s linear infinite;
`;

export const RotatingTitle = styled.h1`
  animation: ${rotate360} 2s linear infinite;
`;
