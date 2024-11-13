import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0D111A,#141B28_100%)] overflow-x-clip pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            {/* Primeira coluna */}
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="Logo" />
                <p className='text-start text-white/80 mb-6 mt-4 max-w-80 mx-auto font-[Outfit] tracking-tighter'>
                  A Estate é uma construtora com mais de 10 anos de experiência, especializada na construção de casas em condomínios. Com mais de 100 obras concluídas, a empresa se destaca pela entrega de projetos personalizados que combinam qualidade, inovação e sustentabilidade. Reconhecida pela confiança de seus clientes, a Estate é comprometida com segurança, conforto e pontualidade na execução de seus empreendimentos.
                </p>
            </div>

            {/* Segunda coluna */}
            <div className='w-full md:w-1/5 mb-8 md:mb-0 font-[Outfit]'>
                <h3 className='text-white/80 text-xl font-bold mb-4 tracking-tight'>Empresa</h3>
                <ul className='flex flex-col gap-4 text-white font-[Outfit] tracking-tighter'>
                    <li><a href="#Home" className='cursor-pointer hover:text-gray-400 mb-3 md:mb-0'>Home</a></li>
                    <li><a href="#About" className='cursor-pointer hover:text-gray-400 mb-3 md:mb-0'>Sobre</a></li>
                    <li><a href="#Projects" className='cursor-pointer hover:text-gray-400 mb-3 md:mb-0'>Projetos</a></li>
                    <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-400 mb-3 md:mb-0'>Testemunhos</a></li>
                    <li><a href="#Contact" className='cursor-pointer hover:text-gray-400 mb-3 md:mb-0'>Contato</a></li>
                </ul>
            </div>

            {/* Terceira coluna */}
            <div className='w-full md:w-1/3 mb-8 md:mb-0 font-[Outfit]'>
                <h3 className='text-white/80 text-xl font-bold mb-4 tracking-tight'>Boletim informativo</h3>
                <p className='text-start text-white/80 mb-6 mt-4 max-w-80 font-[Outfit] tracking-tighter'>As últimas notícias e novidades enviados para sua caixa de entrada semanalmente.</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='Digite seu E-mail' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                    <button 
                        type="submit"
                        className='text-lg font-[Poppins] px-4 py-2 border border-blue-600 rounded bg-blue-600 hover:bg-white text-white hover:text-blue-600 transition-all'>Inscrever</button>
                </div>
            </div>
        </div>

        {/* Rodapé */}
        <div className='flex flex-col md:flex-row md:justify-center mt-6 font-[Outfit] text-white/80 mb-8 tracking-tight'>
            <p className='mb-0'>Copyright 2024 ©<a href="https://www.linkedin.com/in/gustavo-desenvolvedor/" className='mx-2 hover:text-gray-400'>Gustavo Silva</a>. Todos os direitos reservados.</p>
        </div>
    </div>
  )
}

export default Footer
