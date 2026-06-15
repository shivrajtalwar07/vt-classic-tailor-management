import { Mail, Lock, Eye, EyeOff, Scissors } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/auth/login", {
      email: email,
      password: password
    }).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data.user));
      toast.success("Login successful");
      navigate("/dashboard");
    }).catch((err) => {
      toast.error("Invalid credentials");
    })
  }

  return (
    <div className="min-h-screen flex bg-neutral-950 font-sans selection:bg-amber-600 selection:text-white">

      {/* LEFT BRAND SECTION */}
      <div className="hidden md:flex w-1/2 bg-neutral-900 border-r border-neutral-800 text-white flex-col justify-center px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('../img/t1.webp')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="relative z-10 flex flex-col gap-6">
          <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 mb-4">
            <Scissors className="text-amber-500 w-8 h-8" />
          </div>
          <h1 className="text-5xl font-serif font-bold text-white leading-tight">VT Clasic Tailor</h1>
          <p className="text-xl text-neutral-400 font-light border-l-2 border-amber-500 pl-4 py-2">
            Crafting elegance since 1993. Welcome back to our portal.
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
        <div className="bg-neutral-900/80 backdrop-blur-md w-full max-w-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-neutral-800 relative z-10">
          <div className="md:hidden flex items-center gap-2 text-amber-500 font-serif text-xl mb-8">
            <Scissors className="w-6 h-6" />
            <span className="font-bold">VT Clasic Tailor</span>
          </div>

          <h2 className="text-3xl font-serif text-white mb-3">
            Welcome back
          </h2>
          <p className="text-sm text-neutral-400 mb-8 font-light">
            Please sign in to your VT Clasic Tailor account
          </p>

          <form onSubmit={(e) => handleLogin(e)} className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-neutral-300">Email Address</label>
              <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-xl px-4 mt-2 focus-within:border-amber-500 transition-colors">
                <Mail size={18} className="text-neutral-500" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-3.5 bg-transparent outline-none text-white placeholder-neutral-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-neutral-300">Password</label>
              <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-xl px-4 mt-2 focus-within:border-amber-500 transition-colors">
                <Lock size={18} className="text-neutral-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-3 py-3.5 bg-transparent outline-none text-white placeholder-neutral-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-neutral-500 hover:text-amber-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-3.5 rounded-xl transition-colors shadow-lg shadow-amber-600/20 mt-4">
              Sign In
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-sm text-center text-neutral-500 mt-8">
            Don’t have an account?{" "}
            <Link to="/register" className="text-amber-500 hover:text-amber-400 font-medium transition-colors">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


