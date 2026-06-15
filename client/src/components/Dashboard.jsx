import React, { useEffect, useRef, useState } from 'react';
import { Shirt, Ruler, Sparkles, Wand2, Scissors, User, LogOut, ChevronRight, LayoutDashboard, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import gsap from 'gsap';

// Existing images from the project
import clotheImg from '../img/t1.webp';
import aiImg from '../img/t3.webp';

const Dashboard = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        const ctx = gsap.context(() => {
            gsap.from(".dashboard-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.from(".section-header", {
                x: -30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-amber-600 selection:text-white pb-20" ref={containerRef}>
            <Navbar />

            {/* TOP BAR / HEADER */}
            <div className="pt-28 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-serif text-white mb-2 section-header">Welcome to Your Workshop</h1>
                    <p className="text-neutral-500 font-light section-header">Manage your custom designs and explore AI-powered fashion styles.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-2xl">
                        <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
                            <User className="text-amber-500 w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <p className="text-white font-medium">{user ? user.name : 'Guest User'}</p>
                            <p className="text-neutral-500 text-xs">{user ? user.email : 'Premium Member'}</p>
                        </div>
                    </div>
                    <Link
                        to="/admin"
                        className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-500 transition-all"
                        title="Admin Panel"
                    >
                        <ShieldCheck className="w-5 h-5" />
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500 transition-all"
                        title="Logout"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 space-y-16">

                {/* SECTION 1: CUSTOM INSIDE */}
                <section className="space-y-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-600/20 rounded-xl flex items-center justify-center">
                                <Scissors className="text-amber-500 w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif text-white">Custom Selection</h2>
                        </div>
                        <Link to="/custom-details" className="text-amber-500 text-sm hover:underline flex items-center gap-1">
                            View All <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* CUSTOM CLOTHES - NEW AI STYLE DESIGN */}
                    <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-[40px] p-1 shadow-2xl">
                        <div className="dashboard-card relative overflow-hidden rounded-[38px] p-8 md:p-12">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>

                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-6">
                                        <Shirt className="w-4 h-4" />
                                        <span>Premium Bespoke</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                                        Custom Clothes <br />
                                        <span className="text-neutral-600">Tailored to Perfection</span>
                                    </h2>
                                    <p className="text-neutral-400 text-lg font-light mb-8 max-w-md">
                                        Tailored shirts and jackets crafted with the finest fabrics of your choice. Experience the ultimate comfort and style.
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        <Link to="/customize-shirt" className="flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-2xl font-medium transition-all shadow-xl shadow-amber-600/30">
                                            <Wand2 className="w-5 h-5" />
                                            Start Customizing
                                        </Link>
                                        <button className="flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-2xl font-medium transition-all">
                                            Learn More
                                        </button>
                                    </div>

                                    {/* STATS */}
                                    <div className="mt-12 pt-12 border-t border-neutral-800/80 flex gap-8">
                                        <div>
                                            <p className="text-2xl font-serif text-white">100%</p>
                                            <p className="text-neutral-500 text-sm">Handmade</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-serif text-white">50+</p>
                                            <p className="text-neutral-500 text-sm">Fabrics</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-serif text-white">10yr</p>
                                            <p className="text-neutral-500 text-sm">Heritage</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="aspect-square bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700 shadow-3xl">
                                        <img
                                            src={clotheImg}
                                            alt="Custom Clothes"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent mix-blend-overlay"></div>
                                    </div>

                                    {/* FLOATING UI ELEMENTS */}
                                    <div className="absolute -top-4 -right-4 bg-neutral-900 border border-neutral-700 p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                                        <div className="flex items-center gap-2">
                                            <Scissors className="text-amber-500 w-4 h-4" />
                                            <span className="text-xs text-white font-medium">Precision Cut</span>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-amber-500/10 rounded-xl">
                                                <Shirt className="text-amber-500 w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-neutral-500">Selected Fabric</p>
                                                <p className="text-sm text-white font-medium">Oxford Egyptian Cotton</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </section>

                {/* SECTION 2: AI SUGGESTIONS */}
                <section>
                    <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-[40px] p-1 shadow-2xl">
                        <div className="dashboard-card relative overflow-hidden rounded-[38px] p-8 md:p-12">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>

                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-medium mb-6">
                                        <Sparkles className="w-4 h-4" />
                                        <span>AI Powered Designer</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                                        Smart AI Suggestions <br />
                                        <span className="text-neutral-600">Tailored to You</span>
                                    </h2>
                                    <p className="text-neutral-400 text-lg font-light mb-8 max-w-md">
                                        Our AI analyzes trends and your personal measurements to suggest the best styles for your body type and preferences.
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        <Link to="/ai-stylist" className="flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-2xl font-medium transition-all shadow-xl shadow-amber-600/30">
                                            <Wand2 className="w-5 h-5" />
                                            Generate Ideas
                                        </Link>
                                        <button className="flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-2xl font-medium transition-all">
                                            Learn More
                                        </button>
                                    </div>

                                    {/* STATUS METER */}
                                    <div className="mt-12 pt-12 border-t border-neutral-800/80 flex gap-8">
                                        <div>
                                            <p className="text-2xl font-serif text-white">98%</p>
                                            <p className="text-neutral-500 text-sm">Accuracy</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-serif text-white">500+</p>
                                            <p className="text-neutral-500 text-sm">Styles</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-serif text-white">24/7</p>
                                            <p className="text-neutral-500 text-sm">Assistance</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="aspect-square bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700 shadow-3xl">
                                        <img
                                            src={aiImg}
                                            alt="AI Fashion"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/40 to-transparent mix-blend-overlay"></div>
                                    </div>

                                    {/* FLOATING UI ELEMENTS */}
                                    <div className="absolute -top-4 -right-4 bg-neutral-900 border border-neutral-700 p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs text-white font-medium">Scanning Trends...</span>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-amber-500/10 rounded-xl">
                                                <LayoutDashboard className="text-amber-500 w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-neutral-500">Top Recommendation</p>
                                                <p className="text-sm text-white font-medium">Classic Slim Fit Suit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BOTTOM STATS / RECENT ACTIVITY */}
                <section className="grid sm:grid-cols-3 gap-6 pb-12">
                    <div className="dashboard-card bg-neutral-900/40 border border-neutral-800 p-6 rounded-3xl flex items-center gap-6">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                            <ShoppingBag className="text-blue-500 w-7 h-7" />
                        </div>
                        <div>
                            <p className="text-neutral-500 text-sm">Active Orders</p>
                            <p className="text-2xl font-serif text-white">02</p>
                        </div>
                    </div>
                    <div className="dashboard-card bg-neutral-900/40 border border-neutral-800 p-6 rounded-3xl flex items-center gap-6">
                        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                            <Ruler className="text-purple-500 w-7 h-7" />
                        </div>
                        <div>
                            <p className="text-neutral-500 text-sm">Saved Measures</p>
                            <p className="text-2xl font-serif text-white">05</p>
                        </div>
                    </div>
                    <div className="dashboard-card bg-neutral-900/40 border border-neutral-800 p-6 rounded-3xl flex items-center gap-6">
                        <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20">
                            <Sparkles className="text-amber-500 w-7 h-7" />
                        </div>
                        <div>
                            <p className="text-neutral-500 text-sm">AI Style Credits</p>
                            <p className="text-2xl font-serif text-white">25</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Dashboard;
