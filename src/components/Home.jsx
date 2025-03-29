import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen overflow-y-hidden flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl w-full text-center space-y-6 sm:space-y-8">
        
        {/* Greeting Animation */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-sm sm:text- md:text-xl text-yellow-400"
        >
          Hi, my name is
        </motion.h2>

        {/* Name Animation */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Zawwar Khatri
        </motion.h1>

        {/* Tagline Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed"
        >
          I am a passionate MERN Stack Developer crafting interactive, animated, and responsive web experiences.
          Let's build something awesome together.
        </motion.p>

        {/* CTA Button Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          className="flex justify-center"
        >
          <a
            href="https://linktr.ee/zawwarkhatri"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 hover:bg-yellow-500 transition-all duration-300 shadow-md"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
