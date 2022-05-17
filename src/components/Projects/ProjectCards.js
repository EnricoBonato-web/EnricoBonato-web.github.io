import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectCards(props) {
  let img = props.imgPath;
  img = img.toLocaleLowerCase();
  if (img === 'html') img = 'html5'.toLocaleUpperCase();
  if (img === 'css') img = 'css3'.toLocaleUpperCase();
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={(
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/' +
          img +
          '/' +
          img +
          '-original.svg'
        ).toLocaleLowerCase()}
        alt={img}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? 'View Blog' : 'View Project'}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
