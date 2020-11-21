import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Summary } from '../App.style';
import {
  SubTitle,
  ExperienceList,
  Experience,
  Company,
  SideList,
  Pills,
  Position
} from './Resume.style';

export default function Resume() {
  return (
    <>
      <Row>
        <Col>
          <Summary>
            Organized, lifelong learner who likes difficult challenges.
            Self-motivated, enjoys working independently and with teams. Uses a
            curated collection of tools and automation to make development /
            testing / deployment efficient. Approaches problems holistically and
            pragmatically, solving real issues not just symptoms.
          </Summary>
        </Col>
      </Row>
      <Row>
        <Col>
          <SubTitle>Experience</SubTitle>
          <ExperienceList>
            <Experience>
              <Company name="Nationale Nederlanden" location="Amsterdam" />
              <Position
                title="Full Stack / Mobile Developer - Architecture and Innovation"
                time="July 2020 - Present"
                duties={[
                  'Leadership in building a design system and shared component library in React Native',
                  'Design and develop internal development tools and examples of testing for the company to re-use',
                  'Perform technical and cultural interviews to grow our own and other teams across the company'
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Elsevier" location="Amsterdam" />
              <Position
                title="Senior Full Stack Developer - Scopus Core Team"
                time="Feb 2020 - June 2020"
                duties={[
                  "Perform technical interviews to grow the team.  Mentoring and 1 on 1's to improve team skills",
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
                  'Lead project to design and build internal tools from feedback to improve mobile QA testing speed',
                  'Design and build standardized techniques, automation pipelines for tests, builds and deployment',
                  'Facilitate cross-team collaboration to improve the mobile experience in all parts of the product'
                ]}
              />
              <Position
                title="Senior Full Stack Developer - School Leader App"
                time="Jun 2018 – Mar 2019"
                duties={[
                  'Develop several in-house tools to improve productivity including CI tools and Slack bots',
                  'Perform lunch time tech talks. Train and mentor developers in 1 on 1 meetings'
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Novus Health" location="Toronto" />
              <Position
                title="Lead Frontend Developer"
                time="Oct 2017 – Jun 2018"
                duties={[
                  'Support and maintain a commercial website, internal dashboard and CMS, authentication, analytics/testing.',
                  'Designed a maintainable, reproducible white-labelled app template that can be used across the multiple product lines to dramatically reduced the amount of maintenance and bugs',
                  'Train interns and other employees with pair programming and code reviews'
                  // TODO: make this in projects
                  // 'Promote extra curricular coding activities like running a team "Advent Of Code" scoreboard'
                ]}
              />
            </Experience>
            <Experience>
              <Company
                name="Self Incorporated Consultant"
                location="Canada, USA (On-Site and Remote)"
              />
              <Position
                title="Full Stack, Mobile Developer and Architect"
                time="August 2011 – June 2017"
                duties={[
                  'Full-time contracting. Initial requirements meetings through to final product, including maintinence and upgrades',
                  'Built Mobile Apps, Websites and Hardware projects involving GPS, Bluetooth and VR',
                  // 'Long term maintenance, upgrades or new features to existing products',
                  'Perform interviews for hiring and develop strategies to grow teams over time',
                  'Clients included IBM, NYPD, Syfy/Space Channel, NBC, Hatch, many small startups, nonprofits in Toronto'
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
                  'Computer Science with minor in Mathematics. Thesis involving concurrent, multi-core web crawling',
                  '16 Month Internship in Web Application Development at IBM'
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
            list={['info@mackbrowne.com', 'linkedin.com/in/mackbrowne']}
          />
          <SideList
            title="Portfolio"
            list={['syrup.life', 'github.com/mackbrowne', 'mackbrowne.com']}
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
              'OAuth',
              'Unity'
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
    </>
  );
}
