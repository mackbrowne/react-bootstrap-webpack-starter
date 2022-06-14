import React from 'react';
import styled from 'styled-components';
import { Row, Col, Badge, ListGroup } from 'react-bootstrap';

export const PillGroup = styled(ListGroup).attrs({
  horizontal: true,
  className: 'd-flex flex-wrap pb-2 pb-md-1',
})``;

export const Pill = styled(Badge).attrs({
  bg: 'light',
  text: 'dark',
})`
  margin: 1px;
  border: #6c757d 1px solid;
  font-weight: 400;
`;

export const SubTitle = styled.h2.attrs({
  className: 'mt-3',
})``;

export const Education = styled.h2.attrs({
  className: 'mt-3',
})``;

export const Company = ({ name, location }) => (
  <Row>
    <Col as="h3" className="mb-0">
      {name}
    </Col>
    <Col as="h5" className="mb-0" md="auto">
      {location}
    </Col>
  </Row>
);

export const Position = ({ title, time, duties }) => (
  <>
    <Row>
      <Col as="h4" className="my-2">
        {title}
      </Col>
      <Col as="h5" className="my-md-2" md="auto">
        {time}
      </Col>
    </Row>
    <ul className="pl-3 my-0">
      {duties.map((duty, index) => (
        <li key={`${title}-${index}`}>{duty}</li>
      ))}
    </ul>
  </>
);

export const Pills = ({ title = '', list }) => (
  <>
    {title && <SubTitle>{title}</SubTitle>}
    <PillGroup>
      {list.map((listItem, index) => (
        <Pill key={`${title}-${index}`}>{listItem}</Pill>
      ))}
    </PillGroup>
  </>
);

export const SideList = ({ title, list }) => (
  <>
    <SubTitle>{title}</SubTitle>
    <ul className="list-unstyled p-0 m-0">
      {list.map((item, index) => (
        <li key={`${title}-${index}`}>{item}</li>
      ))}
    </ul>
  </>
);

export const ExperienceList = styled(ListGroup).attrs({ variant: 'flush' })``;
export const Experience = styled(ListGroup.Item).attrs({
  className: 'pl-0',
})`
  &:first-child {
    padding-top: 0;
  }
  // &:last-child {
  //   border-bottom: 0;
  // }
`;
