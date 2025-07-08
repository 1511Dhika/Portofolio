'use client';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        'service_gzrtbn8',
        'template_f46punb',
        templateParams,
        'DAL1-zrEbQVlDmPfG'
      );
      console.log('SUCCESS!', result.text);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send email.');
    }
  };


  return (
    <section id="contact" className="container mx-auto py-20 px-4">
      {/* Header */}
      <div className="text-left mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        <div className="w-full lg:w-2/3 bg-white dark:bg-[#2a374a] p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-gray-50 dark:bg-[#19222D] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#C6F10E] focus:border-[#C6F10E] outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-gray-50 dark:bg-[#19222D] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#C6F10E] focus:border-[#C6F10E] outline-none transition"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-3 bg-gray-50 dark:bg-[#19222D] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#C6F10E] focus:border-[#C6F10E] outline-none transition"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full p-3 bg-gray-50 dark:bg-[#19222D] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#C6F10E] focus:border-[#C6F10E] outline-none transition resize-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="text-black bg-[#C6F10E] hover:bg-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-300 font-bold rounded-lg text-lg px-8 py-3 text-center transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Info Kontak */}
        <div className="w-full lg:w-1/3 bg-white dark:bg-[#2a374a] p-8 rounded-lg shadow-lg h-fit">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-[#C6F10E] text-xl" />
              <span>ramdhanadhika1511@gmail.com</span>
            </li>
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#C6F10E] text-xl" />
              <span>Jakarta, Indonesia</span>
            </li>
          </ul>
          <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">Connect with me</h3>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/dhika-ramdhana-7680a9255" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform"><FaLinkedinIn /></a>
            <a href="https://github.com/1511Dhika" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#333] rounded-full flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform"><FaGithub /></a>
            <a href="https://www.instagram.com/dhi_karam/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;