import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../../assets/assets';

const Projects = () => {
  const [currentIndex, SetCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length); // Corrigido para 'length'
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    SetCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    SetCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  return (
    <div 
      id="Projects"
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0D111A,#141B28_100%)]  overflow-x-clip min-h-screen-[50%] mx-auto min-w-[10%] py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 overflow-hidden"
    >
      <h1 className="text-2xl lg:text-5xl sm:text-4xl font-[Archivo] tracking-tighter font-medium text-center text-white">
        Projetos <span className="underline underline-offset-4 decoration-1 font-[Archivo] overflow-hidden text-blue-600 font-medium mx-1">Concluídos</span>
      </h1>
      <p className="text-center text-white/80 mb-8 mt-5 max-w-80 mx-auto font-[Outfit]">
        Espaços de criação, construção de legados-exploram nosso portfólio
      </p>
      <div className="flex justify-end items-center mb-8">
        <button onClick={prevProject} className="p-3 bg-gray-200 rounded-lg mr-2" aria-label="Voltar Projetos">
          <img src={assets.left_arrow} alt="Voltar" />
        </button>
        <button onClick={nextProject} className="p-3 bg-gray-200 rounded-lg mr-2" aria-label="Próximo Projeto">
          <img src={assets.right_arrow} alt="Próximo Projeto" />
        </button>
      </div>

      {/* slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`, 
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-[480px] sm:w-1/4">
              {/* Imagem */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-0 rounded-t" 
              />
              {/* Descrição abaixo da imagem */}
              <div className="w-full pb-2 mb-8">
                <div className="bg-white min-w-[180px] mx-auto shadow-md p-4 min-h-[50px] flex flex-col justify-between rounded-b">
                  {/* Título */}
                  <h2 className="text-md font-semibold text-gray-800 tracking-tighter">{project.title}</h2>
                  {/* Preço */}
                  <p className="text-gray-500 text-sm font-[Outfit] tracking-tight">
                    {project.price}
                    <span className='px-1'>|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
