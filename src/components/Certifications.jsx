import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'Introduction to Generative AI',
      issuer: 'IBM',
    },
    {
      title: 'Artificial Intelligence',
      issuer: 'Accenture',
    },
    {
      title: 'AI for Business Professionals',
      issuer: 'HP LIFE',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
              <p className="text-blue-500 font-semibold">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;