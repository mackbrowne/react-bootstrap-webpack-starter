import styled, { keyframes } from 'styled-components';
import { Container } from 'reactstrap';

export const Breakpoints = {
  sm: 'min-width: 576px',
  md: 'min-width: 768px',
  lg: 'min-width: 992px',
  xl: 'min-width: 1200px'
};

export const AppContainer = styled(Container)`
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
export const Logo = styled.img`
  animation: ${rotate360} 20s linear infinite;
  height: 80px;
`;
