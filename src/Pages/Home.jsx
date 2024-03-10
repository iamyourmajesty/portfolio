import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "../Components/Typed";
import Tilt from 'react-parallax-tilt';
import Avatar from '../Images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";
import Footer from '../Components/Footer';
import ContactMe from '../Components/ContactMe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div>
    <div className=' flex flex-col lg:flex-row mt-10 lg:mt-0 justify-around items-center '>
    

        <div className='HomeText'>
          <h1 className=' text-2xl md:text-4xl lg:text-6xl '>Hi There!</h1>
          <h1 className=' text-2xl md:text-4xl lg:text-6xl'>I'M <b className=' text-[blue]'>Prince Pandey</b></h1>
          <Typed/>   
        </div>

        <Lottie 
        className=" -z-10 relative bottom-12" 
        animationData={SpaceBoy} 
        loop={true} 
      />
        
        
      </div>

      <div className=' flex flex-col lg:flex-row items-center justify-around'>
        <div className='AboutText m-8 lg:m-0 lg:w-1/2'>
          <h1 className='AboutTextHeading'>Brief <b className=' text-[blue]'>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b className=' text-[blue]'>C++</b> and know a bit of <b>Python</b> and am working on a few 
            projects in the <b className=' text-[blue]'>MERN</b> stack.<br />
            I plan to learn <b className=' text-[blue]'>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br />
            Also, I love <b className=' text-[blue]'>coffee</b> <br/> <br/> <span>Buy Me One <CiCoffeeCup className=' text-[red] mx-2 mb-1 inline-block' style={{scale:"2.5", rotate:"15deg"}} /> </span>
          </p>
        </div>
        
        <Tilt className=' relative -z-10'>
        <img className='Avatar h-80' src={Avatar} alt="" />
        </Tilt>
      </div>
      <ContactMe/>
      <Footer/>

      <ToastContainer/>
    </div>
  )
}

export default Home