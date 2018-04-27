// Framework
import React from 'react';

// Components
import {
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import {
  PageContainer,
  PageRow,
  ImageCol,
  DescriptionCol,
  PlaceImage,
  PeopleIcon,
  SizeIcon
} from './Home.style';

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
const Home = ({ places, noMorePlaces, nextPage }) => (
  <PageContainer>
    <PageRow>
      <Col>
        <ListGroup>
          {places.map(
            ({
              id,
              name,
              address,
              hourly_price,
              daily_price,
              square_footage,
              capacity,
              views_count,
              primary_photo_css_url_small
            }) => (
              <ListGroupItem key={id}>
                <Row>
                  <ImageCol>
                    <PlaceImage
                      src={primary_photo_css_url_small}
                      alt={`${name} - ${address}`}
                    />
                    {views_count} views.
                  </ImageCol>
                  <DescriptionCol>
                    <ListGroupItemHeading>{name}</ListGroupItemHeading>
                    <ListGroupItemText>{address}</ListGroupItemText>
                    <Row>
                      <Col>
                        <ListGroupItemText>
                          <SizeIcon /> {square_footage}sqft.
                        </ListGroupItemText>
                        <ListGroupItemText>
                          <PeopleIcon /> {capacity} humans
                        </ListGroupItemText>
                      </Col>
                      <Col>
                        {hourly_price && (
                          <ListGroupItemText>
                            ${hourly_price}/hour
                          </ListGroupItemText>
                        )}
                        {daily_price && (
                          <ListGroupItemText>
                            ${daily_price}/day
                          </ListGroupItemText>
                        )}
                      </Col>
                    </Row>
                  </DescriptionCol>
                </Row>
              </ListGroupItem>
            )
          )}
        </ListGroup>
      </Col>
    </PageRow>
    <PageRow>
      <Col>
        {!noMorePlaces ? (
          <Button onClick={() => nextPage()}>More</Button>
        ) : (
          <p>No More Places!</p>
        )}
      </Col>
    </PageRow>
  </PageContainer>
);

export default Home;
