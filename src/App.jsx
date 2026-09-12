import React, { useState } from 'react';
import Planner from './Planner';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const images = [
    '/images/20260710_220225.jpg',
    '/images/20260710_220307.jpg',
    '/images/20260710_220314.jpg',
    '/images/20260710_220325.jpg',
    '/images/Snapchat-1156537623.jpg'
  ];

  const googleMapsLink = "https://www.google.com/maps/place/THE+W+GYM/@30.3065838,78.0074595,17z/data=!3m1!4b1!4m6!3m5!1s0x39092b1ab90ebfd3:0xab00e003cacdcef2!8m2!3d30.3065838!4d78.0100344!16s%2Fg%2F11tmn65lgn?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
          <div className="text-xl md:text-2xl font-black tracking-widest uppercase relative z-50">
            THE W GYM
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-bold tracking-wider">
            <a href="#tour" className="hover:text-red-600 transition-colors">TOUR</a>
            <a href="#planner" className="hover:text-red-600 transition-colors">3D PLANNER</a>
            <a href="#reviews" className="hover:text-red-600 transition-colors">REVIEWS</a>
            <a href="#membership" className="hover:text-red-600 transition-colors">FEES</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">LOCATION</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center relative z-50">
            <button 
              className="text-white focus:outline-none p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-900 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
          <div className="flex flex-col items-center space-y-6 text-lg font-bold tracking-wider">
            <a href="#tour" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">TOUR</a>
            <a href="#planner" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">3D PLANNER</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">REVIEWS</a>
            <a href="#membership" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">FEES</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">LOCATION</a>
            
            <div className="mt-4 pt-6 border-t border-zinc-800 w-3/4 text-center">
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Website made by Shadan and Dev</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center justify-center bg-zinc-900 border-b border-zinc-800">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[4]}')`, filter: 'grayscale(50%)' }}
        ></div>
        
        <div className="relative z-20 text-center px-4 flex flex-col items-center w-full max-w-full overflow-hidden">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase leading-none tracking-tighter mb-4 sm:mb-6 text-white drop-shadow-2xl">
            THE <span className="text-red-600">W</span> GYM
          </h1>
          
          <a href="#membership" className="mt-6 sm:mt-8 bg-red-600 text-white px-8 sm:px-12 py-4 sm:py-5 font-black text-lg sm:text-xl tracking-widest uppercase hover:bg-red-700 transition-colors border-2 border-red-600 hover:border-red-700 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            JOIN TODAY
          </a>
        </div>
      </header>

      {/* Info Bar */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xl sm:text-2xl font-bold tracking-widest uppercase mb-4">Located in Dehradun</p>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
            Infinity tower, GMS Rd, near reliance Market, Mahadev Vihar,<br className="hidden sm:block" />
            Shakti Enclave, Niranjanpur, Dehradun, Uttarakhand 248171
          </p>
          
          <a 
            href={googleMapsLink}
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Tour / Images Section */}
      <section id="tour" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-16 text-center">
            GYM <span className="text-red-600">TOUR</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, idx) => (
              <div key={idx} className="aspect-square relative overflow-hidden group border border-zinc-800">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={src} 
                  alt={`Gym Facility ${idx + 1}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Gym Planner Section */}
      <section id="planner" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4">
              VIRTUAL <span className="text-red-600">3D PLANNER</span>
            </h2>
            <p className="text-zinc-400 text-lg uppercase tracking-widest font-bold">
              Design your workout & explore the floor plan
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto bg-black border-2 border-zinc-800 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.15)] p-12 text-center flex flex-col items-center">
            <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mb-8 border border-zinc-800">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-widest mb-4 text-white">Interactive 3D Floor Plan</h3>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Drop real equipment into our exact dimensions, check clearances, and walk through our gym in first person before you even visit.
            </p>
            
            <a 
              href="https://3dgymplanner.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-10 py-5 font-black text-lg tracking-widest uppercase hover:bg-red-700 transition-colors border-2 border-red-600 hover:border-red-700 shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center gap-3"
            >
              Launch 3D Tool
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4">
              MEMBER <span className="text-red-600">REVIEWS</span>
            </h2>
            <p className="text-zinc-400 text-lg uppercase tracking-widest font-bold">Rated 4.7/5 Stars on Google</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-black border border-zinc-800 p-8 hover:border-red-600 transition-colors shadow-lg">
              <div className="text-red-600 mb-4 text-2xl tracking-widest">★★★★★</div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed">
                "Ample space, fine equipment and genuine trainers is all I can tell about the W gym. (Ps basement parking available)"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-500">AK</div>
                <p className="text-white font-bold tracking-wider uppercase text-sm">Akshat Kapruwan</p>
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-black border border-zinc-800 p-8 hover:border-red-600 transition-colors shadow-lg">
              <div className="text-red-600 mb-4 text-2xl tracking-widest">★★★★★</div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed">
                "Best gym with the quality equipments and professional trainers healthy environment with a neat and clean cafeteria too."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-500">MC</div>
                <p className="text-white font-bold tracking-wider uppercase text-sm">Mayank Chawla</p>
              </div>
            </div>
            
            {/* Review 3 */}
            <div className="bg-black border border-zinc-800 p-8 hover:border-red-600 transition-colors shadow-lg">
              <div className="text-red-600 mb-4 text-2xl tracking-widest">★★★★★</div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed">
                "Incredible facility with top-tier equipment. Easily the best gym experience I've had in Dehradun."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-500">SK</div>
                <p className="text-white font-bold tracking-wider uppercase text-sm">Md. Shadan Khan</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href={googleMapsLink}
              target="_blank" rel="noopener noreferrer"
              className="inline-block text-zinc-400 border-b border-zinc-600 hover:text-white hover:border-white transition-colors pb-1 uppercase tracking-widest text-sm font-bold"
            >
              Read more reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Membership Fees Section */}
      <section id="membership" className="py-24 bg-zinc-900 border-t border-zinc-800 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-6">
            MEMBERSHIP <span className="text-red-600">FEES</span>
          </h2>
          
          <div className="mt-16 bg-black border border-zinc-800 p-12 max-w-md mx-auto relative group overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors"></div>
            <h3 className="text-2xl font-bold tracking-widest text-zinc-400 uppercase mb-4 relative z-10">Monthly Pass</h3>
            <div className="text-7xl font-black text-white relative z-10 mb-6 tracking-tighter">
              ₹2k
            </div>
            <p className="text-zinc-500 relative z-10 mb-10 font-medium">Full access to THE W GYM facilities and equipment.</p>
            <a href="#contact" className="inline-block w-full bg-red-600 text-white font-bold uppercase tracking-widest py-4 hover:bg-red-700 transition-colors relative z-10">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          
          <div>
            <h4 className="text-2xl font-black mb-6 uppercase tracking-widest text-red-600">Location</h4>
            <div className="space-y-4 text-zinc-400 text-lg">
              <p>
                Infinity tower, GMS Rd,<br />
                near reliance Market, Mahadev Vihar,<br />
                Shakti Enclave, Niranjanpur,<br />
                Dehradun, Uttarakhand 248171
              </p>
              <p className="mt-6">
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-white border-b-2 border-red-600 hover:text-red-500 hover:border-red-500 transition-colors pb-1 font-bold tracking-wider uppercase text-sm">
                  Open in Google Maps
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl font-black mb-6 uppercase tracking-widest text-red-600">Contact</h4>
            <div className="space-y-4 text-zinc-400 text-lg">
              <p>Visit us during opening hours or connect on-site to enroll.</p>
              <p className="text-sm mt-8 uppercase tracking-widest">W GYM, Dehradun</p>
            </div>
          </div>
          
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 font-bold uppercase tracking-widest text-sm space-y-4 md:space-y-0">
          <div>&copy; {new Date().getFullYear()} THE W GYM.</div>
          <div className="text-zinc-500">
            Website made by <span className="text-zinc-400">Shadan</span> & <span className="text-zinc-400">Dev</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
