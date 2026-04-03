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
import {
  summary,
  experience,
  education,
  contact,
  portfolio,
  skills,
  frameworks,
  services,
  tools,
  languages,
} from './resumeData';

export default function Resume() {
  return (
    <>
      <Row>
        <Col>
          <Summary>{summary}</Summary>
        </Col>
      </Row>
      <Row>
        <Col>
          <SubTitle>Experience</SubTitle>
          <ExperienceList>
            {experience.map((job) => (
              <Experience key={job.company}>
                <Company name={job.company} location={job.location} />
                {job.positions.map((pos) => (
                  <Position
                    key={pos.title}
                    title={pos.title}
                    time={pos.time}
                    duties={pos.duties}
                  />
                ))}
              </Experience>
            ))}
          </ExperienceList>

          <SubTitle>Education</SubTitle>
          <ExperienceList>
            {education.map((edu) => (
              <Experience key={edu.company}>
                <Company name={edu.company} location={edu.location} />
                {edu.positions.map((pos) => (
                  <Position
                    key={pos.title}
                    title={pos.title}
                    time={pos.time}
                    duties={pos.duties}
                  />
                ))}
              </Experience>
            ))}
          </ExperienceList>
        </Col>
        <Col md={3}>
          <SideList title="Contact" list={contact} />
          <SideList title="Portfolio" list={portfolio} />
          <SideList title="Skills" list={skills} />
          <Pills title="Frameworks" list={frameworks} />
          <Pills title="Services" list={services} />
          <Pills title="Tools" list={tools} />
          <Pills title="Languages" list={languages} />
        </Col>
      </Row>
    </>
  );
}
