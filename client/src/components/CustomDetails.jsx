import React, { useEffect, useRef } from 'react';
import { Shirt, Ruler, Scissors, CheckCircle, ArrowLeft, Star, ChevronRight, Package, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import gsap from 'gsap';

// Importing some placeholder images for the layout
import clotheImg from '../img/t1.webp';
import pantImg from '../img/t2.png';
import aiImg from '../img/t3.webp';

const CustomDetails = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".info-section", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            gsap.from(".hero-text", {
                x: -30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: <Shirt className="w-6 h-6 text-amber-500" />,
            title: "Premium Fabrics",
            description: "We source only the finest Egyptian cotton, Italian silks, and Merino wools for our custom creations."
        },
        {
            icon: <Ruler className="w-6 h-6 text-amber-500" />,
            title: "Perfect Fit Guarantee",
            description: "With our advanced 24-point measurement system, we guarantee a fit that feels like a second skin."
        },
        {
            icon: <Clock className="w-6 h-6 text-amber-500" />,
            title: "Expert Craftsmanship",
            description: "Each garment is masterfully cut and hand-finished by tailors with decades of experience."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
            title: "Lifetime Support",
            description: "Free alterations and repairs for up to 12 months to ensure your garment always looks its best."
        }
    ];

    const steps = [
        { id: "01", title: "Select Your Shop", desc: "Choose from our network of partner tailors in your neighborhood." },
        { id: "02", title: "Pick Your Style", desc: "Browse through our collection of collars, cuffs, and pocket designs." },
        { id: "03", title: "Measurements", desc: "Visit the shop or provide measurements for a bespoke fit." },
        { id: "04", title: "Handcrafting", desc: "Our master tailors begin the precise cutting and stitching process." },
        { id: "05", title: "Delivery", desc: "Receive your custom-made garment right at your doorstep." }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-amber-600 selection:text-white pb-20" ref={containerRef}>
            <Navbar />

            {/* HERO SECTION */}
            <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[150px] -mr-40 -mt-40 pointer-events-none"></div>
                
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-neutral-500 hover:text-amber-500 transition-colors mb-10 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Dashboard</span>
                </button>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-8 hero-text">
                            <Sparkles className="w-4 h-4" />
                            <span>The Art of Bespoke</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 hero-text leading-[1.1]">
                            The World of <br />
                            <span className="text-amber-600">Custom Mastery</span>
                        </h1>
                        <p className="text-neutral-400 text-lg font-light mb-10 max-w-xl hero-text leading-relaxed">
                            Every garment tells a story. At VT Tailore, we combine traditional craftsmanship with modern technology to create clothes that are uniquely yours.
                        </p>
                        <div className="flex gap-4 hero-text">
                             <button 
                                onClick={() => navigate('/customize-shirt')}
                                className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-2xl font-medium transition-all shadow-xl shadow-amber-600/30"
                             >
                                Start Your Design
                             </button>
                             <button className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white px-8 py-4 rounded-2xl font-medium transition-all">
                                View Gallery
                             </button>
                        </div>
                    </div>

                    <div className="relative hero-text">
                         <div className="aspect-[4/5] bg-neutral-900 rounded-[40px] overflow-hidden border border-neutral-800 shadow-3xl">
                            <img src={clotheImg} alt="Custom Tailoring" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                            
                            <div className="absolute bottom-10 left-10 right-10 p-8 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-3xl">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-2 bg-amber-500/20 rounded-lg">
                                        <ShieldCheck className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <span className="text-white text-sm font-medium">Certified Master Tailors</span>
                                </div>
                                <p className="text-neutral-400 text-sm font-light">"Our mission is to bring high-end bespoke tailoring accessibility to everyone with uncompromising quality."</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 space-y-32">
                
                {/* FEATURES GRID */}
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 info-section">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-[32px] hover:border-amber-500/30 transition-all group">
                            <div className="w-14 h-14 bg-neutral-950 rounded-2xl flex items-center justify-center mb-6 border border-neutral-800 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </section>

                {/* THE PROCESS */}
                <section className="info-section">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-serif text-white mb-4">How It Works</h2>
                        <p className="text-neutral-500 font-light">Five simple steps to your new favorite outfit.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-0 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-[35px] left-0 w-full h-[1px] bg-neutral-800 hidden md:block"></div>
                        
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative text-center px-4 mb-12 md:mb-0">
                                <div className="w-[70px] h-[70px] bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 text-amber-500 font-serif text-xl border-t-amber-600/50">
                                    {step.id}
                                </div>
                                <h3 className="text-white font-medium mb-3">{step.title}</h3>
                                <p className="text-neutral-500 text-xs leading-relaxed max-w-[150px] mx-auto">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PRODUCT CATEGORIES */}
                <section className="info-section">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-serif text-white">Full Custom Catalog</h2>
                        <div className="h-px flex-1 bg-neutral-800/50"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Category 1 */}
                        <div className="group relative rounded-[40px] overflow-hidden border border-neutral-800 aspect-[3/4]">
                             <img src={clotheImg} alt="Shirts" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                             <div className="absolute inset-0 bg-neutral-950/60 transition-opacity group-hover:opacity-40"></div>
                             <div className="absolute bottom-0 left-0 p-10 w-full">
                                <p className="text-amber-500 text-sm font-bold tracking-widest mb-2">BESPOKE</p>
                                <h3 className="text-3xl font-serif text-white mb-6">Dress Shirts</h3>
                                <button className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl transition-all border border-white/10">
                                    Browse Styles <ChevronRight className="w-4 h-4" />
                                </button>
                             </div>
                        </div>

                        {/* Category 2 */}
                        <div className="group relative rounded-[40px] overflow-hidden border border-neutral-800 aspect-[3/4]">
                             <img src={pantImg} alt="Pants" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                             <div className="absolute inset-0 bg-neutral-950/60 transition-opacity group-hover:opacity-40"></div>
                             <div className="absolute bottom-0 left-0 p-10 w-full">
                                <p className="text-amber-500 text-sm font-bold tracking-widest mb-2">PRECISION</p>
                                <h3 className="text-3xl font-serif text-white mb-6">Custom Pants</h3>
                                <button className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl transition-all border border-white/10">
                                    Coming Soon <ChevronRight className="w-4 h-4" />
                                </button>
                             </div>
                        </div>

                        {/* Category 3 */}
                        <div className="group relative rounded-[40px] overflow-hidden border border-neutral-800 aspect-[3/4]">
                             <img src={aiImg} alt="Suits" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                             <div className="absolute inset-0 bg-neutral-950/60 transition-opacity group-hover:opacity-40"></div>
                             <div className="absolute bottom-0 left-0 p-10 w-full">
                                <p className="text-amber-500 text-sm font-bold tracking-widest mb-2">LUXURY</p>
                                <h3 className="text-3xl font-serif text-white mb-6">Full Suits</h3>
                                <button className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl transition-all border border-white/10">
                                    Inquire Now <ChevronRight className="w-4 h-4" />
                                </button>
                             </div>
                        </div>
                    </div>
                </section>

                {/* CALL TO ACTION */}
                <section className="info-section pb-20">
                    <div className="bg-amber-600 rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-amber-600/20">
                        {/* Decorative Patterns */}
                         <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Scissors className="w-64 h-64 rotate-12" />
                         </div>
                         <div className="absolute bottom-0 left-0 p-10 opacity-10">
                            <Ruler className="w-64 h-64 -rotate-12" />
                         </div>

                         <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to define <br /> your style?</h2>
                            <p className="text-amber-100 text-xl font-light mb-12 max-w-2xl mx-auto">
                                Join thousands of satisfied customers who have discovered the difference of VT Tailore.
                            </p>
                            <button 
                                onClick={() => navigate('/customize-shirt')}
                                className="bg-white text-amber-600 px-12 py-5 rounded-3xl font-bold text-xl hover:bg-neutral-100 transition-all shadow-2xl"
                            >
                                Get Started Today
                            </button>
                         </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default CustomDetails;
