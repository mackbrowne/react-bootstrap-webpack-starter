import React from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import useClean from '../hooks/useClean';

const CleanLink = styled(Nav.Link).attrs({
  as: RouterLink,
  replace: true,
  className: 'text-decoration-none p-2'
})``;

const DirtyLink = styled(CleanLink)`
  color: #da0404 !important;
`;

export default function CensoredToggle() {
  const censored = useClean();
  const { pathname } = useLocation();

  return censored ? (
    <DirtyLink to={pathname}>Dirty Version</DirtyLink>
  ) : (
    <CleanLink to={`${pathname}?clean`}>Clean Version</CleanLink>
  );
}
