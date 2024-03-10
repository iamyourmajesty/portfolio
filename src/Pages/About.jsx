import React,{useState} from 'react';
import Skills from '../Components/Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/Coder.json'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const About = () => {
  
  return (
    <>
      <div className='AboutPage md:flex'>
        <div className=' m-10 mx-20 w-3/4'>
          <h1 className='AboutTextHeading text-2xl' >Get to <b className='text-[blue]'>know</b> me!</h1>
          <p>
            Hi, my name is <b className='text-[blue]'>Prince Pandey</b> and I am from Muzaffarpur, India.
            I'm a <b className='text-[blue]'>MERN stack web developer</b> and a final year college student pursuing <b className='text-[blue]'>B.Tech</b>. <br/><br/>
            I have done an internship as a <b className='text-[blue]'>Frontend developer Intern</b> at Chakraborty and Lahkar Innovation Pvt. Ltd. which is a fintech startup.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b className='text-[blue]'>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
        <Tilt className=' relative -z-20 h-5/6 flex justify-center'>
            <Lottie className=' w-1/4 scale-x-150 scale-y-150' 
            animationData={Coder} 
            loop={true} 
          />
        </Tilt>
      </div>
       

      </div>
      
      <h1 className=' text-3xl text-center text-[blue] font-bold'>Professional Skillset</h1>
      <div className=' flex justify-center items-center'>
      <div className='skills flex flex-wrap w-10/12 sm:w-9/12 justify-center items-center'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Tailwind'/>
        
      </div>
      </div>
    </>
  )
}

export default About