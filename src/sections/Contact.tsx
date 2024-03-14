import axios from 'axios';
import { useEffect, useState } from 'react';

interface Form {
   senderName: string;
   senderEmail: string;
   message: string;
}

const Contact = () => {
   const [formDisabled, setFormDisabled] = useState<boolean>(false);
   const [form, setForm] = useState<Form>({
      senderName: '',
      senderEmail: '',
      message: '',
   });

   useEffect(() => {
      setFormDisabled(Object.values(form).every((el) => el));
   }, [form]);

   console.log(formDisabled);
   console.log(form);

   const handleInput = (e: any) => {
      const { name, value } = e.target;

      setForm({
         ...form,
         [name]: value,
      });
   };

   const sendEmail = async (e: any, form: Form): Promise<void> => {
      e.preventDefault();
      try {
         const { senderName, message, senderEmail } = form;
         const htmlContent = `<html><head></head><body><p>${message}</p></body></html>`;
         const body = {
            sender: {
               name: senderName,
               email: senderEmail,
            },
            to: [
               {
                  email: 'jullaltamiranop@gmail.com',
                  name: 'Jull',
               },
            ],
            subject: 'CONTACTO PORTAFOLIO',
            htmlContent: htmlContent,
         };

         const { data } = await axios.post('https://api.brevo.com/v3/smtp/email', body, {
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
               'api-key': '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',
            },
         });

         return data;
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <section id='proyectos'>
         <div
            className='bg-zinc-800 px-8 py-14 lg:px-72 md:px-40 sm:py-20 sm:px-16'>
            <div className='grid grid-cols-2 gap-4'>
               <span className='col-span-2 text-2xl font-semibold text-white mb-4'>Contáctame</span>
               <div className='col-span-2 md:col-span-1'>
                  <div className='relative h-10 w-full min-w-[100px] lg:min-w-[200px]'>
                     <input
                        onChange={handleInput}
                        name='senderName'
                        value={form.senderName}
                        className='peer h-full w-full rounded-[7px] border border-zinc-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-zinc-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-zinc-200 placeholder-shown:border-t-zinc-200 focus:border-2 focus:border-teal-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-zinc-50'
                        placeholder=' '
                     />
                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-zinc-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-zinc-400">
                        Nombre
                     </label>
                  </div>
               </div>
               <div className='col-span-2 md:col-span-1'>
                  <div className='relative h-10 w-full min-w-[100px] lg:min-w-[200px]'>
                     <input
                        onChange={handleInput}
                        name='senderEmail'
                        value={form.senderEmail}
                        type='email'
                        className='peer h-full w-full rounded-[7px] border border-zinc-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-zinc-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-zinc-200 placeholder-shown:border-t-zinc-200 focus:border-2 focus:border-teal-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-zinc-50'
                        placeholder=' '
                     />
                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-zinc-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-zinc-400">
                        Email
                     </label>
                  </div>
               </div>
               <div className='col-span-2'>
                  <div className='relative w-full min-w-[100px] lg:min-w-[200px]'>
                     <textarea
                        onChange={handleInput}
                        name='message'
                        value={form.message}
                        className='peer h-full w-full rounded-[7px] border border-zinc-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-zinc-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-zinc-200 placeholder-shown:border-t-zinc-200 focus:border-2 focus:border-teal-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-zinc-50'
                        placeholder=' '></textarea>
                     <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-zinc-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-zinc-400">
                        Mensaje
                     </label>
                  </div>
               </div>
            </div>
            <button
               className='rounded bg-teal-400 text-white font-semibold text-sm px-4 py-1 mt-2'>
               ENVIAR
            </button>
         </div>
      </section>
   );
};

export default Contact;
