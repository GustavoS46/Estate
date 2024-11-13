import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex gap-7 text-white font-[Outfit] tracking-tight'>
          <a href="#Home" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>Sobre</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projetos</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testemunhos</a>
          <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contato</a>
        </ul>
        <button className='hidden md:block border border-white bg-white hover:bg-transparent hover:text-white px-8 py-2 rounded-full font-[Outfit] tracking-tighter'>
          Inscrever-se
        </button>

        {/* Ícone de Menu */}
        <img 
          src={assets.menu_icon} 
          className='md:hidden w-7 cursor-pointer' 
          alt="mobile-menu" 
          onClick={() => setShowMobileMenu(true)} 
        />

        {/* Menu Móvel */}
        <div 
          className={`md:hidden ${showMobileMenu ? 'fixed top-0 left-0 w-full h-full bg-white z-20' : 'hidden'} transition-all duration-300 ease-in-out`}
        >
          <div 
            className='flex justify-end p-6 cursor-pointer' 
            onClick={() => setShowMobileMenu(false)} 
          >
            <img src={assets.cross_icon} className='w-6' alt="close-menu" />
          </div>
          <ul className='flex flex-col items-center gap-4 mt-20 px-5 text-lg font-[Outfit]'>
            <a href="#Home" className='px-4 py-2 rounded-full inline-block' onClick={closeMobileMenu}>Home</a>
            <a href="#About" className='px-4 py-2 rounded-full inline-block' onClick={closeMobileMenu}>Sobre</a>
            <a href="#Projects" className='px-4 py-2 rounded-full inline-block' onClick={closeMobileMenu}>Projetos</a>
            <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block' onClick={closeMobileMenu}>Testemunhos</a>
            <a href="#Contact" className='px-4 py-2 rounded-full inline-block' onClick={closeMobileMenu}>Contato</a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;