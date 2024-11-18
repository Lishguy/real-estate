import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto p-6 md:p-14 lg:p-20 w-full overflow-hidden'
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>
      <p className='text-gray-500 max-w-2xl text-center mb-8 md:mb-12'>
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 w-full'>
        <img src={assets.brand_img} className='w-full sm:w-1/2 md:max-w-md lg:max-w-lg rounded-lg' alt="Brand" />
        <div className='flex flex-col items-center md:items-start text-gray-600 mt-6 md:mt-0'>
          <div className='grid grid-cols-2 gap-6 sm:px-6 md:px-0 mt-6 md:gap-10 w-full'>
            <div className='text-center md:text-left'>
              <p className='lg:text-4xl md:text-xl sm:text-3xl text-2xl font-medium text-gray-800'>10+</p>
              <p className='md:text-xs lg:text-lg'>Years of Excellence</p>
            </div>
            <div className='text-center md:text-left'>
              <p className='lg:text-4xl md:text-xl sm:text-3xl text-2xl font-medium text-gray-800'>12+</p>
              <p className='md:text-xs lg:text-lg'>Projects Completed</p>
            </div>
            <div className='text-center md:text-left'>
              <p className='lg:text-4xl md:text-xl sm:text-3xl text-2xl font-medium text-gray-800'>20+</p>
              <p className='md:text-xs lg:text-lg'>Mn. sq. Ft. Delivered</p>
            </div>
            <div className='text-center md:text-left'>
              <p className='lg:text-4xl md:text-xl sm:text-3xl text-2xl font-medium text-gray-800'>25+</p>
              <p className='md:text-xs lg:text-lg'>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg text-center md:text-left sm:px-6 md:px-0 md:text-xs lg:text-sm text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae facilis assumenda aspernatur quo quam aperiam sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem.
          </p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded text-lg md:text-xs lg:text-lg mt-[-10px]'>
            <a href="https://www.realtor.com/">Learn More</a>  
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
