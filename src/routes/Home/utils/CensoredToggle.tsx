import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Link = styled(Nav.Link).attrs({
  as: RouterLink,
  replace: true
})``;

const RedLink = styled(Link)`
  color: #da0404 !important;
`;

export default function CensoredToggle({ censored }) {
  return censored ? (
    <RedLink to="/">Dirty Version</RedLink>
  ) : (
    <Link to="/clean">Clean Version</Link>
  );
}
