import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import logo from './logo.svg';
import './App.css';
import {
  Title,
  TitleLabel,
  Summary,
  SubTitle,
  ExperienceList,
  Experience,
  Company,
  SideList,
  Pills,
  Position
} from './App.style.js';

export default function App() {
  return (
    <Container className="px-md-0 py-5">
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
            Organized, lifelong learner motivated by difficult challenges.
            Self-driven, and enjoys working independently and with teams. Uses a
            curated collection of libraries and automation tools to make
            development / testing / deployment more efficient.
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
                  "Perform technical interviews to grow the team.  Mentoring and 1 on 1's for to improve team skills",
                  'Involved in building a design system and shared component library to unify the user experience',
                  'Involvement in major web stack migration to micro services and micro front-end technologies'
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Prodigy" location="Toronto" />
              <Position
                title="Lead Mobile Application Developer - Game"
                time="Mar 2019 – Sep 2019"
                duties={[
                  'Improve mobile user experience and design a standardized method for mobile-specific features',
                  'Lead project to build internal tools from feedback to improve mobile QA testing speed',
                  'Design and build standardized techniques, automation pipelines for tests, builds and deployment',
                  'Facilitate cross-team collaboration to improve the mobile experience in all parts of the product'
                ]}
              />
              <Position
                title="Senior Full Stack Developer - School Leader App"
                time="Jun 2018 – Mar 2019"
                duties={[
                  'Create new features and improve the School Administrator user experience.',
                  'Develop several in-house tools to improve productivity including CI tools and Slack bots',
                  'Perform lunch time tech talks. Train and mentor developers in 1 on 1 meetings'
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Novus Health" location="Toronto" />
              <Position
                title="Senior Frontend Developer"
                time="Oct 2017 – Jun 2018"
                duties={[
                  'Support and maintain the existing Novus app.  Includes a user-facing website and a custom CMS',
                  'Designed a maintainable, reproducible app template that can be used across the Ingle product line.  This dramatically reduced the amount of maintenance and bugs',
                  'Create custom company-facing dashboard app with multiple sign-in routes, analytics and tools',
                  'Train interns and other employees with pair programming and code reviews'
                  // TODO: make this in projects
                  // 'Promote extra curricular coding activities like running a team "Advent Of Code" scoreboard'
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
                  'Full-time contracting. Initial requirements meetings through to final product',
                  'Built Mobile Apps, Websites and Hardware projects involving GPS, Bluetooth and VR',
                  'Long term maintenance, upgrades or new features to existing products',
                  'Perform interviews for hiring and develop strategies to grow teams over time',
                  'Clients included IBM, NYPD, Syfy/Space Channel, NBC, Hatch, and many small startups, nonprofits and charities in the Toronto area'
                ]}
              />
            </Experience>
          </ExperienceList>
          <SubTitle>Education</SubTitle>
          <ExperienceList>
            <Experience>
              <Company
                name="University Of Ontario Institute of Technology"
                location="Oshawa, Canada"
              />
              <Position
                title="Bachelor Of Science with Honours"
                time="2007 - 2012"
                duties={[
                  'Computer Science with minor in Mathematics',
                  '16 Month Internship in Web Application Development at IBM',
                  'Thesis involving concurrent, multi-core web crawling using Clojure'
                ]}
              />
            </Experience>
          </ExperienceList>
          {/* <SubTitle>Projects</SubTitle>
          <ExperienceList>
            <Experience>
              <Position
                title="Syrup - Real-time Instant Messenger"
                time="https://syrup.life - 2019"
              />
              <Pills
                list={['React Native', 'Firebase', 'Hooks', 'NativeBase']}
              />
            </Experience>
            <Experience>
              <Position
                title="Bachelor Of Science with Honours"
                time="2007 - 2012"
              />
            </Experience>
          </ExperienceList> */}
        </Col>
        <Col md={3}>
          <SideList
            title="Contact"
            list={['info@mackbrowne.com', '+31 061 773 5900']}
          />
          <SideList
            title="Portfolio"
            list={[
              'mackbrowne.com',
              'linkedin.com/in/mackbrowne',
              'github.com/mackbrowne'
            ]}
          />
          <SideList
            title="Skills"
            list={[
              'Single Page Apps',
              'Native and Hybrid Apps',
              'REST Development',
              'Continuous Integration',
              'Unit and E2E Testing',
              'Customer Facing Pages',
              'Responsive Design',
              'Agile, Kanban and Scrum',
              'Git Flow and Monorepos'
            ]}
          />
          <Pills
            title="Frameworks"
            list={[
              'ReactJS',
              'Hooks / Context',
              'Redux',
              'Styled-Components',
              'Jest',
              'Cypress',
              'NodeJS',
              'Typescript',
              'GraphQL',
              'Bootstrap',
              'React-Native',
              'Expo',
              'Cordova',
              'MeteorJS',
              'Angular'
            ]}
          />
          <Pills
            title="Services"
            list={[
              'AWS',
              'Firebase',
              'JIRA',
              'CircleCI',
              'Google Play',
              'Apple Developer',
              'Stripe',
              'Maps',
              'OAuth'
            ]}
          />
          <Pills
            title="Tools"
            list={[
              'Git',
              'VSCode',
              'Jenkins',
              'Vim',
              'Prettier',
              'Lighthouse',
              'Axe'
            ]}
          />
          <Pills
            title="Languages"
            list={[
              'Javascript',
              'Typescript',
              'ES6',
              'MongoDB',
              'Java',
              'Python',
              'GraphQL',
              'SQL',
              'Clojure',
              'C++'
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
}
