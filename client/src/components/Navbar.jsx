import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, LogIn, LogOut, ShieldCheck, Menu, X, Phone, Mail } from 'lucide-react';
import imgA1 from '../img/A1.jpg';
import imgA2 from '../img/A2.jpg';
import imgA3 from '../img/A3.jpg';
import imgA4 from '../img/A4.jpg';
import imgA5 from '../img/A5.jpg';
import imgA6 from '../img/A6.jpg';
import imgB1 from '../img/B1.jpg';
import imgB2 from '../img/B2.jpg';
import imgB3 from '../img/B3.jpg';
import imgB4 from '../img/B4.jpg';
import imgB5 from '../img/B5.jpg';
import imgB6 from '../img/B6.jpg';
import imgD1 from '../img/D1.jpg';
import imgD2 from '../img/D2.jpg';
import imgD3 from '../img/D3.jpg';
import imgD4 from '../img/D4.jpg';
import imgD5 from '../img/D5.jpg';
import imgE1 from '../img/E1.jpg';
import imgE2 from '../img/E2.jpg';
import imgE3 from '../img/E3.jpg';
import imgE4 from '../img/E4.jpg';
import imgE5 from '../img/E5.jpg';
import imgE6 from '../img/E6.jpg';
import imgF1 from '../img/F1.jpg';
import imgF2 from '../img/F2.jpg';
import imgF3 from '../img/F3.jpg';
import imgF4 from '../img/F4.jpg';
import imgF5 from '../img/F5.jpg';
import imgF6 from '../img/F6.jpg';
import imgF7 from '../img/F7.jpg';
import imgF8 from '../img/F8.jpg';
import imgF9 from '../img/F9.jpg';
import imgG1 from '../img/G1.jpg';
import imgG2 from '../img/G2.jpg';
import imgG3 from '../img/G3.jpg';
import imgG4 from '../img/G4.jpg';
import imgG5 from '../img/G5.jpg';
import imgG6 from '../img/G6.jpg';
import imgG7 from '../img/G7.jpg';
import imgG8 from '../img/G8.jpg';
import imgG9 from '../img/G9.jpg';
import imgH1 from '../img/H1.jpg';
import imgH2 from '../img/H2.jpg';
import imgH3 from '../img/H3.jpg';
import imgH4 from '../img/H4.jpg';
import imgH5 from '../img/H5.jpg';
import imgH6 from '../img/H6.jpg';
import imgI1 from '../img/I1.jpg';
import imgI2 from '../img/I2.jpg';
import imgI3 from '../img/I3.jpg';
import imgI4 from '../img/I4.jpg';
import imgI5 from '../img/I5.jpg';
import imgI6 from '../img/I6.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Sidebar Overlay */}
      <div className={`fixed inset-0 z-[60] bg-neutral-950/90 backdrop-blur-sm transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <div className="text-2xl font-serif font-bold text-amber-500 flex items-center gap-2">
              <Scissors className="w-8 h-8" />
              V.T Clasic Tailor
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-2xl font-serif">
            {['/dashboard', '/customize-shirt', '/admin'].includes(location.pathname) ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 flex items-center gap-3 text-red-500 border border-red-500/30 px-6 py-3 rounded-xl hover:bg-red-500/10 transition-colors w-fit"
                >
                  <LogOut className="w-6 h-6" /> Logout
                </Link>
                <Link
                  to="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 flex items-center gap-3 text-amber-500 border border-amber-500/30 px-6 py-3 rounded-xl hover:bg-amber-500/10 transition-colors w-fit"
                >
                  <ShieldCheck className="w-6 h-6" /> Admin
                </Link>
              </>
            ) : (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${isActive(link.path) ? 'text-amber-500' : 'text-neutral-300 hover:text-amber-500'} hover:translate-x-2 transition-all`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 flex items-center gap-3 text-amber-500 border border-amber-500/30 px-6 py-3 rounded-xl hover:bg-amber-500/10 transition-colors w-fit"
                >
                  <LogIn className="w-6 h-6" /> Login
                </Link>
              </>
            )}
          </div>
          <div className="mt-auto pb-8 border-t border-neutral-800 pt-8">
            <p className="text-neutral-500 text-sm mb-4 uppercase tracking-widest">Connect with us</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-500 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-500 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-neutral-900 rounded-lg transition-colors text-amber-500"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-xl font-serif font-bold text-amber-500 flex items-center gap-2">
              <Scissors className="w-6 h-6" />
              V.T Clasic Tailor
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wider uppercase items-center">
            {['/dashboard', '/customize-shirt', '/admin'].includes(location.pathname) ? (
              <>
                <Link to="/login" className="ml-4 flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-red-500/50 hover:text-red-500 text-white px-4 py-2 rounded-lg transition-colors">
                  <LogOut className="w-4 h-4" /> Logout
                </Link>
                <Link to="/admin" className="ml-4 flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 hover:text-amber-500 text-white px-4 py-2 rounded-lg transition-colors">
                  <ShieldCheck className="w-4 h-4" /> Admin
                </Link>
              </>
            ) : (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${isActive(link.path) ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'hover:text-amber-500 transition-colors'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/login" className="ml-4 flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 hover:text-amber-500 text-white px-4 py-2 rounded-lg transition-colors">
                  <LogIn className="w-4 h-4" /> Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
export const shirtStyles = [
  {
    id: 1,
    name: 'Classic Formal',
    description: 'Timeless dress shirt with French cuffs and spread collar.',
    color: 'from-blue-600/30 to-blue-900/30',
    border: 'border-blue-500/30',
    icon: '👔',
    price: '₹450',
    images: [imgA1, imgA2, imgA3, imgA4, imgA5, imgA6]
  },
  {
    id: 2,
    name: 'Slim Fit',
    description: 'Modern tailored fit with narrow sleeves and tapered waist.',
    color: 'from-violet-600/30 to-violet-900/30',
    border: 'border-violet-500/30',
    icon: '✂️',
    price: '₹500',
    images: [imgB1, imgB2, imgB3, imgB4, imgB5, imgB6]
  },
  {
    id: 3,
    name: 'Mandarin Collar',
    description: 'Band collar style — elegant eastern-inspired design.',
    color: 'from-amber-600/30 to-amber-900/30',
    border: 'border-amber-500/30',
    icon: '🏮',
    price: '₹400',
    images: [imgD1, imgD2, imgD3, imgD4, imgD5]
  },
  {
    id: 4,
    name: 'Casual Linen',
    description: 'Breathable linen shirt perfect for summer and casual wear.',
    color: 'from-emerald-600/30 to-emerald-900/30',
    border: 'border-emerald-500/30',
    icon: '🌿',
    price: '₹350',
    images: [imgE1, imgE2, imgE3, imgE4, imgE5, imgE6]
  },
  {
    id: 5,
    name: 'Kurta Style',
    description: 'Traditional Indian kurta shirt with intricate stitch patterns.',
    color: 'from-orange-600/30 to-orange-900/30',
    border: 'border-orange-500/30',
    icon: '🪷',
    price: '₹550',
    images: [imgF1, imgF2, imgF3, imgF4, imgF5, imgF6, imgF7, imgF8, imgF9]
  },
  {
    id: 6,
    name: 'Party Wear',
    description: 'Designer shirt with satin finish for parties and events.',
    color: 'from-pink-600/30 to-pink-900/30',
    border: 'border-pink-500/30',
    icon: '🎉',
    price: '₹700',
    images: [imgG1, imgG2, imgG3, imgG4, imgG5, imgG6, imgG7, imgG8, imgG9]
  },
  {
    id: 7,
    name: 'Casual Half-Sleeve',
    description: 'Comfortable half-sleeve shirt for everyday casual look.',
    color: 'from-teal-600/30 to-teal-900/30',
    border: 'border-teal-500/30',
    icon: '☀️',
    price: '₹300',
    images: [imgH1, imgH2, imgH3, imgH4, imgH5, imgH6]
  },
  {
    id: 8,
    name: 'Premium Uniform',
    description: 'High-quality full-sleeve uniform shirt suitable for college students and employees, offering a clean, professional, and comfortable look for daily wear.',
    color: 'from-blue-600/30 to-blue-900/30',
    border: 'border-blue-500/30',
    icon: '👔',
    price: '₹650',
    images: [imgI1, imgI2, imgI3, imgI4, imgI5, imgI6]
  }
];
