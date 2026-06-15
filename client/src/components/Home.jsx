import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Scissors, MapPin, Clock, Mail, Phone, Send,
  Shirt, Ruler, Star, CheckCircle, Diamond, ShoppingBag, Layers, LogIn, Banknote, ShieldCheck, Truck
} from 'lucide-react';
import Navbar from './Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../img/t1.webp';
import img2 from '../img/t2.png';
import img3 from '../img/t3.webp';
import e1 from '../img/E1.webp';
import e2 from '../img/E2.webp';
import e3 from '../img/E3.webp';
import tt1 from '../img/Tt1.webp';
import tt2 from '../img/Tt2.webp';
import tt3 from '../img/Tt3.webp';
import c1 from '../img/C1.jpg';
import c2 from '../img/C2.webp';
import c3 from '../img/C3.avif';
import ss1 from '../img/ss1.jpg';
import ss2 from '../img/ss2.jpg';
import ss3 from '../img/ss3.jpg';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: 'Bespoke Craftsmanship', subtitle: 'Crafting excellence since 1993', image: img1 },
    { title: 'Custom Alterations', subtitle: 'Perfecting the fit for every occasion', image: img2 },
    { title: 'Premium Materials', subtitle: 'Quality fabrics meeting masterful design', image: img3 }
  ];

  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Hero Animation
    if (heroRef.current) {
      const h1 = heroRef.current.querySelector('h1');
      const p = heroRef.current.querySelector('p');
      if (h1) {
        gsap.fromTo(h1,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.5 }
        );
      }
      if (p) {
        gsap.fromTo(p,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
        );
      }
    }

    // Scroll Animations for sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => {
      clearInterval(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar />

      {/* Hero Carousel (3 Scrolling Photos Placeholder) */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/60 to-neutral-950 z-10"></div>
              {/* Image Background */}
              <div
                className="w-full h-full bg-cover bg-center opacity-60 flex items-center justify-center transition-transform duration-1000 scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </div>
          ))}
        </div>

        <div className="relative z-20 text-center max-w-4xl px-6">
          <span className="text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-6 block animate-fade-in">
            VT Clasic Tailor
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif mb-6 text-white transition-all duration-500">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl text-neutral-400 font-light mb-10 transition-all duration-500">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-amber-500' : 'bg-neutral-600'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Finest Fashion Collection */}
      <section ref={el => sectionsRef.current[0] = el} className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-6">Explore Our Finest Fashion Collection</h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {/* Category: Employee Clothes */}
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-8 flex items-center gap-3">
              <Star className="w-5 h-5" /> Employee Clothes
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[e1, e2, e3].map((imgSrc, index) => (
                <div key={index} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden group">
                  <div
                    className="h-[28rem] bg-neutral-800 bg-cover bg-top group-hover:opacity-80 transition-opacity"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                  ></div>
                  <div className="p-6">
                    <h4 className="text-white text-lg font-medium mb-2">Corporate Wear {index + 1}</h4>
                    <p className="text-neutral-500 text-sm">Finest quality fitting for daily office wear.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category: Traditional */}
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-8 flex items-center gap-3">
              <Diamond className="w-5 h-5" /> Traditional
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[tt1, tt2, tt3].map((imgSrc, index) => (
                <div key={index} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden group">
                  <div
                    className="h-[28rem] bg-neutral-800 bg-cover bg-top group-hover:opacity-80 transition-opacity"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                  ></div>
                  <div className="p-6">
                    <h4 className="text-white text-lg font-medium mb-2">Traditional Attire {index + 1}</h4>
                    <p className="text-neutral-500 text-sm">Authentic and culturally rich bespoke designs.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category: Simple Style */}
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-8 flex items-center gap-3">
              <Scissors className="w-5 h-5" /> Simple Style
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[ss1, ss2, ss3].map((imgSrc, index) => (
                <div key={index} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden group">
                  <div
                    className="h-[28rem] bg-neutral-800 bg-cover bg-top group-hover:opacity-80 transition-opacity"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                  ></div>
                  <div className="p-6">
                    <h4 className="text-white text-lg font-medium mb-2">Casual Comfort {index + 1}</h4>
                    <p className="text-neutral-500 text-sm">Minimalist elegance for everyday wear.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category: College and Uniforms */}
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-8 flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" /> College and Uniforms
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[c1, c2, c3].map((imgSrc, index) => (
                <div key={index} className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden group">
                  <div
                    className="h-[28rem] bg-neutral-800 bg-cover bg-top group-hover:opacity-80 transition-opacity"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                  ></div>
                  <div className="p-6">
                    <h4 className="text-white text-lg font-medium mb-2">Academic Uniform {index + 1}</h4>
                    <p className="text-neutral-500 text-sm">Durable, neat, and precisely tailored uniforms.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop Images */}
      <section ref={el => sectionsRef.current[1] = el} className="py-24 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-6">Shop Images</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[img1, img2, img3].map((imgSrc, index) => (
              <div
                key={index}
                className="h-64 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors group"
              >
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${imgSrc})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={el => sectionsRef.current[2] = el} className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-6">Our Services</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-10 rounded-3xl text-center group hover:border-amber-500 transition-colors">
              <Banknote className="w-10 h-10 text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-white mb-4">Low Cost</h3>
              <p className="text-neutral-400">Premium tailoring does not have to be expensive. We respect your budget while delivering elegant results.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-10 rounded-3xl text-center group hover:border-amber-500 transition-colors md:-translate-y-4">
              <ShieldCheck className="w-10 h-10 text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-white mb-4">Best Quality</h3>
              <p className="text-neutral-400">From the finest fabrics to precision stitching, we guarantee the best quality output for your garments.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-10 rounded-3xl text-center group hover:border-amber-500 transition-colors">
              <Truck className="w-10 h-10 text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-white mb-4">Home Delivery</h3>
              <p className="text-neutral-400">Experience true convenience with our home delivery service on all completed orders.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section (Home Page Preview) */}
      <section ref={el => sectionsRef.current[4] = el} className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif text-white mb-8">Contact Us</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 mb-1">Email</h3>
                  <p className="text-neutral-200">shivrajtalwar07@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 mb-1">Phone</h3>
                  <p className="text-neutral-200">+91 9763922258, +91 9156893352</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-serif text-white mb-6">Leave a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500" />
                <input type="text" placeholder="Last Name" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500" />
                <input type="tel" placeholder="Phone Number" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500" />
              </div>
              <textarea placeholder="Message" rows="3" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 resize-none"></textarea>
              <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-xl px-6 py-3 transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-900/30 pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-serif text-white mb-6">About Us</h3>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
              This is a wider card with supporting text below as a natural lead-in to additional content. Discover the craft behind our bespoke creations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Important Links</h3>
            <ul className="space-y-4 font-light text-neutral-400">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>

              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
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

export default Home;
