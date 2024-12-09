import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { useState } from "react";
import "../styles/illustrations.css";
import styled from "@emotion/styled";

const ContactSection = styled.section`
  background: var(--bg-primary);
  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/gdg-kare",
      color: "hover:text-gray-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/company/gdg-kare",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/gdg.kare",
      color: "hover:text-pink-600",
    },
    {
      name: "Discord",
      icon: <FaDiscord size={24} />,
      url: "https://discord.gg/gdg-kare",
      color: "hover:text-indigo-600",
    },
  ];

  return (
    <ContactSection>
      <motion.div className="min-h-screen pt-20 px-4 bg-gray-50 dark:bg-gray-900">
        <motion.div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -top-10 right-0 -z-10 w-96 h-96 opacity-5 pointer-events-none"
            >
              {/* <img 
              src={ILLUSTRATIONS.community}
              alt="Team Discussion"
              className="w-full h-full object-contain"
              onError={() => setIllustrationError(true)}
            /> */}
            </motion.div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
              Get in Touch
            </h1>
            <p className="text-gray-600 dark:text-white">
              Have questions? We&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden dark:bg-gray-700"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-20 -right-20 w-48 h-48 opacity-5 pointer-events-none"
              >
                {/* <img 
                src={ILLUSTRATIONS.contact}
                alt="Customer Support"
                className="w-full h-full object-contain"
                onError={() => setIllustrationError(true)}
              /> */}
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out dark:bg-gray-500 dark:text-white"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden dark:bg-gray-700"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/5 rounded-full" />

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-4 dark:text-white">
                  Feel free to reach out to us through any of these platforms.
                </p>
                <div className="space-y-4 dark:text-white">
                  <p className="text-gray-600">
                    <span className="font-medium dark:text-white">Email:</span>{" "}
                    <a
                      href="mailto:gdsckare@klu.ac.in"
                      className="text-teal-600 hover:underline dark:text-teal-200"
                    >
                      gdsckare@klu.ac.in
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-white">
                    <span className="font-medium">Location:</span> Kalasalingam
                    Academy of Research and Education
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">
                  Follow Us
                </h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 dark:text-white ${social.color} transition-colors duration-300`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;
