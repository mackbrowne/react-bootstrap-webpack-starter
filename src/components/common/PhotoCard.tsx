import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Card, Col } from 'react-bootstrap';

const CardCol = styled(Col).attrs({
  className: 'p-1',
  md: 4,
  xl: 2
})``;

const CardImg = styled(Card.Img).attrs({ variant: 'top' })`
  width: 100%;
  object-fit: cover;

  ${up('md')} {
    height: 25rem;
  }
`;

const CardTitle = styled(Card.Title)`
  text-align: right;
  text-shadow: 0.075em 0.08em 0.1em rgba(0, 0, 0, 1);
`;

export type GalleryPhoto = {
  farm: string,
  server: string,
  id: string,
  secret: string,
  title: string
};

export default ({
  photo: { farm, server, id, secret, title }
}: {
  photo: GalleryPhoto
}) => (
  <CardCol>
    <Card className="text-white">
      <CardImg
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
        className="photo"
      />
      <Card.ImgOverlay>
        <CardTitle>{title.length ? title : 'Untitled'}</CardTitle>
      </Card.ImgOverlay>
    </Card>
  </CardCol>
);
