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
  Position,
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
              <Company name="Shopify" location="Amsterdam" />
              <Position
                title="Senior Engineer - Retail Expansion"
                time="June 2022 - Present"
                duties={[
                  'Expand the Shopify POS system to more regions and tax jurisdictions',
                  'Build solutions to improve Shopify retail experience all over the world',
                  'Mobile application development with React Native',
                  'Web Development With ReactJS',
                  'Backend Development with Ruby on Rails',
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Workiva" location="Amsterdam" />
              <Position
                title="Senior Engineer - Global Solutions"
                time="October 2021 - June 2022"
                duties={[
                  "Part of a small, fast-moving, customer-focused development team focused on implementing high-priority new features for the company's largest customers",
                  'Work closely with Customers to discover new solutions and features that can benefit all users',
                  'Influence development culture in positive ways and bring best practices from past experiences into Workiva',
                  'Gather feedback from customers to further improve services for global customers',
                  'Design, develop, test and deliver those solutions in a span of days/weeks',
                  'Grow the Europe engineering team. Resume screenings and interviews',
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Nationale Nederlanden" location="Amsterdam" />
              <Position
                title="Senior Engineer and Team Lead - Architecture and Innovation"
                time="July 2020 - September 2021"
                duties={[
                  'Enable, Improve and Educate development teams with new techniques and practices to establish a mature development culture and community across the company.',
                  'Work across multiple product teams to improve quality, performance, testing and deployment by building optimised, re-usable solutions.',
                  'Conduct interviews and other hiring practices for different teams. Focused on improving the overall development skills and abilities across the company.',
                  'Team Lead in building a design system and shared component library in React Native.',
                  'Team Lead on mobile development team building new features for an already-established app.',
                  'Design and Implement a re-usable, standardised CI/CD pipeline for testing and deployment.',
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Elsevier" location="Amsterdam" />
              <Position
                title="Senior Engineer - Scopus Core Team"
                time="Feb 2020 - June 2020"
                duties={[
                  'Planned, Designed and Implemented a company-specific command line interface to improve development processes and save time for developers across the team.',
                  'Primary Focus is involvement in major web stack migration.',
                  "Mentoring and 1 on 1's for junior / intermediate developers.",
                  'Performing interviews to grow the team.',
                ]}
              />
            </Experience>
            <Experience>
              <Company name="Prodigy Education" location="Toronto" />
              <Position
                title="Senior Engineer and Team Lead - Game"
                time="Mar 2019 – Sep 2019"
                duties={[
                  'Drastically improve the mobile app development and quality assurance experience by developing tools that improve the efficiency of internal teams.',
                  'Improve user experience by building mobile-specific features as well as improving any mobile usability issues and bugs.',
                  'Design and Implement and Configure automation pipelines for QA, builds and deployment.',
                  'Facilitate cross-team collaboration to improve the mobile experience in all parts of the app.',
                  'Code mentor for several junior developers in the company.',
                  'Full Stack Development using React, Node and GraphQL ',
                  'Mobile Development with React Native',
                  'Develop new features and improve the Admin/Principal user experience.',
                  'Develop several in-house tools to improve productivity and integrate Github and CI communication through slack.',
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
                  'Train interns and other employees with pair programming and code reviews',
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
                  'Clients included IBM, NYPD, Syfy/Space Channel, NBC, Hatch, many small startups, nonprofits in Toronto',
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
                  '16 Month Internship in Web Application Development at IBM',
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
              'Git Flow and Monorepos',
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
              'Angular',
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
              'Unity',
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
              'Axe',
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
              'C++',
            ]}
          />
        </Col>
      </Row>
    </>
  );
}
