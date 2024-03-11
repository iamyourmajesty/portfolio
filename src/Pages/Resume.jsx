import React, { useEffect, useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Images/resumev1.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import {Link,NavLink} from 'react-router-dom'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Footer from '../Components/Footer';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const[wid, setwid]=useState(window.innerWidth);

  function handleClick()
  {
    console.log('button clicked')
  }

  useEffect(() => {
    const handleResize = () => {
      setwid(window.innerWidth);
    }
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    console.log('sdfsd')
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    }
  })


  return (
   <>
   <div className=' relative -z-10'>
     
   <div className=' flex justify-center items-center'>
   <Document file={pdf} className="resumeview shadow-2xl mt-10">
       <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
   </Document>
   </div>
   
   
 </div>
 <Link to={pdf} target='_blank' download="Prince's Resume" className=' flex items-center justify-center mt-5 ' >
   <button className=' bg-bgColor text-white px-4 rounded-md flex py-2  cursor-pointer hover:bg-[#595858] ' type='button'>
   <BsDownload className=' mt-1 mr-2'/> Download CV
   </button>
   </Link>
   
   </>

  )
}

export default Resume




