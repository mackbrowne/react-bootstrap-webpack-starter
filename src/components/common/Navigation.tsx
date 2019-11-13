// Framework
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Navbar, Nav } from 'react-bootstrap';

export type NavItemType = {
  label: string,
  path: string
};

export interface NavProps {
  navigationItems: NavItemType[];
}

/**
 * A list of field rows with a header.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
export default function Navigation({ navigationItems = [] }: NavProps) {
  return (
    <Navbar color="faded" bg="light" expand="md">
      <Navbar.Brand href="/">Flickr Photo Viewer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" navbar>
          {navigationItems.map(({ label, path }, i) => (
            <Nav.Link key={`nav-item-${i}`} as={Link} to={path}>
              {label}
            </Nav.Link>
          ))}
          <Nav.Item>
            <Nav.Link
              href="https://github.com/mackbrowne/react-bootstrap-webpack-starter/tree/interview-cygni"
              target="_blank"
            >
              Github
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
