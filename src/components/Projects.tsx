import { motion } from 'framer-motion';
import { projects } from '../constants';

interface ProjectCardProps {
  name: string;
  description: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  source_code_link: string;
}

const ProjectCard = ({
  name,
  description,
  tags,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-card 
                 transform hover:shadow-[0_0_20px_rgba(138,75,175,0.2)] 
                 transition-all duration-300 ease-in-out
                 bg-gradient-to-br from-tertiary to-[#1d1836]"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-white font-bold text-[24px] group cursor-pointer 
                       hover:text-purple-400 transition-colors duration-300">
          {name}
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(source_code_link, "_blank")}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 
                     px-4 py-2 rounded-lg text-white text-sm 
                     hover:from-purple-600 hover:to-indigo-700
                     transition-all duration-300 ease-in-out
                     shadow-lg hover:shadow-xl
                     flex items-center gap-2"
        >
          <svg 
            className="w-4 h-4" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Code
        </motion.button>
      </div>

      <motion.p 
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        className="mt-4 text-secondary text-[14px] leading-[1.5]"
      >
        {description}
      </motion.p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <motion.span
            key={tag.name}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            className={`text-[14px] ${tag.color} 
                       px-3 py-1 rounded-full 
                       bg-black/20 backdrop-blur-sm
                       transition-all duration-300 ease-in-out
                       hover:shadow-[0_0_10px_rgba(138,75,175,0.2)]`}
          >
            #{tag.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]
                        bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            My Work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]
                         bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">
            Projects
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
          >
            Following projects showcase my skills and experience through real-world examples of my work.
            Each project is briefly described with links to code repositories.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-wrap justify-center gap-7"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 