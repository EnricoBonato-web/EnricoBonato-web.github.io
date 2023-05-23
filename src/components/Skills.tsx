import React, { FC } from "react";
import style from "../styles/skills.module.scss";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => (
  <div>
    <h2 className={style.title}> Toolstack</h2>
    <Toolstack />
    <h2 className={style.title}> Techstack</h2>
    <Techstack />
  </div>
);

export default Skills;
