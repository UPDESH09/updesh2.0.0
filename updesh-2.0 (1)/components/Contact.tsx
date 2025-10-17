import React, { useState } from 'react';
import { PhoneIcon, WhatsAppIcon } from './IconComponents';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send the data to a server here.
    alert('Thank you for your message! (This is a demonstration and no email was sent)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 font-serif">✉️ Get In Touch</h2>
          <p className="text-lg text-stone-600 mt-4 max-w-2xl mx-auto">
            Have questions or want to connect? Send us a message.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-3 text-stone-600">
            <PhoneIcon className="h-6 w-6 text-teal-600" />
            <a href="tel:9999059445" className="text-lg font-medium hover:text-teal-700">9999059445</a>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-3 text-stone-600">
            <WhatsAppIcon className="h-6 w-6 text-green-600" />
            <a href="https://wa.me/919999059445" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-green-700">Chat on WhatsApp</a>
          </div>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-stone-200/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-md border-stone-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition duration-150 ease-in-out"
                placeholder="Your Name"
                aria-label="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-md border-stone-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition duration-150 ease-in-out"
                placeholder="you@example.com"
                aria-label="Email Address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-md border-stone-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 transition duration-150 ease-in-out"
                placeholder="Your message..."
                aria-label="Message"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;