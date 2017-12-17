// Framework
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Button
} from 'reactstrap';

import { Logo } from './Navigation.style';
import logo from './../../../img/logo.svg';

/**
 * A list of field rows with a header.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Navigation = ({
  navigationItems = [
    { label: 'Posts', path: 'posts' },
    { label: 'Albums', path: 'page3' },
    { label: 'Todos', path: 'todos' }
  ],
  toggle = () => {},
  logout = () => {},
  isLoggedIn = false,
  name = '',
  company = {},
  isOpen = true
}) =>
  isLoggedIn && (
    <Row className="bg-faded">
      <Col xs="12">
        <Navbar color="faded" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {navigationItems.map(({ label, path }, i) => (
                <NavItem key={`nav-item-${i}`}>
                  <NavLink tag={Link} to={path}>
                    {label}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink tag={Button} color="link">
                  {name} ({company.name})
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Button} color="link" onClick={logout}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );

export default Navigation;
