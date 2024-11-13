import React from 'react'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div
      id='About' 
      className='flex flex-col items-center justify-center container mx-auto p-14 pt-20 md:px-20 lg:px-32 w-full overflow-hidden'>
      
      <h1 className='text-2xl lg:text-5xl sm:text-4xl font-[Archivo] tracking-tighter font-medium'>
        Sobre <span className='underline underline-offset-4 decoration-1 font-[Archivo] overflow-hidden text-blue-600 font-medium mx-1'>Estate</span>
      </h1>

      <p className='text-gray-500 max-w-80 text-center mb-8 mt-5 font-[Outfit]'>
        Apaixonado por construção, dedicado à construir a cada dos seus sonhos
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        {/* Imagem */}
        <img 
          src={assets.brand_img} 
          alt="" 
          className='w-full sm:w-1/2 max-w-lg rounded-b' 
        />

        {/* Informações sobre a empresa */}
        <div className='flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600'>
          
          {/* Estatísticas */}
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div className=''>
              <p className='text-4xl font-medium text-gray-800 tracking-tighter'>10 +</p>
              <p className='text-gray-500 font-[Outfit] tracking-tight'>Anos de Experiência</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800 tracking-tighter'>100 +</p>
              <p className='text-gray-500 font-[Outfit] tracking-tight'>Obras Construídas</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800 tracking-tighter'>200 +</p>
              <p className='text-gray-500 font-[Outfit] tracking-tight'>Projetos Criados</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800 tracking-tighter'>250 +</p>
              <p className='text-gray-500 font-[Outfit] tracking-tight'>Projetos em Andamento</p>
            </div>
          </div>

          {/* Texto sobre a empresa */}
          <div className='pt-6 font-[Outfit] tracking-tight'>
            <p className='my-10 max-w-lg'>
              A Estate é uma construtora com mais de 10 anos de experiência, especializada na construção de casas em condomínios. Ao longo de sua trajetória, a empresa se destacou pela entrega de projetos personalizados que aliam qualidade, inovação e sustentabilidade. Com um portfólio de mais de 100 obras concluídas e um número crescente de projetos em andamento, a Estate é reconhecida pela confiança de seus clientes e pela excelência na execução de empreendimentos que atendem às necessidades específicas de cada morador, sempre com foco na segurança, conforto e pontualidade.
            </p>

            {/* Botão Saiba Mais */}
            <a href="#Projests">
              <button className='text-lg font-[Poppins] px-6 py-2 border-2 border-blue-600 rounded-full bg-blue-600 hover:bg-white text-white hover:text-blue-600 transition-all'>
                Saiba Mais
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
