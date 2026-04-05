import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'EY Global Delivery Services & AICTE',
      period: 'Dec 2024 – Jan 2025',
      description: 'Built full-stack MERN applications. Focused on scalable and responsive web apps.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl mb-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                <span className="text-blue-500 font-semibold">{exp.period}</span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;