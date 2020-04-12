import styled from 'styled-components';
import { Row as BSRow } from 'react-bootstrap';
import ReactTextTransition, { presets } from 'react-text-transition';

export const DELAY = 600;
export const QUICK_DELAY = 100;

export const MainRow = styled(BSRow).attrs({
  className:
    'vh-100 d-flex py-5 align-items-center justify-content-center overflow-auto'
})``;

export const H1 = styled.h1.attrs({
  className: 'mt-2'
})``;

export const H2 = styled.h2.attrs({
  className: 'my-4'
})`
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  font-size: 1rem;
`;

export const TextTransition = styled(ReactTextTransition).attrs(
  ({ text, delay = 0 }) => ({
    text,
    delay,
    spring: presets.stiff,
    direction: 'down'
  })
)``;
