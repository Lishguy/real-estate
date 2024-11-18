import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className={`fixed h-16 top-0 left-0 w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}`}>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-8 lg:px-32'>
        <img src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex md:gap-6 gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Project" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
         <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
       
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="Menu" />
      </div>
      {/* ------ Mobile Menu ------  */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-gray-100 transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="Close" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 inline-block'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 inline-block'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Project" className='px-4 py-2 inline-block'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
