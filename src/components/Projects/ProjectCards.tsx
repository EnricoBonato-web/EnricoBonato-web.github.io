import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import style from "../../styles/projects.module.scss";
import {
  DiJavascript1 as JavascriptIcon,
  DiReact as ReactIcon,
  DiNodejs as NodejsIcon,
  DiJava as JavaIcon,
} from "react-icons/di";
import {
  SiNextdotjs as NextjsIcon,
  SiCss3 as CssIcon,
  SiTypescript as TypescriptIcon,
  SiPhp as PhpIcon,
  SiHtml5 as HtmlIcon,
  SiVuedotjs as VueIcon,
} from "react-icons/si";

type ProjectCardsProps = {
  title: string;
  description: string;
  link: string;
  imgPath: string;
  isBlog?: boolean;
};

function ProjectCards(props: ProjectCardsProps) {
  const icons: { [key: string]: React.ElementType } = {
    typescript: TypescriptIcon,
    php: PhpIcon,
    javascript: JavascriptIcon,
    react: ReactIcon,
    nodejs: NodejsIcon,
    node: NextjsIcon,
    css: CssIcon,
    html: HtmlIcon,
    java: JavaIcon,
    vue: VueIcon,
  };

  let img = props.imgPath.toLowerCase();
  const IconComponent = icons.hasOwnProperty(img)
    ? icons[img]
    : icons["javascript"];

  const immagine = React.createElement(IconComponent, {
    style: {},
    className: style.icon,
  });

  return (
    <div className={style.project}>
      {immagine}
      <div className={style.project__title}>{props.title}</div>
      <div className={style.project__description}>{props.description}</div>
      <a
        className={style.project__link}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLinkExternal /> &nbsp;
        {props.isBlog ? "View Blog" : "View Project"}
      </a>
    </div>
  );
}

export default ProjectCards;
