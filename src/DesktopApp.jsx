import React, { useState, useEffect } from 'react';

const images = [
  '/images/20260710_220225.jpg',
  '/images/20260710_220307.jpg',
  '/images/20260710_220314.jpg',
  '/images/20260710_220325.jpg',
  '/images/Snapchat-1156537623.jpg'
];

const googleMapsLink = "https://www.google.com/maps/place/THE+W+GYM/@30.3065838,78.0074595,17z/data=!3m1!4b1!4m6!3m5!1s0x39092b1ab90ebfd3:0xab00e003cacdcef2!8m2!3d30.3065838!4d78.0100344!16s%2Fg%2F11tmn65lgn?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D";

function DesktopApp() {
  const [currentBgIndex, setCurrentBgIndex] = useState(1); // Start with second image
  const [openFaq, setOpenFaq] = useState(null);
  const [isDark, setIsDark] = useState(true); // Dark mode default

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    { q: "Where exactly are you located?", a: "We are located at Infinity Tower, GMS Rd, near Reliance Market, Niranjanpur, Dehradun." },
    { q: "Do you have parking available?", a: "Yes, we offer dedicated basement parking for all our members, ensuring hassle-free visits." },
    { q: "What are your membership fees?", a: "Our pricing is simple and transparent at just ₹2k per month with no hidden fees or complicated tiers." },
    { q: "Do you provide personal training?", a: "Yes, we have genuine, professional trainers available on the floor to help guide your fitness journey." },
    { q: "Is the gym usually crowded?", a: "We pride ourselves on having a spacious floor plan with ample room for everyone to lift, stretch, and move comfortably even during peak hours." }
  ];

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-white dark:bg-[#0a0a0a] text-[#1f2329] dark:text-white font-sans selection:bg-[#1f2329] dark:selection:bg-white selection:text-white dark:selection:text-[#0a0a0a] pb-0 transition-colors duration-300`}>
      
      {/* Desktop Navbar (Overlay on Hero) */}
      <nav className="absolute top-0 w-full z-50">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center text-white">
          <div className="text-2xl font-black tracking-tight flex items-center gap-3 drop-shadow-md">
            <div className="w-10 h-10 bg-white text-[#1f2329] flex items-center justify-center rounded uppercase font-black text-lg">W</div>
            THE W GYM
          </div>
          
          <div className="flex space-x-8 text-sm font-bold drop-shadow-md items-center">
            <a href="#tour" className="hover:text-gray-300 transition-colors">Tour</a>
            <a href="#planner" className="hover:text-gray-300 transition-colors">Equipment</a>
            <a href="#reviews" className="hover:text-gray-300 transition-colors">Reviews</a>
            <a href="#membership" className="hover:text-gray-300 transition-colors">Plans</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            <a href="tel:+918937017434" className="bg-white text-[#1f2329] px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
              Join Now &rarr;
            </a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="ml-4 bg-black/20 hover:bg-black/40 border border-white/20 backdrop-blur p-2 rounded-full transition-all"
              title="Toggle Theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-200" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-black overflow-hidden">
        {/* Background Image that changes */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out opacity-60"
          style={{ backgroundImage: `url(${images[currentBgIndex]})` }}
        ></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 h-full flex flex-col justify-center">
          <p className="text-gray-300 font-bold tracking-widest text-xs mb-4 uppercase">Premium Fitness — No Compromises</p>
          <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 max-w-3xl tracking-tight">
            Elevate your training at THE W GYM.
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
            Experience the best gym facility in Dehradun. Located at Infinity Tower, we provide genuine trainers, ample space, and the finest environment for your fitness journey.
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:+918937017434" className="bg-white text-[#1f2329] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Contact Us &rarr;
            </a>
            <a href="#tour" className="bg-transparent border border-gray-400 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              View Tour
            </a>
          </div>
        </div>

        {/* Slider Thumbnails (Bottom Right) */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-3">
          {images.map((src, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentBgIndex(idx)}
              className={`w-24 h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                currentBgIndex === idx ? 'border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img src={src} className="w-full h-full object-cover" alt={`Preview ${idx + 1}`} />
            </button>
          ))}
        </div>
      </section>

      {/* 3D Model Viewer Section */}
      <section id="planner" className="max-w-[1200px] mx-auto px-8 py-32 text-center">
        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Real Equipment Library</p>
        <h2 className="text-5xl font-black text-[#1f2329] dark:text-white mb-6 tracking-tight transition-colors">Real gear, modeled in 3D.</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed transition-colors">
          Every rack, bench, and machine is built from the manufacturer's real dimensions. Spin the model — this is the exact geometry waiting for you on the gym floor.
        </p>

        {/* 3D Viewer Container */}
        <div className="bg-[#f8f9fa] dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 h-[600px] relative overflow-hidden shadow-inner flex flex-col items-center transition-colors duration-300">
          {/* Top Left Text Layer */}
          <div className="absolute top-6 left-6 text-left z-10 pointer-events-none bg-white/70 dark:bg-black/70 backdrop-blur-[4px] px-4 py-2 rounded-xl border border-transparent dark:border-gray-800 transition-colors">
            <h3 className="text-xl font-black text-[#1f2329] dark:text-white">Equipments we have</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Interactive 3D Model</p>
          </div>

          {/* Sketchfab Iframe */}
          <div className="absolute top-[-70px] left-0 w-full h-[calc(100%+140px)]">
            <iframe 
              title="Equipments we have" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              src={`https://sketchfab.com/models/c6ec59a679fc45649575e8c91ec53215/embed?ui_theme=${isDark ? 'dark' : 'light'}&ui_infos=0&ui_watermark=0&ui_stop=0&transparent=1`} 
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3 Images Section */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="h-[400px] rounded-2xl overflow-hidden relative group">
            <img src={images[0]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Spacious Floor" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 pr-8">
              <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Built For Space</p>
              <h3 className="text-2xl font-bold text-white mb-2">Spacious Floors</h3>
              <p className="text-gray-300 text-sm">Ample room to lift, stretch, and move without feeling crowded.</p>
            </div>
          </div>

          <div className="h-[400px] rounded-2xl overflow-hidden relative group">
            <img src={images[1]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Top Tier Gear" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 pr-8">
              <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Built For Performance</p>
              <h3 className="text-2xl font-bold text-white mb-2">Top-Tier Gear</h3>
              <p className="text-gray-300 text-sm">Experience the finest quality machines and free weights available.</p>
            </div>
          </div>

          <div className="h-[400px] rounded-2xl overflow-hidden relative group">
            <img src={images[2]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Expert Environment" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 pr-8">
              <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Built For You</p>
              <h3 className="text-2xl font-bold text-white mb-2">Expert Environment</h3>
              <p className="text-gray-300 text-sm">Train in a healthy, clean atmosphere with genuine professional trainers.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Wide Image Section with Hover Cards */}
      <section className="relative bg-[#111] pt-32 pb-24 border-y border-zinc-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url(${images[3]})`, filter: 'grayscale(100%)' }}
        ></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What's Inside</p>
          <h2 className="text-5xl font-extrabold text-white mb-16 tracking-tight">Real gyms. Real gear.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Hover Card 1 */}
            <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-transparent dark:border-gray-800">
              <div className="h-64 relative bg-gray-100 dark:bg-gray-800">
                <img src={images[0]} className="w-full h-full object-cover opacity-90" alt="Cardio Zone" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1f1f1f] via-transparent to-transparent"></div>
              </div>
              <div className="p-8 pb-10 bg-white dark:bg-[#1f1f1f]">
                <h3 className="text-xl font-bold text-[#1f2329] dark:text-white mb-2">Cardio & Warmup</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">By The W Gym</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded text-xs font-bold">TREADMILLS</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded text-xs font-bold">CYCLES</span>
                </div>
              </div>
            </div>

            {/* Hover Card 2 */}
            <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-transparent dark:border-gray-800">
              <div className="h-64 relative bg-gray-100 dark:bg-gray-800">
                <img src={images[1]} className="w-full h-full object-cover opacity-90" alt="Free Weights" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1f1f1f] via-transparent to-transparent"></div>
              </div>
              <div className="p-8 pb-10 bg-white dark:bg-[#1f1f1f]">
                <h3 className="text-xl font-bold text-[#1f2329] dark:text-white mb-2">Free Weights Area</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">By The W Gym</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded text-xs font-bold">DUMBBELLS</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded text-xs font-bold">BENCHES</span>
                </div>
              </div>
            </div>

            {/* Hover Card 3 */}
            <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-transparent dark:border-gray-800">
              <div className="h-64 relative bg-gray-100 dark:bg-gray-800">
                <img src={images[2]} className="w-full h-full object-cover opacity-90" alt="Strength Machines" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1f1f1f] via-transparent to-transparent"></div>
              </div>
              <div className="p-8 pb-10 bg-white dark:bg-[#1f1f1f]">
                <h3 className="text-xl font-bold text-[#1f2329] dark:text-white mb-2">Strength Machines</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">By The W Gym</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded text-xs font-bold">CABLES</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded text-xs font-bold">LEG PRESS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="border-t border-gray-800 pt-12 flex justify-between text-white pb-4">
            <div>
              <h4 className="text-3xl font-black mb-1">50+</h4>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Premium Machines</p>
            </div>
            <div>
              <h4 className="text-3xl font-black mb-1">2k/mo</h4>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Transparent Pricing</p>
            </div>
            <div>
              <h4 className="text-3xl font-black mb-1">4.7</h4>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Google Rating</p>
            </div>
            <div>
              <h4 className="text-3xl font-black mb-1">100%</h4>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Steps Section */}
      <section className="bg-white dark:bg-[#0a0a0a] py-32 border-b border-gray-200 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-8">
          
          <div className="flex flex-col md:flex-row gap-16 mb-40">
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Features</p>
              <h2 className="text-5xl font-black text-[#1f2329] dark:text-white leading-tight max-w-md transition-colors">
                Everything you need to reach your goals.
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-6 max-w-sm text-lg transition-colors">
                A focused environment for real training — no fluff, no learning curve. Just results.
              </p>
            </div>
            
            <div className="flex-1 flex flex-col gap-10 mt-12 md:mt-0">
              <div className="flex gap-6">
                <span className="text-gray-300 dark:text-gray-700 font-bold text-sm mt-1">01</span>
                <div>
                  <h4 className="text-lg font-bold text-[#1f2329] dark:text-white mb-2 transition-colors">Prime Location & Parking</h4>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">Located at Infinity Tower on GMS Rd with dedicated basement parking for hassle-free access.</p>
                </div>
              </div>
              <div className="flex gap-6 border-t border-gray-100 dark:border-gray-800 pt-10 transition-colors">
                <span className="text-gray-300 dark:text-gray-700 font-bold text-sm mt-1">02</span>
                <div>
                  <h4 className="text-lg font-bold text-[#1f2329] dark:text-white mb-2 transition-colors">Genuine Professional Trainers</h4>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">Our trainers are experienced, polite, and dedicated to maintaining a healthy environment.</p>
                </div>
              </div>
              <div className="flex gap-6 border-t border-gray-100 dark:border-gray-800 pt-10 transition-colors">
                <span className="text-gray-300 dark:text-gray-700 font-bold text-sm mt-1">03</span>
                <div>
                  <h4 className="text-lg font-bold text-[#1f2329] dark:text-white mb-2 transition-colors">Immaculate Cleanliness</h4>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">Enjoy a neat, clean facility complete with a cafeteria to fuel up post-workout.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-4xl font-black text-[#1f2329] dark:text-white transition-colors">Three steps to get started.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-8 h-8 bg-[#1f2329] dark:bg-white text-white dark:text-[#111] rounded flex items-center justify-center font-bold mb-6">1</div>
              <h4 className="text-xl font-bold text-[#1f2329] dark:text-white mb-3">Visit the Gym</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Drop by Infinity Tower. Check out our spacious floors, top-tier equipment, and meet the trainers.</p>
            </div>
            
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-8 h-8 bg-[#1f2329] dark:bg-white text-white dark:text-[#111] rounded flex items-center justify-center font-bold mb-6">2</div>
              <h4 className="text-xl font-bold text-[#1f2329] dark:text-white mb-3">Choose your plan</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Simple transparent pricing at ₹2k/month. No hidden fees, just full access to everything.</p>
            </div>
            
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-8 h-8 bg-[#1f2329] dark:bg-white text-white dark:text-[#111] rounded flex items-center justify-center font-bold mb-6">3</div>
              <h4 className="text-xl font-bold text-[#1f2329] dark:text-white mb-3">Start Training</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Jump right in. Join our community and elevate your fitness journey from day one.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-[#0a0a0a] py-32 border-b border-gray-200 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="text-center md:text-left mb-16">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1f2329] dark:text-white tracking-tight transition-colors">Quick answers.</h2>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-t border-gray-100 dark:border-gray-800 last:border-b transition-colors">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className="font-bold text-[#1f2329] dark:text-gray-200 text-lg group-hover:text-black dark:group-hover:text-white transition-colors">{faq.q}</span>
                  <span className="text-gray-300 dark:text-gray-600 text-2xl font-light ml-4 transition-transform duration-300" style={{ transform: openFaq === idx ? 'rotate(45deg)' : 'none' }}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1f2329] dark:bg-[#050505] text-white pt-24 pb-12 transition-colors">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="text-2xl font-black tracking-tight flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white text-[#1f2329] flex items-center justify-center rounded uppercase font-black text-lg">W</div>
              THE W GYM
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium fitness, exceptional equipment, and a community built on results. Located in the heart of Dehradun.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Location</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Infinity tower, GMS Rd,</p>
              <p>near reliance Market, Mahadev Vihar,</p>
              <p>Shakti Enclave, Niranjanpur,</p>
              <p>Dehradun, Uttarakhand 248171</p>
              <div className="mt-6">
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="inline-block text-white border-b border-gray-600 hover:border-white transition-colors pb-1 font-semibold text-sm">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p>Visit us during opening hours or connect on-site to enroll.</p>
              <p className="font-semibold text-white text-lg mt-2">+91 8937017434</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>&copy; {new Date().getFullYear()} THE W GYM. All rights reserved.</div>
          <div className="mt-4 md:mt-0">
            Website made by <span className="text-white font-medium">Shadan</span> & <span className="text-white font-medium">Dev</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DesktopApp;
