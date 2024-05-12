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
      website : "https://expensive-capris-ant.cyclic.app/",
      title : "Result Publishing Website",
    },
    {
      id: 2,
      breaf : "A website that is used to publish different types of News related to geo politics going around globe.",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1710151771/theindianthinktank_qa4h9q.png",
      website : "https://theindianthinktank.onrender.com/",
      title : "The Indian Think Tank"
    },
    {
      id: 2,
      breaf : "A platform to watch Youtube Movies category wise , movies are in sorted fashion.Basically they are sorted based on view counts.",
      img : "https://res.cloudinary.com/du1n94yvw/image/upload/v1712850487/ytmovies_emhldq.png",
      website : "https://youtubemovies.vercel.app/",
      title : "YouTube Movies"
    },
   
    
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
      <Link  className=' font-bold bg-[#24232369] hover:bg-[#000000a4] text-[white] rounded-md px-5 py-1 m-2'> <BsGithub/> Github</Link>
      </div>
     </motion.div>
     ))}
    </div>

    </div>
  )
}

export default Project