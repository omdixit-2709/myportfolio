import { motion } from 'framer-motion';
import { skills } from '../constants';

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-[14px] bg-black-200 px-3 py-1 rounded-full text-secondary"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            My Skills
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7">
          {skills.map((skill, index) => (
            <SkillCategory key={index} title={skill.title} items={skill.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 