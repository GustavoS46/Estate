import React from 'react'
import { testimonialsData } from '../../assets/assets'
import { assets } from '../../assets/assets';

const Testimonials = () => {
  return (
    <div 
      id='Testimonials'
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'>
      <h1 className='text-2xl lg:text-5xl sm:text-4xl font-[Archivo] tracking-tighter font-medium text-center'>
        Depoimentos de 
          <span className='underline underline-offset-4 decoration-1 font-[Archivo] overflow-hidden text-blue-600 font-medium mx-2'>
            Clientes
          </span>
      </h1>
      <p className='text-center text-gray-500 mb-8 mt-5 max-w-80 mx-auto font-[Outfit]'>Histórias de clientes que encontraram o lar dos seus sonhos conosco.</p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) =>(
          <div 
            key={index}
            className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'
          >
            <img 
              src={testimonial.image} 
              alt={testimonial.alt}
              className='w-20 h-20 rounded-full mx-auto mb-4'
             />
             <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
             <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>

             <div className='flex justify-center gap-1 text-red-500 mb-4'>
              {Array.from({length: testimonial.rating}, (item, index)=>(
                <img key={index} src={assets.star_icon} alt="" />
              ))}
             </div>
             <p className='text-gray-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials