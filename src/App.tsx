import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Badge, ListGroup } from "react-bootstrap";

// import logo from './logo.svg';
import "./App.css";

const PillGroup = styled(ListGroup).attrs({
  horizontal: true,
  className: "d-flex flex-wrap"
})``;

const Pill = styled(ListGroup.Item).attrs({
  as: Badge,
  variant: "light"
})`
  margin: 1px;
  border: #6c757d 1px solid;
`;

const Title = styled.h1.attrs({
  className: "mt-2"
})``;

const TitleLabel = styled.h2.attrs({
  className: "my-4"
})`
  font-size: 1.5rem;
`;

const SubTitle = styled.h2.attrs({
  className: "mt-3"
})``;

const Summary = styled.p.attrs({
  className: "mb-1"
})``;

const Company = ({ name, location }) => (
  <Row>
    <Col as="h3" className="mb-0">
      {name}
    </Col>
    <Col as="h5" className="mb-0" xs="auto">
      {location}
    </Col>
  </Row>
);

const Position = ({ title, time, duties }) => (
  <>
    <Row>
      <Col as="h4" className="my-2">
        {title}
      </Col>
      <Col as="h5" className="my-2" xs="auto">
        {time}
      </Col>
    </Row>
    <ul className="pl-3 mt-0 mb-2">
      {duties.map((duty, index) => (
        <li key={`${title}-${index}`}>{duty}</li>
      ))}
    </ul>
  </>
);

const Pills = ({ title, list }) => (
  <>
    <SubTitle>{title}</SubTitle>
    <PillGroup>
      {list.map((listItem, index) => (
        <Pill key={`${title}-${index}`}>{listItem}</Pill>
      ))}
    </PillGroup>
  </>
);

const SideList = ({ title, list }) => (
  <>
    <SubTitle>{title}</SubTitle>
    <ul className="list-unstyled p-0 m-0">
      {list.map((item, index) => (
        <li key={`${title}-${index}`}>{item}</li>
      ))}
    </ul>
  </>
);

const ExperienceList = styled(ListGroup).attrs({ variant: "flush" })``;
const Experience = styled(ListGroup.Item).attrs({ className: "pl-0" })``;

export default function App() {
  return (
    <Container className="pt-5">
      <Row>
        <Col>
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

          <Summary>
            Product-focused nerd with 10 years industry experience. Organized,
            lifelong learner motivated by difficult challenges. Self-driven, and
            enjoys working independently and with teams. Uses a curated
            collection of libraries and automation tools to make development /
            testing / deployment more efficient.
          </Summary>
        </Col>
      </Row>
      <Row>
        <Col>
          <SubTitle>Experience</SubTitle>
          <ExperienceList>
            <Experience>
              <Company name="Elsevier" location="Amsterdam" />
              <Position
                title="Senior Full Stack Developer - Scopus Core Team"
                time="Feb 2020 - Present"
                duties={[
                  "Building a full design system and shared component library to unify the look and feel of all Scopus Products",
                  "Involvement in major web stack migration to microservices and modern front-end technologies.",
                  "Perform technical interviews to grow the team.  Mentoring and 1 on 1's for junior / intermediate developers."
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Prodigy" location="Toronto" />
              <Position
                title="Lead Mobile Application Developer - Game"
                time="Mar 2019 – Sep 2019"
                duties={[
                  "Build internal tools from feedback to dramatically improve mobile QA testing speed.",
                  "Improve user experience by building mobile-specific features as well as improving any mobile usability issues",
                  "Configure automation pipelines for QA, builds and deployment.",
                  "Facilitate cross-team collaboration to improve the mobile experience in all parts of the app."
                ]}
              />
              <Position
                title="Senior Full Stack Developer - School Leader App"
                time="Jun 2018 – Mar 2019"
                duties={[
                  "Primary role is to develop new features and improve the Admin/Principal user experience.",
                  "Create user management system to remove and invite new users to an Principal's school",
                  "Develop several in-house tools to improve productivity including CI toosl and Slackbots",
                  "Trained and mentored for several junior and intermediate developers in the company."
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Novus Health" location="Toronto" />
              <Position
                title="Senior Frontend Developer"
                time="Oct 2017 – Jun 2018"
                duties={[
                  "Support and maintain the existing Novus app which includes a user-facing website and a custom CMS.",
                  "Designed a maintainable, reproducable app template that can be used across the Ingle product line.  This dramatically reduced the amount of maintinence and bugs.",
                  "Create new internal company app with data analytics, multiple sign-in routes and dynamic navigation features.",
                  "Train interns and other employees on the team with pair programming and code reviews on each submission.",
                  'Promote extra curricular coding activities like running a team "Advent Of Code" scoreboard.'
                ]}
              />
            </Experience>
            <Experience>
              <Company
                name="Self Incorporated Freelance"
                location="Canada, USA (On-Site and Remote)"
              />
              <Position
                title="Full Stack and Mobile Development"
                time="August 2011 – June 2017"
                duties={[
                  "Full-time contracting including initial pitch meetings all the way through to final product.",
                  "Perform interviews and hiring to advice how companies should hire their teams",
                  "Requirements gathering, design, proof of concept and mvp implementations.",
                  "Perform upgrades, maintinence or build new features to existing products.",
                  "Built Mobile Apps, Websites and Hardware projects involving GPS and Bluetooth",
                  "Clients included IBM, NYPD, Syfy/Space Channel, NBC, Hatch, and many small startups, nonprofits and charities in the Toronto area"
                ]}
              />
            </Experience>
          </ExperienceList>
        </Col>
        <Col md={3}>
          <SideList
            title="Contact"
            list={[
              "info@mackbrowne.com",
              "+31 061 773 5900",
              "linkedin.com/in/mackbrowne"
            ]}
          />
          <SideList
            title="Portfolio"
            list={["mackbrowne.com", "github.com/mackbrowne"]}
          />
          <SideList
            title="Skills"
            list={[
              "Beautiful landing pages",
              "Responsive Design",
              "Agile and Kanban Methodology",
              "Git Flow",
              "Unit and E2E Testing",
              "Continuous Builds / Tests / Deploys",
              "Native and Hybrid Apps",
              "Single Page Apps",
              "REST API Development"
            ]}
          />
          <Pills
            title="Frameworks"
            list={[
              "ReactJS",
              "Hooks / Context",
              "Redux",
              "Styled-Components",
              "Jest",
              "Cypress",
              "NodeJS",
              "Typescript",
              "GraphQL",
              "Bootstrap",
              "React-Native",
              "Expo",
              "Cordova",
              "MeteorJS",
              "Angular"
            ]}
          />
          <Pills
            title="Services"
            list={[
              "AWS",
              "Firebase",
              "JIRA",
              "CircleCI",
              "Google Play",
              "Itunes Connect",
              "Stripe",
              "Maps",
              "OAuth"
            ]}
          />
          <Pills
            title="Tools"
            list={[
              "Git",
              "VSCode",
              "Jenkins",
              "Vim",
              "Prettier",
              "lighthouse",
              "axe",
              "cloc"
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
}
