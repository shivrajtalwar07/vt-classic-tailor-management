import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Scissors, Clock, Send, LogIn } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import axios from 'axios';

import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Save data to database
      await axios.post("http://localhost:3000/api/contact", formData);

      // 2. Send email via emailjs
      const result = await emailjs.sendForm(
        'service_p9jshve', // Service ID
        'template_contact', // Template ID
        form.current,
        'W_0f1xWAeWIF_XIVr' // Updated Public Key
      );
      
      console.log(result.text);
      toast.success("Message sent and saved successfully!");
      setFormData({ fname: '', lname: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-amber-600/10 to-transparent z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6">Contact Us</h1>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto">
            We would love to hear from you. Whether it's to schedule an alteration or discuss a bespoke piece, reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif text-white mb-8">Get In Touch</h2>
              <div className="grid gap-8">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800 group-hover:border-amber-500/50 transition-colors shrink-0">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2 font-medium">Email</h3>
                    <p className="text-lg text-neutral-200">shivrajtalwar07@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800 group-hover:border-amber-500/50 transition-colors shrink-0">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2 font-medium">Phone</h3>
                    <p className="text-lg text-neutral-200">+91 9763922258</p>
                    <p className="text-lg text-neutral-200">+91 9156893352</p>
                  </div>
                </div>


                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800 group-hover:border-amber-500/50 transition-colors shrink-0">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2 font-medium">Address</h3>
                    <p className="text-lg text-neutral-200">Iranna Talwar, Solapur, Maharashtra</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-serif text-white mb-6">Leave a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Number"
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="4"
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl px-6 py-4 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}

      <section className="py-24 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">Find Our Shop</h2>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Visit us at our boutique for a personalized consultation. Our master tailors are ready to help you achieve the perfect fit.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+919763922258"
                    className="flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-amber-500/20 group text-center"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call Now: +91 9763922258
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=17.459177262122434,75.97274430534196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-4 px-8 rounded-2xl transition-all border border-neutral-700"
                  >
                    <MapPin className="w-5 h-5 text-amber-500" /> Get Directions
                  </a>
                </div>
              </div>

              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl">
                <h3 className="text-white font-serif mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-500" /> Opening Hours
                </h3>
                <div className="space-y-2 text-sm text-neutral-400">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span className="text-neutral-200">08:00 - 21:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 h-[500px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.5413246011594!2d75.9179846!3d17.6718701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db8624581fa1%3A0x999f4d1d50780a8!2sSai%20Nath!5e0!3m2!1sen!2sin!4v1775975585777!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <div className="absolute top-4 right-4 md:hidden">
                <a
                  href="tel:+919763922258"
                  className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse"
                >
                  <Phone className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">

            <div className="lg:col-span-2 h-[500px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.875701006999!2d75.97274430534196!3d17.459177262122434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc677c9a1ac9747%3A0x71c8627eb6983913!2sTailar%20shop!5e0!3m2!1sen!2sin!4v1718413724590!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <div className="absolute top-4 right-4 md:hidden">
                <a
                  href="tel:+919763922258"
                  className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse"
                >
                  <Phone className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">Find Our Shop</h2>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  Visit us at our boutique for a personalized consultation. Our master tailors are ready to help you achieve the perfect fit.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+919763922258"
                    className="flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-amber-500/20 group text-center"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call Now: +91 9763922258
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=17.459177262122434,75.97274430534196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-4 px-8 rounded-2xl transition-all border border-neutral-700"
                  >
                    <MapPin className="w-5 h-5 text-amber-500" /> Get Directions
                  </a>
                </div>
              </div>

              <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl">
                <h3 className="text-white font-serif mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-500" /> Opening Hours
                </h3>
                <div className="space-y-2 text-sm text-neutral-400">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span className="text-neutral-200">08:00 - 21:00</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer className="mt-24 border-t border-neutral-800 bg-neutral-900/30 pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Us Card */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-serif text-white mb-6">About Us</h3>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
              This is a wider card with supporting text below as a natural lead-in to additional content. Discover the craft behind our bespoke creations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Important Links</h3>
            <ul className="space-y-4 font-light text-neutral-400">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>

              <li><Link to="/contact" className="text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Location & Time */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Our Location</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <p className="text-neutral-400 font-light text-sm">
                  VT Clasic Tailor, Vyanktesh Nagar, Datta Nagar, Bhadravathi Peth, Solapur, Maharashtra 413005
                </p>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <p className="text-neutral-300 font-medium text-sm mb-1">Open Time</p>
                  <p className="text-neutral-400 font-light text-sm">Every Day<br />08:00 to 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-neutral-600 border-t border-neutral-800 pt-8">
          &copy; {new Date().getFullYear()} VT Clasic Tailor. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
