import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) { // Check if email is not empty
      alert(`Subscribed with email: ${email}`);
      
      // Clear the email input field
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className='pt-10 pb-2 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/3 md:mb-0'>
          <img src={assets.logo_dark} alt="Logo" />
          <p className='text-gray-400 mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente provident neque voluptatum harum illumincidunt rem accusantium fugiat? Possimus.
          </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4 md:mt-0 mt-5'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400 mt-[-10px] md:mt-0'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="#" className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our Newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80 mt-[-10px] md:mt-0'>
            The Latest news, articles and resources will be sent to your inbox weekly.
          </p>
          <div className='flex gap-2'>
            <input
              className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className='py-2 px-4 rounded bg-blue-500 text-white'
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2024 Just_michael. All rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
