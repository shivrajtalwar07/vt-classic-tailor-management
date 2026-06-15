import { Mail, Lock, User, Scissors, Phone, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import emailjs from '@emailjs/browser';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword || !phone || !address) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    axios.post("http://localhost:3000/api/auth/register", {
      name,
      email,
      password,
      phone,
      address,
    })
      .then((res) => {
        console.log(res.data);
        
        // Welcome Email via EmailJS
        const emailParams = {
          user_name: name,
          user_email: email,
          user_id: res.data._id,
          message: `Welcome to VT Classical Tailor Shop – Where Style Meets Perfection. Your unique ID is: ${res.data._id}`
        };

        emailjs.send(
          'service_g3krza6',
          'template_hoj5jvk',
          emailParams,
          'W_0f1xWAeWIF_XIVr'
        ).then(() => {
          console.log('Welcome email sent with User ID!');
        }).catch((err) => {
          console.error('Email failed:', err);
        });

        // Show success overlay
        setShowSuccess(true);
        toast.success("Registration Successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data?.code === 11000) {
          toast.error("Email already registered");
        } else {
          toast.error("Registration failed. Please try again.");
        }
      });
  };

  return (
    <div className="min-h-screen flex bg-neutral-950 font-sans selection:bg-amber-600 selection:text-white relative">

      {/* Registration Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/90 backdrop-blur-md">
          <div className="text-center animate-fade-in">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500 animate-bounce" style={{ animationDuration: '1.5s' }}>
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-serif text-white mb-3">Registration Successful!</h2>
            <p className="text-neutral-400 text-lg">Welcome to VT Clasic Tailor. Redirecting to login...</p>
          </div>
        </div>
      )}

      {/* LEFT BRAND SECTION */}
      <div className="hidden md:flex w-1/2 bg-neutral-900 border-r border-neutral-800 text-white flex-col justify-center px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('../img/t3.webp')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="relative z-10 flex flex-col gap-6">
          <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 mb-4">
            <Scissors className="text-amber-500 w-8 h-8" />
          </div>
          <h1 className="text-5xl font-serif font-bold text-white leading-tight">VT Clasic Tailor</h1>
          <p className="text-xl text-neutral-400 font-light border-l-2 border-amber-500 pl-4 py-2">
            Join the legacy of bespoke craftsmanship and elegant style.
          </p>
        </div>
      </div>

      {/* RIGHT REGISTER SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
        <div className="bg-neutral-900/80 backdrop-blur-md w-full max-w-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-neutral-800 relative z-10 my-8">

          <div className="md:hidden flex items-center gap-2 text-amber-500 font-serif text-xl mb-8">
            <Scissors className="w-6 h-6" />
            <span className="font-bold">VT Clasic Tailor</span>
          </div>

          <h2 className="text-3xl font-serif text-white mb-3">
            Create an account
          </h2>
          <p className="text-sm text-neutral-400 mb-8 font-light">
            Begin your journey with VT Clasic Tailor
          </p>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* FULL NAME */}
            <div>
              <label className="text-sm font-medium text-neutral-300">Full Name</label>
              <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-xl px-4 mt-1.5 focus-within:border-amber-500 transition-colors">
                <User size={18} className="text-neutral-500" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-3 bg-transparent outline-none text-white placeholder-neutral-600"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-neutral-300">Email Address</label>
              <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-xl px-4 mt-1.5 focus-within:border-amber-500 transition-colors">
                <Mail size={18} className="text-neutral-500" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-3 bg-transparent outline-none text-white placeholder-neutral-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-neutral-300">Password</label>
              <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-xl px-4 mt-1.5 focus-within:border-amber-500 transition-colors">
                <Lock size={18} className="text-neutral-500" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-3 bg-transparent outline-none text-white placeholder-neutral-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm font-medium text-neutral-300">Confirm Password</label>
              <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-xl px-4 mt-1.5 focus-within:border-amber-500 transition-colors">
                <Lock size={18} className="text-neutral-500" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-3 bg-transparent outline-none text-white placeholder-neutral-600"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium text-neutral-300">Phone Number</label>
              <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-xl px-4 mt-1.5 focus-within:border-amber-500 transition-colors">
                <Phone size={18} className="text-neutral-500" />
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="w-full px-3 py-3 bg-transparent outline-none text-white placeholder-neutral-600"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <label className="text-sm font-medium text-neutral-300">Full Address</label>
              <div className="flex items-start bg-neutral-950 border border-neutral-800 rounded-xl px-4 mt-1.5 focus-within:border-amber-500 transition-colors py-3">
                <MapPin size={18} className="text-neutral-500 mt-1" />
                <textarea
                  placeholder="123 Street, City, Country"
                  rows={2}
                  className="w-full px-3 bg-transparent outline-none text-white placeholder-neutral-600 resize-none"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-3.5 rounded-xl transition-colors shadow-lg shadow-amber-600/20 mt-6">
              Create Account
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-sm text-center text-neutral-500 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-500 hover:text-amber-400 font-medium transition-colors">
              Sign In here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
