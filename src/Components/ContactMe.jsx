import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zhr3rr7', 'template_p7ry3vd', form.current, {
        publicKey: 'BEy4sMnVXotQ9byUW',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast.success("Message Send Successfully")
          form.current.reset();
        },
        (error) => {
          // console.log('FAILED...', error.text);
          toast.error("Something Went Wrong")
        },
      );
  };

  return (
    <form   ref={form} onSubmit={sendEmail} className=' flex flex-col items-center my-10'>
      <label>Name</label>
      <input type="text" name="user_name" className=' border border-dashed w-2/3 sm:w-1/2 p-2 rounded-lg' placeholder='Alex Minch' required />
      <label>Email</label>
      <input type="email" name="user_email"  className=' border border-dashed w-2/3 sm:w-1/2 p-2 rounded-lg' placeholder='alex12@gmail.com' required />
      <label>Message</label>
      <textarea name="message"  className=' border border-dashed w-2/3 sm:w-1/2 p-2 rounded-lg' required placeholder=' hello prince i have a ....' />
      <input type="submit" value="Send" className=' cursor-pointer bg-[#222222] text-white px-4 py-1 m-3 rounded-md hover:bg-[#666161]' />
    </form>
  );
};

export default ContactMe