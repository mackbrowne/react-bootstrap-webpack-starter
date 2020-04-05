import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import useClean from './hooks/useClean';

const Link = styled(Nav.Link).attrs({
  as: RouterLink,
  replace: true
})``;

const RedLink = styled(Link)`
  color: #da0404 !important;
`;

export default function CensoredToggle() {
  const censored = useClean();
  const { pathname } = useLocation();

  return censored ? (
    <RedLink to={pathname}>Dirty Version</RedLink>
  ) : (
    <Link to={`${pathname}?clean`}>Clean Version</Link>
  );
}
