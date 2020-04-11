import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { auth } from 'firebase/app';
import { Fade, Navbar, Nav } from 'react-bootstrap';
import CensoredToggle from './CensoredToggle';
import useClean from '../hooks/useClean';
import { useAuthState } from 'react-firebase-hooks/auth';
import copy from 'copy-to-clipboard';

import styled from 'styled-components';
import { TextTransition } from '../App.style';
import { IdeaContext } from '../context/Idea';
const BottomNavbar = styled(Navbar).attrs({
  fixed: 'bottom'
})`
  background-color: #fff;
`;

export default function Footer() {
  const { pathname } = useLocation();
  const censored = useClean();
  const [user, ,] = useAuthState(auth());

  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowFooter(true), censored ? 2400 : 3200);
  }, [censored]);

  const [copied, setCopied] = useState(false);

  const {
    data: { slug }
  } = useContext(IdeaContext);
  const share = () => {
    copy(window.location.href + slug);
    setCopied(true);
  };

  useEffect(() => {
    setCopied(false);
  }, [pathname]);

  return (
    <Fade in={showFooter}>
      <BottomNavbar>
        <Nav className="mr-auto">
          {[
            { name: 'Home', url: '/', hidden: [] },
            { name: 'Create', url: '/create', hidden: ['/login', '/sign-up'] }
          ].map(
            ({ name, url, hidden }) =>
              pathname !== url &&
              !hidden.includes(pathname) && (
                <Nav.Link
                  key={url}
                  as={NavLink}
                  to={{
                    pathname: url,
                    search: censored && '?clean'
                  }}
                >
                  {name}
                </Nav.Link>
              )
          )}
          <Fade unmountOnExit in={!!user}>
            <div>
              <Nav.Link onClick={() => auth().signOut()}>Sign Out</Nav.Link>
            </div>
          </Fade>
          <Nav.Link onClick={share}>
            <TextTransition text={copied ? 'Copied Link!' : 'Share'} />
          </Nav.Link>
        </Nav>
        <Nav>
          <CensoredToggle />
        </Nav>
      </BottomNavbar>
    </Fade>
  );
}
