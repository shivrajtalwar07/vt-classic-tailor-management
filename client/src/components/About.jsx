import React from 'react';
import { Scissors, Ruler, ShieldCheck, Clock, MapPin, Banknote, Truck } from 'lucide-react';
import Navbar from './Navbar';
import ownerImg from '../img/ownnner.png';

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neutral-600 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-amber-500/30 shadow-2xl relative">
              <img
                src={ownerImg}
                alt="Iranna Talwar - Owner"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif text-white">Iranna Talwar</h1>
          <p className="text-amber-500 tracking-widest uppercase mt-4 text-sm font-medium">Founder & Master Tailor</p>
        </div>
      </section>

      {/* Master Craftsmanship Section */}
      <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">Master Craftsmanship</h2>
            <p className="text-neutral-400 leading-relaxed mb-6 italic">
              "Every stitch is a testament to our profound respect for the tailoring arts."
            </p>
            <p className="text-neutral-400 leading-relaxed mb-6">
              With over <span className="text-amber-500 font-semibold">31 years of experience</span>, Iranna Talwar brought a wealth of knowledge and craftsmanship to VT Clasic Tailor. From 2007 to 2020, Iranna honed his skills in Pune, gaining expertise that has been instrumental in our success.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Our dedication to excellence and attention to detail ensures that each piece we create is a perfect fit for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-amber-500/50 transition-colors shadow-lg">
              <Clock className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-2xl text-white font-serif mb-2">31+ Years</h3>
              <p className="text-sm text-neutral-500">Of combined tailoring experience</p>
            </div>
            <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-amber-500/50 transition-colors mt-8 shadow-lg">
              <MapPin className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-2xl text-white font-serif mb-2">Pune Trained</h3>
              <p className="text-sm text-neutral-500">Expertise honed from 2007-2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section (Timeline) */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Our Journey</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-400 font-light max-w-3xl mx-auto">
              Premium custom designing & tailoring services for men and women delivered at your doorstep.
            </p>
          </div>

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">

            {/* 2015-2017 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 text-amber-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Scissors className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl shadow-xl hover:border-amber-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-amber-500 font-bold">2015 - 2017</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">The Beginning</span>
                </div>
                <div className="text-white font-serif text-xl mb-3">Darzi on Call</div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  What started as ‘Darzi on Call’, a small home grown startup, became an instant hit with clients from Day One. Our humble beginnings were supported by 6 in-house tailors and 6 machines.
                </p>
              </div>
            </div>

            {/* 2017-2020 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 text-amber-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Ruler className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl shadow-xl hover:border-amber-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-amber-500 font-bold">2017 - 2020</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">Eureka</span>
                </div>
                <div className="text-white font-serif text-xl mb-3">Paving the Way</div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  We grew to acquire 20 machines and have 20 in-house tailors working with us full time. We had started paving our way forward to achieve results with nothing but our work to speak for us.
                </p>
              </div>
            </div>

            {/* 2020-2021 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 text-amber-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl shadow-xl hover:border-amber-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-amber-500 font-bold">2020 - 2021</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">Pandemic</span>
                </div>
                <div className="text-white font-serif text-xl mb-3">Service & Spirit</div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  When the pandemic wreaked chaos, we started working round the clock to make hospital uniforms and served the industry through its toughest times. We survived and lived to see a brighter tomorrow.
                </p>
              </div>
            </div>

            {/* 2021-2022 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 text-amber-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Truck className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl shadow-xl hover:border-amber-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-amber-500 font-bold">2021 - 2022</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">Transformation</span>
                </div>
                <div className="text-white font-serif text-xl mb-3">Fashion Excellence</div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  We expanded operations with state-of-the-art machinery and top-class tailoring. Evolving into an epitome of designing mastery infusion innovation into every stitch.
                </p>
              </div>
            </div>

            {/* 2023 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-amber-500 bg-amber-500 text-neutral-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Scissors className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-amber-600/10 border border-amber-500/50 p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-amber-500 font-bold">2023</span>
                  <span className="text-xs uppercase tracking-widest text-amber-500">Go Global</span>
                </div>
                <div className="text-white font-serif text-xl mb-3">Tailorworks Reborn</div>
                <p className="text-neutral-200 text-sm leading-relaxed font-medium">
                  Say hello to the new us: Tailorworks. Rebranded and reinvented, ready to stitch together a world of Global style and sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Why Choose Us?</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
              Tailorworks brings the best and latest fashion trends to life. Every garment tells a story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-950 p-10 border border-neutral-800 hover:border-amber-500/50 transition-all rounded-3xl group shadow-lg">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
                <Banknote className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Low Cost</h3>
              <p className="text-neutral-400 leading-relaxed">
                We believe premium tailoring shouldn't break the bank. Enjoy competitive, low pricing for top-tier craftsmanship.
              </p>
            </div>

            <div className="bg-neutral-950 p-10 border border-neutral-800 hover:border-amber-500/50 transition-all rounded-3xl group shadow-lg">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
                <ShieldCheck className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Best Quality</h3>
              <p className="text-neutral-400 leading-relaxed">
                We never compromise on quality. Every stitch is placed with precision using the best materials available (luxury & sustainable fabrics).
              </p>
            </div>

            <div className="bg-neutral-950 p-10 border border-neutral-800 hover:border-amber-500/50 transition-all rounded-3xl group shadow-lg">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
                <Truck className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Home Delivery</h3>
              <p className="text-neutral-400 leading-relaxed">
                Enjoy the convenience of doorstep & online delivery on all completed orders. Bringing bespoke services straight to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Ending Call to Action */}
      <section className="py-20 text-center px-6 relative overflow-hidden bg-neutral-950 border-t border-neutral-800">
        <div className="absolute inset-0 bg-amber-600/5 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Scissors className="w-12 h-12 text-amber-500/50 mx-auto mb-8" />
          <h2 className="text-3xl font-serif text-white mb-6">Connect for More</h2>
          <p className="text-xl text-neutral-400 leading-relaxed font-light mb-10">
            Join us on this fashionable journey like never before. We look forward to working with you and building lasting relationships based on trust and mutual success.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-amber-500 uppercase tracking-widest text-sm font-bold">
            <span className="flex items-center gap-2"><Scissors className="w-4 h-4" /> Exclusive Design</span>
            <span className="flex items-center gap-2"><Ruler className="w-4 h-4" /> Perfect Fit</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Expert Craftsmanship</span>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-neutral-600 border-t border-neutral-900 border-t-neutral-800">
        &copy; {new Date().getFullYear()} VT Clasic Tailor. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
