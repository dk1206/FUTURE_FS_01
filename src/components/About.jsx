import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Information Technology student with a keen interest in web development. 
                Currently pursuing my degree, I'm eager to apply my skills in real-world projects and 
                contribute to innovative solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                My goal is to secure an entry-level opportunity where I can utilize my technical skills, 
                enhance my learning, and grow as a professional in the field of technology.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Contact Info</h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Email:</strong> karthikdobbali12@gmail.com</p>
                <p><strong>Phone:</strong> +91 91347244903</p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karthik-dobbali-7a5b87337" className="text-blue-500 hover:underline">View Profile</a></p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quick Facts</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Currently studying Information Technology</li>
                <li>• Passionate about web development</li>
                <li>• Eager to learn and grow</li>
                <li>• Team player with strong communication skills</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;