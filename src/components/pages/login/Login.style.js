import styled from 'styled-components';
import { Row, Button } from 'reactstrap';

import { Breakpoints } from '../../AppLayout.style';

export const LoginRow = styled(Row)`
  height: 10rem;
  @media (${Breakpoints.md}) {
    height: 20rem;
  }
`;

export const LoginButton = styled(Button)`
  margin-top: 1rem;

  @media (${Breakpoints.lg}) {
    margin-top: 0;
  }
`;
