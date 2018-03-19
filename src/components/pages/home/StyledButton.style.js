import styled from 'styled-components';

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
