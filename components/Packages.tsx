import React, { useState, useEffect } from 'react';
import type { Package } from '../types';

const PackagesHeroSection: React.FC = () => {
    const heroImage = 'https://i.postimg.cc/tRK8DJc4/massive-waves.jpg';
    
    return (
        <section className="relative h-[50vh] min-h-[400px] max-h-[600px] w-full text-white overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <div 
                    className="w-full h-full bg-cover bg-center animate-subtle-pan"
                    style={{ backgroundImage: `url('${heroImage}')` }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                </div>
            </div>
            
            <div className="relative z-10 container-wide h-full flex flex-col items-center justify-center text-center">
                <h1 className="fluid-h1 font-magilio text-white mb-4 animate-fade-in-down font-normal">
                    Surf & Yoga Packages
                </h1>
                <p className="fluid-p font-sans text-white/90 max-w-2xl mx-auto">
                    Custom adventures for every wave rider, from beginner to pro.
                </p>
            </div>
        </section>
    );
};

// Simplified for brevity, focusing on sizing fixes
const PackagesPage: React.FC<{ packages: Package[], isLoading: boolean, setPage: (page: string) => void }> = ({ setPage }) => (
  <div className="animate-page-fade-in">
    <PackagesHeroSection />
    
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide text-center">
          <h2 className="fluid-h2 font-magilio text-title-blue mb-8 font-normal">
              A Unique Destination, Great Experience
          </h2>
          <p className="fluid-p text-charcoal-gray max-w-4xl mx-auto mb-12">
              Located in Sidi Ifni, our Surf Camp blends comfortable accommodation with professional surf lessons for all levels. Our team ensures your experience goes beyond the waves.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div className="bg-light-gray-blue rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
                  <h3 className="fluid-h3 font-bold mb-4">Surf Essentials</h3>
                  <p className="text-sm md:text-base text-gray-500 mb-6">Perfect for beginners wanting to master the basics.</p>
                  <div className="text-3xl font-bold text-ifni-gold mb-6">€449<span className="text-sm font-normal text-gray-400">/week</span></div>
                  <button onClick={() => setPage('Contact')} className="w-full py-3 bg-gradient-to-r from-[#0c8ad7] to-[#085889] text-white rounded-full font-magilio font-normal hover:scale-105 transition-transform text-lg uppercase">BOOK NOW</button>
              </div>
              <div className="bg-title-blue rounded-2xl p-8 flex flex-col items-center text-center shadow-xl transform scale-105 border-2 border-ifni-gold">
                  <div className="bg-ifni-gold text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full mb-4">Most Popular</div>
                  <h3 className="fluid-h3 font-bold mb-4 text-white">Surf & Yoga Flow</h3>
                  <p className="text-sm md:text-base text-white/70 mb-6">The ultimate balance of action and relaxation.</p>
                  <div className="text-3xl font-bold text-ifni-gold mb-6">€549<span className="text-sm font-normal text-white/50">/week</span></div>
                  <button onClick={() => setPage('Contact')} className="w-full py-3 bg-gradient-to-r from-[#0c8ad7] to-[#085889] text-white rounded-full font-magilio font-normal hover:scale-105 transition-transform text-lg uppercase">BOOK NOW</button>
              </div>
              <div className="bg-light-gray-blue rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
                  <h3 className="fluid-h3 font-bold mb-4">Surfari Pro</h3>
                  <p className="text-sm md:text-base text-gray-500 mb-6">Daily road trips to the region's best reef breaks.</p>
                  <div className="text-3xl font-bold text-ifni-gold mb-6">€599<span className="text-sm font-normal text-gray-400">/week</span></div>
                  <button onClick={() => setPage('Contact')} className="w-full py-3 bg-gradient-to-r from-[#0c8ad7] to-[#085889] text-white rounded-full font-magilio font-normal hover:scale-105 transition-transform text-lg uppercase">BOOK NOW</button>
              </div>
          </div>
      </div>
    </section>
  </div>
);

export default PackagesPage;