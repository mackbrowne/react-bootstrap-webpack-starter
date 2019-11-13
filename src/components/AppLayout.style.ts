import styled, { keyframes } from 'styled-components';
import { Container, Image } from 'react-bootstrap';

export const AppContainer = styled(Container).attrs({
  fluid: true
})`
  text-align: center;
`;

const rotate360 = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Logo = styled(Image)`
  animation: ${rotate360} 20s linear infinite;
  height: 80px;
`;
