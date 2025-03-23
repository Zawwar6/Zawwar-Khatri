import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl w-full text-center space-y-6">
        {/* Greeting */}
        <h2 className="text-base sm:text-lg text-yellow-400">Hi, my name is</h2>

        {/* Main Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Zawwar Khatri
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I am a passionate Mern Stack Developer crafting interactive, animated, and responsive web experiences.
          Let's build something awesome together.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
  <a
    href="https://linktr.ee/zawwarkhatri"
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-yellow-400 text-black px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 shadow-md"
  >
    View Projects
    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
  </a>
</div>

      </div>
    </section>
  );
};

export default Home;
