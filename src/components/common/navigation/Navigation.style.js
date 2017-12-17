import styled, { keyframes } from 'styled-components';

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
