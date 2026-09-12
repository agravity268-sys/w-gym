import React, { useState } from 'react';

function MobileApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/images/20260710_220225.jpg',
    '/images/20260710_220307.jpg',
    '/images/20260710_220314.jpg',
    '/images/20260710_220325.jpg',
    '/images/Snapchat-1156537623.jpg'
  ];

  const googleMapsLink = "https://www.google.com/maps/place/THE+W+GYM/@30.3065838,78.0074595,17z/data=!3m1!4b1!4m6!3m5!1s0x39092b1ab90ebfd3:0xab00e003cacdcef2!8m2!3d30.3065838!4d78.0100344!16s%2Fg%2F11tmn65lgn?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="min-h-screen bg-white text-[#1f2329] font-sans selection:bg-[#1f2329] selection:text-white pb-12">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-xl font-bold tracking-tight text-[#1f2329] relative z-50 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1f2329] text-white flex items-center justify-center rounded uppercase font-black text-sm">W</div>
            THE W GYM
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
            <a href="#tour" className="hover:text-black transition-colors">Tour</a>
            <a href="#planner" className="hover:text-black transition-colors">3D Planner</a>
            <a href="#reviews" className="hover:text-black transition-colors">Reviews</a>
            <a href="#membership" className="hover:text-black transition-colors">Fees</a>
            <a href="#contact" className="hover:text-black transition-colors">Location</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center relative z-50">
            <button 
              className="text-[#1f2329] focus:outline-none p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out shadow-lg ${isMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
          <div className="flex flex-col items-center space-y-6 text-base font-semibold text-gray-700">
            <a href="#tour" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition-colors">Tour</a>
            <a href="#planner" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition-colors">3D Planner</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition-colors">Reviews</a>
            <a href="#membership" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition-colors">Fees</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition-colors">Location</a>
            
            <div className="mt-4 pt-6 border-t border-gray-100 w-3/4 text-center">
              <p className="text-xs text-gray-400">Website made by Shadan and Dev</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (3dgymplanner.com style) */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1f2329] leading-tight mb-6 tracking-tight">
            Premium Fitness & <br className="hidden lg:block" />
            Top-Tier Equipment in Dehradun
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Experience the best gym facility in the city. Located at Infinity Tower, GMS Rd, we provide genuine trainers, ample space, and the best environment for your fitness journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="tel:+918937017434" 
              className="w-full sm:w-auto bg-[#1f2329] text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-colors shadow-lg shadow-black/10 flex items-center justify-center gap-2"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a 
              href="#tour" 
              className="w-full sm:w-auto bg-white text-[#1f2329] border border-gray-300 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              View Tour
            </a>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative bg-gray-100">
            <img src={images[4]} alt="The W Gym Hero" className="w-full h-full object-cover" />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
          </div>
          {/* Decorative elements similar to modern SaaS sites */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:-left-6 lg:translate-x-0 w-max bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-[#1f2329]">Rated 4.7/5</p>
              <p className="text-xs text-gray-500">Google Reviews</p>
            </div>
          </div>
        </div>
      </header>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Interactive 3D Model Section */}
      <section id="planner" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f2329] mb-4">Real gear, modeled in 3D.</h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          Every rack, bench, and machine is built from the manufacturer's real dimensions. Pick a category and spin the model — this is the same geometry that drops into your floor plan.
        </p>



        {/* 3D Viewer Container */}
        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 h-[500px] md:h-[600px] relative overflow-hidden shadow-inner flex flex-col items-center">
          
          {/* Top Left Text Layer */}
          <div className="absolute top-6 left-6 text-left z-10 pointer-events-none bg-white/50 backdrop-blur-[2px] px-4 py-2 rounded-xl">
            <h3 className="text-xl font-black text-[#1f2329]">Equipments we have</h3>
            <p className="text-xs text-gray-500 mt-1">Interactive 3D Model</p>
          </div>

          {/* Sketchfab Iframe - Positioned to crop out top and bottom native UI */}
          <div className="absolute top-[-70px] left-0 w-full h-[calc(100%+140px)]">
            <iframe 
              title="Equipments we have" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              src="https://sketchfab.com/models/c6ec59a679fc45649575e8c91ec53215/embed?ui_theme=dark&ui_infos=0&ui_watermark=0&ui_stop=0&transparent=1" 
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Info Section / About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#1f2329] mb-12">Why Choose THE W GYM?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h3 className="font-bold text-[#1f2329] text-xl mb-3">Prime Location</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Centrally located at Infinity Tower, GMS Rd, Niranjanpur with easily accessible basement parking available.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="font-bold text-[#1f2329] text-xl mb-3">Quality Equipment</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We stock the best in class machines, free weights, and functional training gear ensuring you get a complete workout.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="font-bold text-[#1f2329] text-xl mb-3">Professional Trainers</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Work with our experienced and polite training staff who maintain a healthy, welcoming environment for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Tour / Images Section */}
      <section id="tour" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#1f2329] mb-10 text-center">Take a Look Inside</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.slice(0, 4).map((src, idx) => (
            <div 
              key={idx} 
              className="aspect-square relative overflow-hidden rounded-xl border border-gray-200 cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gym Facility ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Membership Fees Section */}
      <section id="membership" className="bg-[#f8f9fa] py-20 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1f2329] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-12">No hidden fees or complicated tiers. Just complete access.</p>
          
          <div className="bg-white border border-gray-200 rounded-3xl p-10 max-w-sm mx-auto shadow-xl flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Monthly Pass</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-extrabold text-[#1f2329]">₹2k</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="text-left space-y-4 mb-8 w-full text-gray-600 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Full gym access
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Professional trainers
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Basement parking
              </li>
            </ul>
            <a href="tel:+918937017434" className="w-full bg-[#1f2329] text-white font-bold py-4 rounded-xl hover:bg-black transition-colors shadow-lg shadow-black/10">
              Contact to Join
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1f2329] mb-4">What Our Members Say</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="font-semibold text-gray-700">4.7/5 on Google Maps</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Ample space, fine equipment and genuine trainers is all I can tell about the W gym. (Ps basement parking available)"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">AK</div>
              <p className="text-[#1f2329] font-bold text-sm">Akshat Kapruwan</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Best gym with the quality equipments and professional trainers healthy environment with a neat and clean cafeteria too."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">MC</div>
              <p className="text-[#1f2329] font-bold text-sm">Mayank Chawla</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "Incredible facility with top-tier equipment. Easily the best gym experience I've had in Dehradun."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">SK</div>
              <p className="text-[#1f2329] font-bold text-sm">Md. Shadan Khan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1f2329] text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left mb-16">
          <div>
            <h4 className="text-xl font-bold mb-6">Location</h4>
            <div className="space-y-2 text-gray-400">
              <p>Infinity tower, GMS Rd,</p>
              <p>near reliance Market, Mahadev Vihar,</p>
              <p>Shakti Enclave, Niranjanpur,</p>
              <p>Dehradun, Uttarakhand 248171</p>
              <div className="mt-6">
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-white border-b border-white hover:text-gray-300 transition-colors pb-1 font-semibold text-sm">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <p>Visit us during opening hours or connect on-site to enroll.</p>
              <p className="font-semibold text-white">Call: +91 8937017434</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-4 md:space-y-0">
          <div>&copy; {new Date().getFullYear()} THE W GYM.</div>
          <div>
            Website made by <span className="text-white">Shadan</span> & <span className="text-white">Dev</span>
          </div>
        </div>
      </footer>

      {/* Fullscreen Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-[101] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Full size view" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default MobileApp;
