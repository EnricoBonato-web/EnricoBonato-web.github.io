import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';
import { DiJavascript1 as javascript, DiReact as react, DiNodejs as nodejs } from 'react-icons/di';
import {
  SiNextdotjs as node,
  SiCss3 as css,
  SiTypescript as typescript,
  SiPhp as php,
  SiHtml5 as html,
  SiJava as java,
} from 'react-icons/si';

function ProjectCards(props) {
  const icons = {
    typescript,
    php,
    javascript,
    react,
    nodejs,
    node,
    css,
    html,
    java,
  };
  let img = props.imgPath.toLocaleLowerCase();
  const immagine = React.createElement(icons[img], {
    style: { height: '100px', margin: '10px' },
    className: 'card-img',
  });

  return (
    <Card className="project-card-view">
      {immagine}
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
