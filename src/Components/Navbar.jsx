import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";
import { motion} from "framer-motion"
import { Squash as Hamburger } from 'hamburger-react'

const NavDekstop = () => {
  return (
    <ul className=' my-4 flex mr-5 lg:mr-32 text-[#c2c1c2]'>
    <li className=' mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/' className=' flex'><AiOutlineHome className=' mr-2 mt-1'/>Home</NavLink></li>
    <li className=' mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/about' className=' flex'><BsPerson className=' mr-2 mt-1'/>About</NavLink></li>
    <li className=' mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/project' className=' flex'><BsCodeSlash className=' mr-2 mt-1'/>Project</NavLink></li>
    <li className=' mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/resume' className=' flex'><CgFileDocument className=' mr-2 mt-1'/>Resume</NavLink></li>
    
    </ul>
  )
}

const NavMobile = () => {
  const [showMenu,setShowMenu] = useState(false);

  return (
    <div>
    <span className=' relative z-40 top-4 right-4'><Hamburger toggled={showMenu} toggle={setShowMenu} /></span>
    {showMenu && 
      
      <motion.ul animate={{ x : -window.innerWidth/3}}   className=' top-0 z-20  h-screen w-1/2 fixed flex flex-col  bg-[#431f47] duration-500 ease-linear'>
      <li className=' my-8 mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/' className=' flex'><AiOutlineHome className=' mr-2 mt-1'/>Home</NavLink></li>
      <li className=' my-8 mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/about' className=' flex'><BsPerson className=' mr-2 mt-1'/>About</NavLink></li>
      <li className=' my-8 mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/project' className=' flex'><BsCodeSlash className=' mr-2 mt-1'/>Project</NavLink></li>
      <li className=' my-8 mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/resume' className=' flex'><CgFileDocument className=' mr-2 mt-1'/>Resume</NavLink></li>
      </motion.ul>
      
    }
    {
       !showMenu && (
       <div>
       {
        // <button onClick={() => setShowMenu(true)} className=' text-3xl mr-4 my-4'><FiMenu/></button>
       }
      
      <motion.ul animate={{ x : 100}}   className=' z-20 h-screen w-1/2 fixed top-0 flex flex-col  bg-[#431f47] duration-500 ease-linear'>
      <li className=' my-8 mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/' className=' flex'><AiOutlineHome className=' mr-2 mt-1'/>Home</NavLink></li>
      <li className=' my-8 mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/about' className=' flex'><BsPerson className=' mr-2 mt-1'/>About</NavLink></li>
      <li className=' my-8 mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/project' className=' flex'><BsCodeSlash className=' mr-2 mt-1'/>Project</NavLink></li>
      <li className=' my-8 mx-4 text-2xl hover:underline hover:text-white'><NavLink to='/resume' className=' flex'><CgFileDocument className=' mr-2 mt-1'/>Resume</NavLink></li>
      </motion.ul>
      
       </div>
     )
  }
    </div>
  )
}


const Navbar = () => {
  const [DesktopView, setDesktopView] = useState(window.innerWidth >= 960 ? true : false);
  const [navbarblur, setnavbarblur]=useState(false);

function scrollHandler() {
    if (window.scrollY >= 20) {
        setnavbarblur(true);
    } 
    else {
        setnavbarblur(false);
    }
}
  
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 960 ? setDesktopView(true) : setDesktopView(false)
    }
    window.addEventListener("resize",handleResize);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener('resize',handleResize)
      window.removeEventListener("scroll", scrollHandler);
    }
    });

  return (
    <nav className={navbarblur ? 'blurr overflow-hidden w-screen flex justify-between bg-bgColor text-white' : 'overflow-hidden w-screen flex justify-between bg-bgColor text-white'}>
    <div className=' my-4 ml-5  lg:ml-32 text-3xl font-extrabold'><span>Port</span><span className='text-yellow'>Folio</span></div>
    {DesktopView && (
      <NavDekstop/>
    )}
    {!DesktopView && (
      <NavMobile/>
    )}
    </nav>
  )
}



export default Navbar