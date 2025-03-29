import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const phoneNumber = "923321360570"; // Your WhatsApp number (without +)
    
    const textMessage = `🚀 New Inquiry from Your Website:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}\n\nLooking forward to your response!`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

    window.open(whatsappURL, "_blank");

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left - Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Have a project idea or just want to say hello? Feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail size={22} className="text-yellow-400" />
              <span className="text-gray-300 text-md">zawwarahmed06@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={22} className="text-pink-400" />
              <span className="text-gray-300 text-md">+92 332 1360570</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={22} className="text-purple-400" />
              <span className="text-gray-300 text-md">Karachi, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-6 rounded-2xl shadow-xl space-y-4 w-full"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full bg-green-500 cursor-pointer text-black px-5 py-2.5 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-md flex justify-center items-center gap-2"
          >
            Send Message
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
