import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-300 text-md sm:text-lg leading-relaxed">
            I am <span className="text-yellow-400 font-semibold">Zawwar Khatri</span>, a passionate <span className="text-green-400 font-medium">MERN Stack Developer</span> dedicated to building efficient, scalable, and visually stunning web applications.
          </p>
          <p className="text-gray-300 text-md sm:text-lg">
            I specialize in developing full-stack applications using <span className="text-blue-400">MongoDB</span>, <span className="text-green-400">Express.js</span>, <span className="text-cyan-400">React</span>, and <span className="text-gray-400">Node.js</span>. From backend APIs to modern frontend interfaces, I handle the entire development lifecycle with clean code and great UI/UX.
          </p>
          <p className="text-gray-400 text-sm sm:text-base italic">
            “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/zaw.png" // 👈 make sure your image path is correct
            alt="Zawwar Khatri"
            className="w-72 sm:w-[340px] h-[500px] rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
