import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'TKR College of Engineering and Technology',
      period: '2023–2027',
      grade: 'CGPA: 7.12',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Rishi Junior College',
      period: '2021–2023',
      grade: 'Percentage: 91%',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'IES New English School',
      period: '2020–2021',
      grade: 'Percentage: 85%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="ml-8 glass p-6 rounded-2xl flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-500 mb-1">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;