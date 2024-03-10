import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect text-2xl lg:text-6xl  md:text-4xl">
      <Typewriter
        options={{
          strings: ['Software Developer', 'MERN Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Typed