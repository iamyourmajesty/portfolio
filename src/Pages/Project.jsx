import React,{useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { IoMdClose } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {Link} from 'react-router-dom'

const Project = () => {

  const items = [
    {
      id: 1,
      breaf : "A School Result publishing website in which admin can do all curd operation related to students and there marks that is going to be published in marksheet",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1710151922/schoolwebsite_wr3ekf.png",
      website : "https://my-school-2byprince.onrender.com/",
      title : "Result Publishing Website",
      github : "https://github.com/iamyourmajesty/my-school-2byprince",
    },
    {
      id: 2,
      breaf : "A website that is used to publish different types of News related to geo politics going around globe.",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1710151771/theindianthinktank_qa4h9q.png",
      website : "https://theindianthinktank.onrender.com/",
      title : "The Indian Think Tank",
      github : "https://github.com/iamyourmajesty/React-News-app",
    },
    {
      id: 2,
      breaf : "A platform to watch Youtube Movies category wise , movies are in sorted fashion.Basically they are sorted based on view counts.",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1712850487/ytmovies_emhldq.png",
      website : "https://youtubemovies.vercel.app/",
      title : "YouTube Movies",
      github : "https://github.com/iamyourmajesty/youtubemovies"
    },
   
    
  ];

  const javascriptProjects = [
    {
      id : 1,
      breaf : "Quote Generator generates random quotes by the help of API.",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1717076704/quotegenrator_ypcwkx.png",
      website : "https://bucolic-licorice-c0cfdf.netlify.app/",
      title : "Quote Generator",
      github : "https://github.com/iamyourmajesty/20-Days-JavaScript-challenge/tree/master/Day%201%20-%20Quote%20Generator"
    },
    {
      id: 2,
      breaf : "A infinite scroll ,in which you can see infinite images while scrolling",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1717077027/infinitescroll_vlrxjn.png",
      website : "https://cosmic-sprinkles-f4c805.netlify.app/",
      title : "Infinite Scroll",
      github : "https://github.com/iamyourmajesty/20-Days-JavaScript-challenge/tree/master/Day%202%20-%20Infinite%20Scroll"
    },
    {
      id : 3,
      breaf : "this is a simple project which allows you to watch videos in a floating window (always on top of other windows) so you can keep an eye on what you’re watching while interacting with other sites, or applications.",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1717076704/quotegenrator_ypcwkx.png",
      website : "https://silver-melomakarona-811278.netlify.app/",
      title : "Picture In Picture",
      github : "https://github.com/iamyourmajesty/20-Days-JavaScript-challenge/tree/master/Day%203%20-%20Picture%20In%20Picture"
    },
    {
      id : 4,
      breaf : "A random joke teller using API Call",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1717077670/joketeller_cnydst.png",
      website : "https://super-frangipane-b3375f.netlify.app/",
      title : "Joke Teller",
      github : "https://github.com/iamyourmajesty/20-Days-JavaScript-challenge/tree/master/Day%204%20-%20Joke%20Teller"
    },
    {
      id : 5,
      breaf : "A basic website with dark and night mode feature",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1717077863/darkandlightmode_klwzgm.png",
      website :"https://illustrious-starburst-6d6a42.netlify.app/",
      title : "Dark and Light Mode",
      github : "https://github.com/iamyourmajesty/20-Days-JavaScript-challenge/tree/master/Day%205%20-Light_Dark_Mode"
    },
    {
      id : 6 ,
      breaf : 'A website in which various animation are used using "Animate on scroll library"',
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1717078237/animatedtheme_wnwnyw.png",
      website : "https://regal-profiterole-51875a.netlify.app/",
      title : "Animated Template",
      github : "https://github.com/iamyourmajesty/20-Days-JavaScript-challenge/tree/master/Day%206%20-%20Animated%20Template",
    },
    {
      id  : 7,
      break : "A Animated Navigation Website using Javascript",
      img :"https://res.cloudinary.com/du1n94yvw/image/upload/v1717078465/animatednavigation_mk8p96.png",
      website : "https://idyllic-dango-f4ff88.netlify.app/",
      title : "Animated Navigation",
      github : "https://github.com/iamyourmajesty/20-Days-JavaScript-challenge/tree/master/Day%207%20-%20Navigation%20Nation"
    }
  ];
  return (
    <div>
    
    <h1 className=' text-center text-2xl md:text-4xl lg:text-5xl font-bold text-[blue] my-5'>My Projects</h1>

    <div className=' flex flex-wrap gap-8  justify-center items-center w-4/5 mx-auto my-5 '>
    {items.map(item => (
      <motion.div className=' shadow-2xl p-5 shadow-[#a2a1a1] w-64 sm:w-96 h-96 relative' layoutId={item.id} >
      <motion.img className=' w-54 sm:w-80 m-auto relative -z-10' loading='lazy' src={item.img} alt="image" />
      <motion.h2 className=' font-bold'>{item.title}</motion.h2>
      <motion.div>{item.breaf}</motion.div> 
      <div className=' flex justify-center relative mt-2'>
      <Link to={item.website} className=' font-bold bg-[#24232369] hover:bg-[#000000a4] text-[white] rounded-md px-5 py-1 m-2'> <CgWebsite/> Website</Link>
      <Link to={item.github}  className=' font-bold bg-[#24232369] hover:bg-[#000000a4] text-[white] rounded-md px-5 py-1 m-2'> <BsGithub/> Github</Link>
      </div>
     </motion.div>
     ))}
    </div>

     <h2 className=' text-center font-extrabold text-2xl text-[blue]'> <span className=' hidden'>20</span> Javascript Projects</h2>
     <div className=' flex flex-wrap gap-8  justify-center items-center w-4/5 mx-auto my-5 '>
     {javascriptProjects.map(item => (
      <motion.div className=' shadow-2xl p-5 shadow-[#a2a1a1] w-64 sm:w-96 h-96 relative' layoutId={item.id} >
      <motion.img className=' w-54 sm:w-80 m-auto relative -z-10' loading='lazy' src={item.img} alt="image" />
      <motion.h2 className=' font-bold'>{item.title}</motion.h2>
      <motion.div>{item.breaf}</motion.div> 
      <div className=' flex justify-center relative mt-2'>
      <Link to={item.website} className=' font-bold bg-[#24232369] hover:bg-[#000000a4] text-[white] rounded-md px-5 py-1 m-2'> <CgWebsite/> Website</Link>
      <Link to={item.github} className=' font-bold bg-[#24232369] hover:bg-[#000000a4] text-[white] rounded-md px-5 py-1 m-2'> <BsGithub/> Github</Link>
      </div>
     </motion.div>
     ))}
     </div>

    </div>
  )
}

export default Project