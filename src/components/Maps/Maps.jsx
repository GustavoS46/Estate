import React from 'react';

const Maps = () => {
  return (
    <div className="relative w-full max-w-[1024px] mx-auto mt-10 mb-10 p-6">
      {/* Título e descrição do mapa */}
      <h1 className="text-2xl lg:text-5xl sm:text-4xl font-[Archivo] tracking-tighter font-medium text-center">
        Onde
        <span className="underline underline-offset-4 decoration-1 font-[Archivo] overflow-hidden text-blue-600 font-medium mx-2">
          Estamos
        </span>
      </h1>

      {/* Lista de informações */}
      <ul className="text-center text-gray-500 mb-6 mt-4 max-w-4xl mx-auto font-[Outfit] list-none space-y-4">
        <li>Av. Areião, s/n - St. Pedro Ludovico, Goiânia - GO, 74820-370</li>
        <li>Horário de funcionamento: 08:00 - 18:00</li>
        <li>Segunda a Sexta</li>
      </ul>

      {/* Mapa do Google - Responsivo */}
      <div className="relative w-full mt-8 mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30571.710610277918!2d-49.26536171308072!3d-16.70369323138589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11b5cf5fb81%3A0xca27b2808399e5f0!2sParque%20Arei%C3%A3o%20-%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1731504188879!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
