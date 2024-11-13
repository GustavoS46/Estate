import React from 'react';
import Navbar from '../Navbar/Navbar';
import { assets } from '../../assets/assets'; 

const Header = () => {
  return (
    <div 
      id='Home'
      className='h-[60vh] w-full mb-4 bg-cover bg-center flex items-center overflow-hidden relative' 
      style={{backgroundImage: `url(${assets.header_img})`}} 
    >
      {/* Camada de Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Conteúdo do Header */}
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative z-10'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-[Open Sans] tracking-tight pt-20'>
          Encontre a casa dos seus sonhos
        </h2>
        <div className='pt-6 font-[Poppins] tracking-tight'>
          <a href="#Projects" className="text-lg px-6 py-2 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all">Projetos</a>
          <a href="#Contact" className="ml-4 text-lg px-6 py-2 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all">Contate-nos</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
