
import React from 'react';

// --- Icons ---
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.81C10.44 7.31 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
);

const TripAdvisorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,7A2.5,2.5 0 0,0 9.5,9.5A2.5,2.5 0 0,0 12,12A2.5,2.5 0 0,0 14.5,9.5A2.5,2.5 0 0,0 12,7M7,12A2.5,2.5 0 0,0 4.5,14.5A2.5,2.5 0 0,0 7,17A2.5,2.5 0 0,0 9.5,14.5A2.5,2.5 0 0,0 7,12M17,12A2.5,2.5 0 0,0 14.5,14.5A2.5,2.5 0 0,0 17,17A2.5,2.5 0 0,0 19.5,14.5A2.5,2.5 0 0,0 17,12Z" />
    </svg>
);

const LockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f18219] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

const TagIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f18219] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
);

const GlobeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f18219] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012 2v1.065M15 19.88V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);


const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative">
        
        {/* --- Top Section: Newsletter & Benefits --- */}
        <div className="relative w-full py-20 md:py-28 px-6 bg-cover bg-center overflow-hidden flex flex-col items-center justify-center text-center"
             style={{ backgroundImage: "url('https://i.postimg.cc/DZctSNYs/592166589-1893263931541408-4621800369630194947-n.jpg')" }}>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="relative z-10 w-full max-w-5xl">
                {/* Headline & Subhead */}
                <h2 className="text-4xl md:text-6xl font-bold font-sans text-white mb-6 drop-shadow-lg">
                    Unlock Your Next Adventure
                </h2>
                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                    Join our surf & adventure family for early access to new trips, special offers, and real stories from fellow travelers.
                </p>

                {/* Email Form */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-2xl mx-auto mb-16">
                    <input 
                        type="email" 
                        placeholder="Your Email Address" 
                        className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0a81d5] transition-all font-sans"
                    />
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#0a81d5] text-white font-bold rounded-full hover:bg-[#004677] transition-colors duration-300 whitespace-nowrap shadow-lg">
                        Join the Journey
                    </button>
                </div>

                {/* Three Benefit Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {/* Card 1 */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-lg">
                        <LockIcon />
                        <h3 className="text-xl font-bold text-white mb-2">Early Access</h3>
                        <p className="text-gray-300 text-sm">Be first to book new adventures before they’re public.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-lg">
                        <TagIcon />
                        <h3 className="text-xl font-bold text-white mb-2">Exclusive Offers</h3>
                        <p className="text-gray-300 text-sm">Member-only discounts and special adventure packages.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-lg">
                        <GlobeIcon />
                        <h3 className="text-xl font-bold text-white mb-2">Adventure Stories</h3>
                        <p className="text-gray-300 text-sm">Inspiring travel stories and tips from fellow adventurers.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- Bottom Section: Info Footer --- */}
        <div className="bg-[#0b3d62] text-white pt-16 pb-8 border-t border-[#004677]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                    
                    {/* Left Column: Brand Story */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold font-magilio tracking-wider text-white">
                                IFNI TOUR
                            </h3>
                            <span className="text-xs font-bold tracking-[0.2em] text-[#f18219] mt-1 uppercase">
                                SURF • COWORK • YOGA
                            </span>
                        </div>
                        <p className="text-gray-300 font-sans leading-relaxed text-sm opacity-90">
                            Few steps away from the beach, Discovering different surf spots along Sidi Ifni region, enjoying daily mesmerizing beach sunsets, incorporate mediation sessions, uncover the beauty and simplicity of the fishing village, feed your wanderlust with Ifni Tour Surf Camp.
                        </p>
                        
                         <div className="flex space-x-6 mt-4">
                            <a href="https://www.instagram.com/ifni_sunset/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#f18219] transition-colors">
                                <InstagramIcon className="w-6 h-6" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61581823543362" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#f18219] transition-colors">
                                <FacebookIcon className="w-6 h-6" />
                            </a>
                            <a href="#tripadvisor" className="text-gray-300 hover:text-[#f18219] transition-colors">
                                <TripAdvisorIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Middle Column: Navigation */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Experiences</h4>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Surf Packages</a></li>
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Yoga Packages</a></li>
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Coworking Packages</a></li>
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Accommodation</a></li>
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Activities & Tours</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">About Us</h4>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Who We Are</a></li>
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Our Team</a></li>
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Influencer Program</a></li>
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Contact & Quick Links */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-[#f18219] mr-3 font-bold">✉️</span>
                                    <span>bookings@ifnitour.com</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#f18219] mr-3 font-bold">📞</span>
                                    <span>+212 633196196</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#f18219] mr-3 font-bold">📍</span>
                                    <span>27 Rue Tasga Oudrar, Sidi Ifni, 85200, Morocco.</span>
                                </li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-[#f18219] transition-colors">Sidi Ifni</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} SunSet Ifni Tour. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
