import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { SiAstro } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiReactquery } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';

const techs = [
   { icon: (<FaHtml5 className='text-2xl' size={'1.5em'} />), name: 'HTML', },
   { icon: (<IoLogoCss3 className='text-2xl' size={'1.5em'} />), name: 'CSS', },
   { icon: (<IoLogoJavascript className='text-2xl' size={'1.5em'} />), name: 'Javascript', },
   { icon: (<SiTypescript className='text-2xl' size={'1.5em'} />), name: 'Typescript', },
   { icon: (<FaReact className='text-2xl' size={'1.5em'} />), name: 'React', },
   { icon: (<SiNextdotjs className='text-2xl' size={'1.5em'} />), name: 'Next js', },
   { icon: (<SiAstro className='text-2xl' size={'1.5em'} />), name: 'Astro', },
   { icon: (<FaNodeJs className='text-2xl' size={'1.5em'} />), name: 'Node js', },
   { icon: (<SiExpress className='text-2xl' size={'1.5em'} />), name: 'Express', },
   { icon: (<SiNestjs className='text-2xl' size={'1.5em'} />), name: 'Nest js', },
   { icon: (<SiPostgresql className='text-2xl' size={'1.5em'} />), name: 'PostgreSQL', },
   { icon: (<SiMongodb className='text-2xl' size={'1.5em'} />), name: 'Mongo DB', },
   { icon: (<FaBootstrap className='text-2xl' size={'1.5em'} />), name: 'Bootstrap', },
   { icon: (<SiTailwindcss className='text-2xl' size={'1.5em'} />), name: 'Tailwind', },
   { icon: (<SiReactquery className='text-2xl' size={'1.5em'} />), name: 'Tanstack Query', },
   { icon: (<SiRedux className='text-2xl' size={'1.5em'} />), name: 'Redux', },
   { icon: (<FaGitAlt className='text-2xl' size={'1.5em'} />), name: 'Git', },
   { icon: (<FaDocker className='text-2xl' size={'1.5em'} />), name: 'Docker', },
];

const Habilities = () => {
   return (
      <section id='habilidades'>
         <div className='flex flex-col justify-center items-center px-8 bg-zinc-800 py-14 md:px-32 sm:py-20 sm:px-16'>
            <h2 className='text-zinc-100 font-bold text-3xl md:text-4xl mb-14'>HABILIDADES</h2>
            <div className='flex px-4 md:px-12 lg:px-44 gap-10 flex-wrap justify-center'>
               {techs.map((tech) => (
                  <div className='flex flex-col items-center border-2 border-zinc-700 rounded-lg text-zinc-300 py-3 px-4'>
                     {tech.icon}
                     <span className='text-sm font-thin mt-1'>{tech.name}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Habilities;
