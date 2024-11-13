import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    setResult('Enviando...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'CHAVE_DE_ACESSO_AQUI');

    const response = await fetch('http://web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('');
      toast.success('Formulário enviado com sucesso');
      event.target.reset();
    } else {
      console.log('Erro', data);
      toast.error(data.message);
      setResult('');
    }
  };

  return (
    <div
      id="Contact"
      className="text-center p-6 py-12 lg:px-32 w-full bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0D111A,#141B28_100%)] overflow-x-clip overflow-hidden"
    >
      <h1 className="text-2xl lg:text-5xl sm:text-4xl font-[Archivo] tracking-tighter font-medium text-center text-white">
        Fale
        <span className="underline underline-offset-4 decoration-1 font-[Archivo] overflow-hidden text-blue-600 font-medium mx-2">
          Conosco
        </span>
      </h1>
      <p className="text-center text-white/80 mb-6 mt-4 max-w-80 mx-auto font-[Outfit]">
        Pronto para fazer um movimento? Vamos construir seu futuro juntos
      </p>

      {/* formulário */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-6 space-y-6">
        <div className="flex flex-wrap">
          {/* Nome */}
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <h2 className="text-md font-semibold text-white/80 tracking-tighter mt-2">Nome</h2>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Nome"
              placeholder="Digite seu Nome"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            <h2 className="text-md font-semibold text-white/80 tracking-tighter mt-2">E-mail</h2>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Email"
              placeholder="Digite seu E-mail"
              required
            />
          </div>
        </div>

        {/* Mensagem */}
        <div className="text-left md:pl-4">
          <h2 className="text-md font-semibold text-white/80 tracking-tighter mt-2">Mensagem</h2>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Mensagem"
            required
          ></textarea>
        </div>

        {/* Botão de envio */}
        <div className="text-left md:pl-4">
          <button
            type="submit"
            className="text-lg font-[Poppins] px-6 py-2 border-2 border-blue-600 rounded-full bg-blue-600 hover:bg-white text-white hover:text-blue-600 transition-all"
          >
            {result ? result : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
