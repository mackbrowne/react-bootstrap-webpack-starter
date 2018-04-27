import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Container, Row, Col } from 'reactstrap';

export const PageContainer = styled(Container).attrs({
  className: 'my-5',
  fluid: true
})``;

export const PageRow = styled(Row).attrs({
  className: 'my-2'
})``;

export const ImageCol = styled(Col).attrs({
  xs: 12,
  sm: 4
})``;

export const DescriptionCol = styled(Col).attrs({
  xs: 12,
  sm: 8
})``;

export const PlaceImage = styled.img.attrs({
  className: 'img-fluid'
})``;

export const PeopleIcon = styled(FontAwesome).attrs({
  name: 'users'
})``;

export const SizeIcon = styled(FontAwesome).attrs({
  name: 'expand'
})``;
