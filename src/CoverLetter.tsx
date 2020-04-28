import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { Title, TitleLabel, Summary } from './Resume.style';

import Miro from './companies/Miro';
import Squla from './companies/Squla';

export default function CoverLetter() {
  let { path } = useRouteMatch();

  return (
    <Container className="px-md-0 py-5">
      <Row className="d-flex justify-content-between pr-5">
        <Col as={Title} md="auto">
          Mackenzie Browne
        </Col>
        <Col as={TitleLabel} md="auto">
          Full Stack and Mobile Developer
        </Col>
        <Col as={TitleLabel} md="auto">
          Amsterdam
        </Col>
      </Row>
      <Summary>Greetings!</Summary>
      <br />
      <Switch>
        <Route path={`${path}/miro`} component={Miro} />
        <Route path={`${path}/squla`} component={Squla} />
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
    </Container>
  );
}
