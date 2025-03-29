import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - About Section */}
        <div>
          <h2 className="text-3xl font-bold text-white">Zawwar Ahmed</h2>
          <p className="mt-2 text-gray-400">
            Software Engineer | Frontend Developer | UI/UX Designer
          </p>
          <p className="text-gray-200 mt-3">
            Crafting digital experiences with React.js, Express.js, and Next.js 🚀
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="space-y-2">
          <h3 className="text-xl text-white font-semibold">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Skills</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right - Contact & Socials */}
        <div className="space-y-2">
          <h3 className="text-xl text-white font-semibold">Get in Touch</h3>
          <p className="flex items-center gap-2 text-gray-400">
            <Mail size={20} /> zawwarahmed06@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <Phone size={20} /> +92 332 1360570
          </p>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.facebook.com/zawwar.khatri" target="_blank" className="hover:text-blue-500 transition"><Facebook size={24} /></a>
            <a href="https://www.instagram.com/zawwar.khatri/" target="_blank" className="hover:text-pink-500 transition"><Instagram size={24} /></a>
            <a href="https://www.linkedin.com/in/zawwar-ahmed-4b8564276/" target="_blank" className="hover:text-blue-700 transition"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-300 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Zawwar Ahmed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
