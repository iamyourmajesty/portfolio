import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact,  FaGitAlt, FaGithub, FaNpm, FaFigma} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel,SiTailwindcss} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Tailwind: <SiTailwindcss/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox text-4xl sm:text-5xl md:text-7xl lg:text-9xl  shadow-md  m-5 '>
      {icon[skill]}
    </div>
  )
}

export default Skills