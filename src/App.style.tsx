import styled from 'styled-components';

export const Headline = styled.p.attrs({
  className: 'mb-1',
})`
  color: slategrey;
`;

export const Message = styled.div.attrs({
  className: 'mb-3 mx-auto',
})`
  max-width: 85ch;
`;

export const Title = styled.h1.attrs({
  className: 'mb-3',
})`
  font-size: 3rem;
`;
