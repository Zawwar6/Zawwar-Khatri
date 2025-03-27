import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully animated React-based e-commerce platform.",
    image: "/1.PNG",
    link: "https://food-website-xi-dusky.vercel.app/",
  },
  {
    id: 2,
    title: "My WorldTec",
    description: "A personal website of MyWorldTec Company with scroll animations.",
    image: "/2.PNG",
    link: "https://www.myworldtec.com/",
  },
  {
    id: 3,
    title: "Rock Paper Scissors Game",
    description: "A rock paper scissor game play and enjoy",
    image: "/3.PNG",
    link: "https://zawwar6.github.io/RSP-Game/",
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    description: "Tic Tac Toe Game",
    image: "/4.PNG",
    link: "https://zawwar6.github.io/Tictactoe/",
  },
  {
    id: 5,
    title: "FootWear App",
    description: "E-Commerce Platform",
    image: "/5.PNG",
    link: "https://zawwar6.github.io/e-commerce/",
  },
  {
    id: 6,
    title: "MWT OFFICIAL E-COMMERCE PLATOFORM",
    description: "E-Commerce Platform for MWT OFFICIAL Company Work",
    image: "/6.PNG",
    link: "https://mwt-official.vercel.app/",
  },
];

const animationVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: index % 2 === 0 ? -50 : 50, // Odd cards: up, Even cards: down
    x: index % 3 === 0 ? -50 : 50, // First column: left, Third column: right
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Project = () => {
  return (
    <section id="projects" className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-yellow-400"
        >
          My Projects
        </motion.h2>
        <p className="text-gray-300 mt-2">Some of my best work in web development</p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            className="group relative w-full h-80 perspective cursor-pointer"
          >
            <motion.div className="relative w-full h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5 transition-transform duration-500 transform-style-3d group-hover:rotateY-180">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover rounded-md"
                />
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              </div>

              {/* Back Side (Flipped) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-5 bg-black/80 text-white opacity-0 transition-opacity duration-500 transform rotateY-180 group-hover:opacity-100">
                <p className="text-gray-300 text-center">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-yellow-500 relative overflow-hidden before:absolute before:inset-0 before:bg-yellow-200 before:opacity-10 before:transition-all before:duration-500 before:scale-150 hover:before:scale-100"
                >
                  View Project 🚀
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
