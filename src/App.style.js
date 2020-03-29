import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const CenterRow = styled(Row).attrs({
  className: 'vh-100 d-flex align-items-center justify-content-center'
})``;

export const Title = styled.h1.attrs({
  className: 'mt-2'
})``;

export const TitleLabel = styled.h2.attrs({
  className: 'my-4'
})`
  font-size: 1.5rem;
`;

export const SubTitle = styled.h2.attrs({
  className: 'mt-3'
})``;
