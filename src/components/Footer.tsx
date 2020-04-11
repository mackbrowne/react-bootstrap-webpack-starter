import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { auth } from 'firebase/app';
import { Fade, Navbar, Nav } from 'react-bootstrap';
import CensoredToggle from './CensoredToggle';
import useClean from '../hooks/useClean';
import { useAuthState } from 'react-firebase-hooks/auth';

import styled from 'styled-components';
const BottomNavbar = styled(Navbar).attrs({
  fixed: 'bottom'
})`
  background-color: #fff;
`;

export default function Footer() {
  const history = useHistory();
  const censored = useClean();
  const [user, ,] = useAuthState(auth());

  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowFooter(true), censored ? 2400 : 3200);
  }, [censored]);

  return (
    <Fade in={showFooter}>
      <BottomNavbar>
        <Nav className="mr-auto">
          {[
            { name: 'Home', pathname: '/' },
            { name: 'Create', pathname: '/create' }
          ].map(
            ({ name, pathname }) =>
              history.location.pathname !== pathname && (
                <Nav.Link
                  key={pathname}
                  as={NavLink}
                  to={{
                    pathname: pathname,
                    search: censored && '?clean'
                  }}
                >
                  {name}
                </Nav.Link>
              )
          )}
          <Fade in={!!user}>
            <div>
              {/* <Button
                variant="link"
                onClick={() => auth().signOut()}
              >
                Sign Out
              </Button> */}
              <Nav.Link onClick={() => auth().signOut()}>Sign Out</Nav.Link>
            </div>
          </Fade>
        </Nav>
        <Nav>
          <CensoredToggle />
        </Nav>
      </BottomNavbar>
    </Fade>
  );
}
