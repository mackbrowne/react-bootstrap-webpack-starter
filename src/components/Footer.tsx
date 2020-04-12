import React, { useEffect, useState, useContext } from 'react';
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
`;

export default function Footer() {
  const {
    data: { slug }
  } = useContext(IdeaContext);

  const { pathname, search } = useLocation();
  const censored = useClean();
  const [user] = useAuthState(auth());
  const [showFooter, setShowFooter] = useState(false);
  const [copied, setCopied] = useState(false);

  const CENSOR_DELAY = censored ? 0 : DELAY;

  useEffect(() => {
    (async () => {
      await wait(CENSOR_DELAY);
      await wait(DELAY * 3);
      setShowFooter(true);
    })();
  }, [CENSOR_DELAY, censored]);

  const share = async () => {
    setCopied(true);
    copy(`${window.location.origin}/${slug}${search}`);
    await wait(DELAY * 3);
    setCopied(false);
  };

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
