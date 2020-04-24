import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Title, TitleLabel, Summary } from './Resume.style';

export default function Resume() {
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
      <Summary>
        I'm reaching out to apply for your Senior Frontend Engineer position in
        Amsterdam. I'm currently a Senior Full Stack Developer at Elsevier.
        Prior to that, I was the Lead Mobile Application Developer at Prodigy
        Education in Toronto and have over 10 years of full stack development
        experience throughout my career.
      </Summary>
      <br />
      <Summary>
        Prodigy and Elsevier are both companies with millions of active users,
        working with both companies gave me the opportunity to develop
        impactful, scalable solutions in collaboration with multiple
        stakeholders. I like to approach problems holistically and
        pragmatically, solving real issues and not just their symptoms. I have
        experience eliminating technical debt, owning large features, cleaning
        architectural inefficiencies, and team management.
      </Summary>
      <br />
      <Summary>
        I recently started using Miro on a personal project, where a friend is
        working on the product design right along side my Kanban board.
        Experiencing both interfaces together in one view has been really useful
        and a lot of fun to use. I am looking for a role where I can use my
        experience with multifunctional teams in addition to having an impact on
        development life-cycle. I want to work on a team where I can continue to
        grow as a professional while being passionate and proud of what I'm
        building.
      </Summary>
      <br />
      <Summary>
        After using the product and reading through the job expectations, I feel
        like Miro could be a really great fit. Thanks for taking the time to
        learn more about me, I truly hope I've given you enough reasons for more
        consideration. I hope to hear from you soon!
      </Summary>
      <br />
      <Summary></Summary>
      <br />
      <div className="float-right">
        <Summary>Best Regards,</Summary>
        <Summary>Mackenzie Browne</Summary>
      </div>
    </Container>
  );
}

/*

the next generation of collaboration technology.  
lots of plugins to make things seamless.  
1 place to bring everyone's work together

I like the customizations, wide range of plugins.

I think in the time of covid-19, the collaborative JIRA board is incredible.
Scrum master sharing their screen is no longer a requirement.

Never seen an app that combines creative / business / technical workflows
in such an intuitive way.  Based on your customers listed on your home pages,
it looks like some of the most innovative comapanies have realized the value in Miro as well.

i want to work somewhere that prioritizes user experience,
with software quality, I'm a bit of a perfectionist.  The product is never 'done'



*/

/*

description

You'll build features and scalable architecture for web applications and services within Miro. The main focus of your team will be on the Enterprise product area: user management, access limitations, content management.
You'll help product managers and designers conceptualize solutions, validate the hypothesis and run experiments. 
You'll have an opportunity to impact directly how our product looks and feels.
You'll be involved in lots of learning: research technological trends and new solutions, share your expertise and learn from the best engineers in the company and our advisors.
Change the future of collaboration with Miro by bringing the joy of understanding to millions of people wherever they are.
What we expect 
You have 5+ years of professional experience, though it's more important what you know and what you can do.
You are knowledgeable about JavaScript/TypeScript: you can deliver scalable, efficient and sustainable code, have an understanding of the component-based approach in web-interfaces design.
You have strong skills in HTML5, CSS3, and cross-platform composition.
You know REST architecture, design patterns, and SOLID principles.
You have experience in SPA development.
Prior experience with Canvas, React.js will be an advantage.
You have great communication skills.
You care about quality a lot and know how to ship high-quality code.
You love teamwork and dream to create meaningful things together.

*/
