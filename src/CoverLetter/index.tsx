import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { Title, Summary } from '../App.style';

import Miro from './Miro';
import Squla from './Squla';
import Github from './Github';
import Expo from './Expo';

export default function CoverLetter() {
  let { path } = useRouteMatch();

  return (
    <>
      <Row>
        <Col>
          <Summary>Greetings!</Summary>
          <br />
          <Switch>
            <Route path={`${path}/miro`} component={Miro} />
            <Route path={`${path}/squla`} component={Squla} />
            <Route path={`${path}/github`} component={Github} />
            <Route path={`${path}/expo`} component={Expo} />
            <Route
              path={path}
              component={() => (
                <Container className="px-md-0 py-5">
                  <Row className="d-flex justify-content-between pr-5">
                    <Col as={Title} md="auto">
                      COMPANY NOT FOUND
                    </Col>
                  </Row>
                </Container>
              )}
            />
          </Switch>
          <div className="float-right">
            <Summary>Best Regards,</Summary>
            <Summary>Mackenzie Browne</Summary>
          </div>
        </Col>
      </Row>
    </>
  );
}
