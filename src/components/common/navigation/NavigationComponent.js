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
  NavLink
} from 'reactstrap';

/**
 * A list of field rows with a header.
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {Element} Stateless functional React component.
 */
const Navigation = ({
  navigationItems = [],
  toggle = () => {},
  isOpen = true
}) => (
  <Navbar color="faded" light expand="md">
    <NavbarBrand href="/">Limelight Interview</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        {navigationItems.map(({ label, path }, i) => (
          <NavItem key={`nav-item-${i}`}>
            <NavLink tag={Link} to={path}>
              {label}
            </NavLink>
          </NavItem>
        ))}
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Github
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

export default Navigation;
