import React, { FC } from "react";
import style from "../styles/about.module.scss";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className={style.container}>
    <h1> Something about me</h1>
    <p>
      I am a frontend developer with a passion for crafting intuitive user
      interfaces. Throughout my career, I have honed my skills in HTML, CSS, and
      JavaScript to create visually appealing and functional websites. My
      experience includes working on various projects, from online stores to
      enterprise resource planning systems. I am detail-oriented, driven, and
      always eager to learn and improve my craft.
    </p>
  </div>
);

export default About;
