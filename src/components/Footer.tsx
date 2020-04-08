import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase/app';
import { Fade, Navbar, Nav, Button } from 'react-bootstrap';
import CensoredToggle from './CensoredToggle';
import useClean from '../hooks/useClean';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Footer() {
  const history = useHistory();
  const censored = useClean();
  const [user, ,] = useAuthState(auth());

  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowFooter(true), censored ? 850 : 1500);
  }, [censored]);

  return (
    <Fade in={showFooter}>
      <Navbar fixed="bottom">
        <Navbar.Collapse className="justify-content-start">
          {[
            { name: 'Home', url: '/' },
            { name: 'Create', url: '/create' }
          ].map(
            ({ name, url }) =>
              history.location.pathname !== url && (
                <Nav key={name}>
                  <Button
                    variant="link"
                    as={Link}
                    to={censored ? `${url}?clean` : url}
                  >
                    {name}
                  </Button>
                </Nav>
              )
          )}
          {/* <Nav>
            <Button variant="link" as={Link} to={censored ? '/?clean' : ''}>
              Home
            </Button>
          </Nav>
          <Nav>
            <Button
              variant="link"
              as={Link}
              to={censored ? 'create/?clean' : 'create'}
            >
              Create
            </Button>
          </Nav> */}
          <Fade in={!!user}>
            <div>
              <Nav>
                <Button variant="link" onClick={() => auth().signOut()}>
                  Sign Out
                </Button>
              </Nav>
            </div>
          </Fade>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <CensoredToggle />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fade>
  );
}
