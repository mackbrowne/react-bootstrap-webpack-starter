import React, { useEffect, useState, useContext, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { auth } from 'firebase/app';
import { Fade, Navbar, Nav } from 'react-bootstrap';
import CensoredToggle from './CensoredToggle';
import useClean from '../hooks/useClean';
import { useAuthState } from 'react-firebase-hooks/auth';
import copy from 'copy-to-clipboard';
import wait from 'waait';

import styled from 'styled-components';
import { TextTransition, DELAY } from '../App.style';
import { IdeaContext } from '../context/Idea';
const BottomNavbar = styled(Navbar).attrs({
  fixed: 'bottom'
})`
  background-color: #fff;
  // background-color: #D4D4D4;
`;

export default function Footer() {
  const { slug } = useContext(IdeaContext);

  const { pathname, search } = useLocation();
  const censored = useClean();
  const [user] = useAuthState(auth());
  const [showNavbar, setShowFooter] = useState(false);
  const [copied, setCopied] = useState(false);

  const showFooter = useCallback(async () => {
    await wait(DELAY * (censored ? 3 : 4));
    setShowFooter(true);
  }, [censored]);

  const share = useCallback(async () => {
    setCopied(true);
    copy(`${window.location.origin}/${slug}${search}`);
    await wait(DELAY * 3);
    setCopied(false);
  }, [search, slug]);

  useEffect(() => {
    showFooter();
  }, [showFooter]);

  return (
    <Fade in={showNavbar}>
      <BottomNavbar>
        <Nav className="mr-auto">
          {[
            {
              name: 'Home',
              url: '/',
              show: ['/create', '/login', '/sign-up']
            },
            { name: 'Create', url: '/create', hidden: ['/login', '/sign-up'] }
          ].map(
            ({ name, url, hidden, show }) =>
              pathname !== url &&
              ((show && show.includes(pathname)) ||
                (hidden && !hidden.includes(pathname))) && (
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
          <Fade
            unmountOnExit
            in={!['/login', '/sign-up', '/create'].includes(pathname)}
          >
            <div>
              <Nav.Link onClick={share}>
                <TextTransition text={copied ? 'Copied Link!' : 'Share'} />
              </Nav.Link>
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
