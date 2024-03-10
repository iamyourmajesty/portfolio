import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=' flex flex-col gap-2 sm:gap-0 mt-8 mb-4 sm:mb-2 sm:flex-row lg:flex-row items-center justify-around sm:mt-5 text-[#787777] '>
      <h4>Developed by Prince Pandey</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className=' flex gap-4 '>
        <Link className=' hover:text-[black]' to="https://github.com/iamyourmajesty" target='_blank'><FaGithub/></Link>
        <Link className=' hover:text-[black]' to="https://www.linkedin.com/in/prince-pandey-/" target='_blank'><FaLinkedin/></Link>
        <Link className=' hover:text-[black]' to='mailTo:princepandey2784@gmail.com' target='_blank'><GrMail/></Link>
        <Link className=' hover:text-[black]' to="https://leetcode.com/princepandey2784/" target="_blank"><SiLeetcode/></Link>
      </div>
    </footer>
  )
}

export default Footer