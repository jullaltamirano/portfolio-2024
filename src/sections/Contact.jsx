import axios from 'axios';
import { useState } from 'react';

export const Contact = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [formSended, setFormSended] = useState(false);
   const [errorForm, setErrorForm] = useState(false);
   const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;

      setFormSended(false);
      setErrorForm(false);
      setForm({
         ...form,
         [name]: value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const htmlContent = `<html><head></head><body><h2>Nombre: ${form.name}</h2><h2>Email: ${form.email}</h2><h2>Mensaje: ${form.message}</h2></body></html>`;
      const body = {
         sender: {
            name: 'Jull Altamirano',
            email: 'jullaltamiranop@gmail.com',
         },
         to: [
            {
               email: 'jullaltamiranop@gmail.com',
               name: 'Jull Altamirano',
            },
         ],
         subject: 'Nuevo Contacto del Portafolio',
         htmlContent: htmlContent,
      };

      try {
         setIsLoading(true);
         setErrorForm(false);
         const { data } = await axios.post('https://api.brevo.com/v3/smtp/email', body, {
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
               'api-key': import.meta.env.PUBLIC_BREVO_API_KEY,
            },
         });
         setFormSended(true);
         setIsLoading(false);
         setForm({
            name: '',
            email: '',
            message: '',
         });
      } catch (error) {
         console.log(error);
         setErrorForm(true);
         setIsLoading(false);
      }
   };
   return (
      <section id='contacto'>
         <form onSubmit={ handleSubmit } className='bg-zinc-800 px-8 py-14 lg:px-72 md:px-40 sm:py-20 sm:px-16'>
            <div className='bg-zinc-700 p-8 rounded'>
               <span className='col-span-2 text-2xl font-semibold text-white'>Contáctame</span>
               <div className='grid grid-cols-2 gap-4 mt-4'>
                  <div className='col-span-2 md:col-span-1'>
                     <div className='relative h-10 w-full min-w-[100px] lg:min-w-[200px]'>
                        <input
                           id='name'
                           name='name'
                           onChange={handleInputChange}
                           value={form.name}
                           className='peer h-full w-full rounded-[7px] border border-zinc-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-zinc-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-zinc-200 placeholder-shown:border-t-zinc-200 focus:border-2 focus:border-teal-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-zinc-50'
                           placeholder=' '
                           autoComplete='off'
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-zinc-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-zinc-400">
                           Nombre
                        </label>
                     </div>
                  </div>
                  <div className='col-span-2 md:col-span-1'>
                     <div className='relative h-10 w-full min-w-[100px] lg:min-w-[200px]'>
                        <input
                           id='email'
                           name='email'
                           onChange={handleInputChange}
                           value={form.email}
                           type='email'
                           className='peer h-full w-full rounded-[7px] border border-zinc-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-zinc-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-zinc-200 placeholder-shown:border-t-zinc-200 focus:border-2 focus:border-teal-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-zinc-50'
                           placeholder=' '
                           autoComplete='off'
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-zinc-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-zinc-400">
                           Email
                        </label>
                     </div>
                  </div>
                  <div className='col-span-2'>
                     <div className='relative w-full min-w-[100px] lg:min-w-[200px]'>
                        <textarea
                           id='message'
                           name='message'
                           onChange={handleInputChange}
                           value={form.message}
                           className='peer h-full w-full rounded-[7px] border border-zinc-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-zinc-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-zinc-200 placeholder-shown:border-t-zinc-200 focus:border-2 focus:border-teal-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-zinc-50'
                           placeholder=' '
                           autoComplete='off'></textarea>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-zinc-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-zinc-400">
                           Mensaje
                        </label>
                     </div>
                  </div>
               </div>
            </div>
            <button
               type='submit'
               disabled={!Object.values(form).every((el) => el) || isLoading}
               className='rounded bg-teal-400 text-white font-semibold text-sm px-4 py-1 mt-2 disabled:bg-zinc-700 disabled:text-zinc-500 hover:scale-110 transition-all'>
               {isLoading ? 'ENVIANDO...' : 'ENVIAR'}
            </button>
            {formSended && <span className='text-sm font-thin text-zinc-200 ml-5'>Formulario Enviado con éxito</span>}
            {errorForm && <span className='text-sm font-thin text-red-400 ml-5'>Hubo un error al procesar la solicitud</span>}
         </form>
      </section>
   );
};
