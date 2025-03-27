import { motion } from 'framer-motion';
import { contact } from '../constants';

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            Get in touch
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-6 bg-tertiary rounded-2xl p-8 max-w-3xl"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-[24px]">Email</h3>
            <a
              href={`mailto:${contact.email}`}
              className="text-secondary hover:text-white transition-colors"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-[24px]">LinkedIn</h3>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
            >
              {contact.linkedin}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-white font-bold text-[24px]">GitHub</h3>
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
            >
              {contact.github}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 