// Fixed corrupted import and removed redundant local interface definitions
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PackagesPage from './components/Packages';
import BlogPostPage from './components/BlogPostPage';
import Accommodation from './components/Accommodation';
import Activities from './components/Activities';
import ShopPage from './components/ShopPage';
import SurfPage from './components/SurfPage';
import YogaPage from './components/YogaPage';
import SplitText from './components/SplitText';
import type { Coach, Package, BlogPost, AccommodationService, ShopProduct } from './types';

declare var AOS: any;

const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string, padding?: string }> = ({ children, className, id, padding = 'py-4 md:py-8' }) => (
    <section id={id} className={`${className} ${padding}`}>
        <div className="container-wide">
            {children}
        </div>
    </section>
);

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Where is Ifni Tour located exactly?",
            answer: "Ifni Tour is located in the heart of Sidi Ifni, South Morocco. We are situated just a few steps from the main beach and within walking distance of local markets and historical landmarks."
        },
        {
            question: "Why choose Ifni Tour?",
            answer: "We offer an authentic Moroccan experience with local experts who have been sharing their passion since 2007. Our camp blends professional surf coaching, cozy accommodation, and a vibrant community atmosphere."
        },
        {
            question: "What about surfing around Sidi Ifni, are surf spots close?",
            answer: "Sidi Ifni is surrounded by incredible surf spots. From the consistent waves at our doorstep to secret reef breaks just a short drive away, our guides ensure you find the perfect conditions every day."
        },
        {
            question: "Is there a social / community vibe at Ifni Tour?",
            answer: "Absolutely! We pride ourselves on our 'Ifni Tour Vibe'. From communal dinners and sunset rooftop sessions to group excursions, you'll join a global tribe of explorers and make lifelong friends."
        },
        {
            question: "Can I come alone or with friends / group?",
            answer: "Both! Many of our guests arrive solo and leave with a new family. We also have spacious rooms perfect for groups of friends or families looking for a shared adventure."
        },
        {
            question: "Is Ifni Tour suitable for digital nomads and remote workers?",
            answer: "Yes, we feature dedicated coworking spaces with reliable high-speed Wi-Fi, comfortable seating, and ocean views, allowing you to balance productivity with catching the next swell."
        },
        {
            question: "What does Ifni Tour offer?",
            answer: "We offer all-inclusive surf packages, professional yoga retreats, adventure tours (like Sahara sandboarding), premium accommodation, and an authentic local culture experience."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-8 md:py-12 overflow-hidden">
            <div className="container-wide">
                {/* Header - Tightened spacing */}
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-3xl md:text-5xl font-magilio text-title-blue mb-1 font-normal" data-aos="fade-up">
                        Most Frequently Asked Questions (FAQ)
                    </h2>
                    <div className="flex justify-center mb-4" data-aos="zoom-in" data-aos-delay="200">
                        <img 
                            src="https://i.postimg.cc/9fJtSFt1/Screenshot-2025-12-23-200156.png" 
                            alt="Decorative line" 
                            className="h-auto w-40 md:w-[420px] object-contain"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                    {/* Left side: Image - Optimized size */}
                    <div className="w-full lg:w-4/12 md:px-0" data-aos="fade-right">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/10] md:aspect-[3/2] group max-h-[250px] md:max-h-none">
                            <img 
                                src="https://i.postimg.cc/6pG9yKKM/client-ifni-sunset-1.jpg" 
                                alt="Sidi Ifni Coastal Landscape at Twilight" 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-title-blue/10 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500"></div>
                        </div>
                    </div>

                    {/* Right side: Accordion - Compact & Information Dense */}
                    <div className="w-full lg:w-8/12 space-y-0.5" data-aos="fade-left">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 last:border-0">
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full py-2 md:py-3 flex items-center gap-3 text-left group transition-all duration-300"
                                >
                                    <span className={`text-xl font-light transition-transform duration-300 flex-shrink-0 w-5 ${openIndex === idx ? 'rotate-45 text-ifni-gold' : 'text-title-blue'}`}>
                                        +
                                    </span>
                                    <span className={`text-sm md:text-base font-['Consolas',_monospace] font-bold transition-colors duration-300 leading-tight ${openIndex === idx ? 'text-ifni-gold' : 'text-title-blue group-hover:text-ifni-gold'}`}>
                                        {faq.question}
                                    </span>
                                </button>
                                <div 
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[300px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="flex gap-3">
                                        <div className="w-5 flex-shrink-0"></div> {/* Match icon alignment */}
                                        <p className="text-gray-600 font-['Consolas',_monospace] italic leading-relaxed text-xs md:text-sm">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const valuePropsData = [
  {
    headline: "Authentic Local Experience",
    body: "Local surf experts connect you to Sidi Ifni's culture, community, and secret surf spots for an experience that goes beyond the waves.",
    imageUrl: "https://i.postimg.cc/L69YYnQr/Authentic-Local-Experience.jpg"
  },
  {
    headline: "World-Class Coaching",
    body: "Our certified instructors use advanced techniques and video analysis to accelerate your progression, regardless of your starting point.",
    imageUrl: "https://i.postimg.cc/vB7TDsWK/World-Class-Coaching.jpg"
  },
  {
    headline: "The Ifni Tour Vibe",
    body: "More than a camp—a family. Experience our legendary communal dinners, acoustic sunset sessions, and the warmest vibes in Morocco.",
    imageUrl: "https://i.postimg.cc/6pG9yKKM/client-ifni-sunset-1.jpg"
  },
  {
    headline: "All-Inclusive & Hassle-Free",
    body: "From airport transfers to top-quality gear, we've got you covered. Just show up and we'll handle the rest for an unforgettable adventure.",
    imageUrl: "https://i.postimg.cc/BL64wR7p/All-Inclusive-Hassle-Free.jpg"
  },
  {
    headline: "Ocean View",
    body: "Enjoy breathtaking views of the Atlantic Ocean. Watch the waves crash against the shore and feel the refreshing sea breeze from every corner.",
    imageUrl: "https://i.postimg.cc/1zqfh645/Ocean-View.jpg"
  }
];

const ValuePropCard: React.FC<{ prop: typeof valuePropsData[0], index: number }> = ({ prop, index }) => (
    <div 
        className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group flex flex-col justify-center p-10 text-center transition-transform duration-500 hover:scale-[1.03] h-full"
        data-aos="fade-up"
        data-aos-delay={index * 100}
    >
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: `url('${prop.imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:opacity-70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-3xl md:text-5xl font-magilio text-white mb-6 leading-tight drop-shadow-2xl font-normal">
                {prop.headline}
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed opacity-90 max-sm font-['Consolas',_monospace] font-bold italic">
                {prop.body}
            </p>
        </div>
    </div>
);

const ExperienceGrid: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
    const data = [
        {
            title: "Discover The Magic Of Taghazout",
            body: "Taghazout is Morocco’s surf and party paradise — a place to catch world-class waves, meet incredible people from around the globe, and live the ultimate adventure lifestyle.",
            image: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=1200&auto=format&fit=crop",
            bullets: [
                { icon: "🌊", text: "Consistent wave year-round" },
                { icon: "🤝", text: "Vibrant international surf community" },
                { icon: "🍲", text: "Authentic Moroccan culture & cuisine" },
                { icon: "☀️", text: "Perfect weather for beach life" }
            ],
            cta: "Discover Taghazout",
            page: "Activities",
            reverse: false
        },
        {
            title: "The Ocean Calls",
            body: "Every morning in Taghazout begins with the sound of waves. Whether you’re standing on a board for the very first time or chasing your hundredth ride, the ocean always has something new to teach.",
            image: "https://images.unsplash.com/photo-1502680390408-f8b8fe1e2c1e?q=80&w=1200&auto=format&fit=crop",
            cta: "Feel the Waves",
            page: "Surf",
            reverse: true
        },
        {
            title: "Find Your Flow",
            body: "After the waves, it’s time to slow down. Breathe deeply, stretch by the ocean, and reconnect with yourself. Our daily yoga sessions bring balance to your surf adventure — sunrise or sunset, the view is always unforgettable.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
            cta: "Explore Yoga",
            page: "YogaCamp",
            reverse: false
        }
    ];

    return (
        <section className="bg-white py-12 md:py-16 overflow-hidden">
            <div className="container-wide">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-magilio text-title-blue mb-2 font-normal" data-aos="fade-up">
                        Experience Grid
                    </h2>
                    <div className="flex justify-center mb-4" data-aos="zoom-in" data-aos-delay="200">
                        <img 
                            src="https://i.postimg.cc/9fJtSFt1/Screenshot-2025-12-23-200156.png" 
                            alt="Decorative line" 
                            className="h-auto w-48 md:w-[500px] object-contain"
                        />
                    </div>
                    {/* New Subtitle */}
                    <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 font-['Consolas',_monospace] font-bold italic" data-aos="fade-up" data-aos-delay="400">
                        Shared memories from our global tribe of surfers, yogis, and explorers
                    </p>
                </div>

                <div className="space-y-12 md:space-y-20">
                    {data.map((item, idx) => (
                        <div 
                            key={idx}
                            className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-12`}
                        >
                            {/* Image Block */}
                            <div className="w-full md:w-1/2" data-aos={item.reverse ? "fade-left" : "fade-right"}>
                                <div className="relative overflow-hidden rounded-[2rem] shadow-xl group aspect-[16/10]">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-title-blue/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Text Block */}
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left" data-aos={item.reverse ? "fade-right" : "fade-left"}>
                                <h3 className="text-2xl md:text-4xl font-magilio text-title-blue mb-3 leading-tight font-normal">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-lg text-gray-600 mb-5 leading-relaxed font-['Consolas',_monospace] font-bold italic">
                                    {item.body}
                                </p>
                                
                                {item.bullets && (
                                    <ul className="space-y-2 mb-6 w-full">
                                        {item.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-center group">
                                                <div className="w-7 h-7 rounded-lg bg-light-gray-blue flex items-center justify-center mr-3 flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm text-base">
                                                    {bullet.icon}
                                                </div>
                                                <span className="text-[#074f7c] font-bold text-sm md:text-base font-sans">{bullet.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <button 
                                    onClick={() => setPage(item.page)}
                                    className="group relative overflow-hidden bg-gradient-to-r from-[#0c8ad7] to-[#085889] text-white py-3 px-8 rounded-full text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-magilio font-normal uppercase tracking-wider"
                                >
                                    <span className="relative z-10">{item.cta}</span>
                                    <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const RoomTypesSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
    const rooms = [
        { name: 'Berber Room', image: 'https://i.postimg.cc/W4pWC8Gx/berber-room-1.jpg' },
        { name: 'Santa Cruz Room', image: 'https://i.postimg.cc/XvHrkNNL/santa-cruz-room-1.jpg' },
        { name: 'Ocean View Room', image: 'https://i.postimg.cc/854tH6J2/occan-view-room-1.jpg' },
        { name: 'Sun Suite', image: 'https://i.postimg.cc/bvWtjNXf/sun-suite-1.jpg' }
    ];

    return (
        <section className="bg-[#0b3d62] py-12 md:py-16 overflow-hidden text-center">
            <div className="container-wide">
                {/* Section Headline */}
                <div className="mb-4 md:mb-6 inline-block relative w-full text-center">
                    <h2 className="text-3xl md:text-5xl font-magilio text-white mb-2 font-normal" data-aos="fade-up">
                        Our Room Types
                    </h2>
                    
                    {/* Decorative image line */}
                    <div className="flex justify-center mb-4" data-aos="zoom-in" data-aos-delay="200">
                        <img 
                          src="https://i.postimg.cc/9fJtSFt1/Screenshot-2025-12-23-200156.png" 
                          alt="Decorative line" 
                          className="h-auto w-48 md:w-[500px] object-contain"
                        />
                    </div>
                </div>

                {/* Intro Paragraph */}
                <p className="text-xs md:text-base text-white max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 opacity-90 font-['Consolas',_monospace] font-bold" data-aos="fade-up" data-aos-delay="400">
                    Enjoy our inviting, real rooms, each with a distinct personality, created to provide you with a wonderful time in Sidi Ifni.
                </p>

                {/* Room Tiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12 px-4">
                    {rooms.map((room, idx) => (
                        <div 
                            key={idx}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
                            data-aos="fade-up"
                            data-aos-delay={500 + idx * 100}
                            onClick={() => setPage('Accommodation')}
                        >
                            <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500" />
                            
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                                <div className="flex flex-col items-center gap-3">
                                    <img 
                                      src="https://i.postimg.cc/Kj7F5Vt4/6.png" 
                                      alt="Logo" 
                                      className="w-20 md:w-32 h-auto" 
                                      style={{ filter: 'brightness(0) invert(1)' }} 
                                    />
                                    <h3 className="text-lg md:text-2xl font-magilio text-white tracking-wide font-normal">
                                        {room.name}
                                    </h3>
                                    <span className="text-white/80 text-[8px] md:text-xs tracking-[0.2em] font-['Consolas',_monospace] font-bold italic">
                                        #DIDYOUSRFTODAY
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div data-aos="zoom-in" data-aos-delay="1000">
                    <button 
                        onClick={() => setPage('Accommodation')}
                        className="bg-ifni-gold text-white py-3 px-10 rounded-full text-sm md:text-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 font-magilio font-normal"
                    >
                        Discover More
                    </button>
                </div>
            </div>
        </section>
    );
};

const HeroSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroSlides = [
      {
        imageUrl: 'https://i.postimg.cc/GtGkm7k0/1.jpg',
        title: 'Ride the Moroccan Waves',
        subtitle: 'Experience the magic of Sidi Ifni. Perfect waves, expert guides, and unforgettable adventures await.',
      },
      {
        imageUrl: 'https://i.postimg.cc/q7DcbCJ4/2.jpg',
        title: 'Your Perfect Surf Getaway',
        subtitle: 'From beginner lessons to pro packages, we have the perfect trip for you.',
      }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % heroSlides.length);
        }, 8000);
        return () => clearInterval(slideInterval);
    }, [heroSlides.length]);

    return (
        <section className="relative h-[65vh] md:h-[85vh] w-full text-white overflow-hidden flex items-center justify-center">
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-110 z-0'}`}
                >
                    <div 
                        className="w-full h-full bg-cover bg-center animate-subtle-pan"
                        style={{ backgroundImage: `url('${slide.imageUrl}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
                </div>
            ))}
            
            <div className="relative z-10 container-wide w-full h-full flex items-center">
                <div className="max-w-4xl text-left px-4 md:px-0">
                    <div key={currentSlide} className="overflow-hidden">
                        <div className="flex items-center gap-3 mb-2 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                            <div className="w-8 md:w-12 h-[2px] bg-ifni-gold"></div>
                            <span className="text-ifni-gold uppercase tracking-[0.3em] font-bold text-[8px] md:text-xs">Welcome to Sidi Ifni</span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-magilio text-white leading-[1.05] md:leading-[1] mb-3 md:mb-5 drop-shadow-2xl font-normal">
                            {heroSlides[currentSlide].title}
                        </h1>
                        
                        <p className="text-xs sm:text-base md:text-xl font-sans text-white/80 max-w-[280px] sm:max-w-lg md:max-w-2xl animate-fade-in-up drop-shadow-lg leading-relaxed mb-6 md:mb-8" style={{ animationDelay: '1.2s' }}>
                            {heroSlides[currentSlide].subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 items-start animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                            <button
                                onClick={() => setPage('Packages')}
                                className="group relative overflow-hidden bg-ifni-gold text-white py-2.5 px-6 md:py-4 md:px-12 rounded-full text-[10px] md:text-base transition-all duration-500 transform hover:scale-105 shadow-2xl font-magilio font-normal"
                            >
                                <span className="relative z-10">Start Your Adventure</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                            </button>
                            
                            <button
                                onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group flex items-center gap-2 md:gap-4 py-2 text-white text-[10px] md:text-base hover:text-ifni-gold transition-colors duration-300 font-magilio font-normal"
                            >
                                <span>See More</span>
                                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-ifni-gold group-hover:bg-ifni-gold transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-5 md:w-5 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Indicators - Desktop Only */}
            <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-8">
                {heroSlides.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-ifni-gold scale-[2] ring-4 ring-ifni-gold/20' : 'bg-white/40 hover:bg-white'}`}
                    />
                ))}
            </div>
            
            {/* Scroll Indicator - Compact */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
                <span className="text-[7px] uppercase tracking-[0.4em] font-bold">Scroll</span>
                <div className="w-[1px] h-6 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
};

const IntroSection: React.FC = () => (
  <Section id="intro" className="bg-white text-center" padding="pt-8 md:pt-12 pb-2">
      <img src="https://i.postimg.cc/ZngFwFYH/65.png" alt="Logo" className="mx-auto mb-2 h-12 md:h-18 opacity-100 transition-transform hover:scale-110" />
      
      <h2 className="text-2xl md:text-5xl font-magilio text-title-blue mb-1 font-normal">
        Welcome to Ifni Tour Surf Camp
      </h2>
      
      <img 
        src="https://i.postimg.cc/9fJtSFt1/Screenshot-2025-12-23-200156.png"
        alt="Decorative line" 
        className="mx-auto mb-4 h-auto w-40 md:w-[420px]" 
      />
      
      <p className="text-xs md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center px-4 font-['Consolas',_monospace] font-bold" data-aos="fade-up">
        At Ifni Tour Camp, we believe surfing is more than just a sport it’s a lifestyle. Our camp offers an authentic Moroccan surf experience where sunset, sea, and soul connect.
      </p>
  </Section>
);

const WelcomeDetailSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => (
    <Section className="bg-white" padding="py-4 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-start text-left" data-aos="fade-right">
                <h2 className="text-2xl md:text-4xl font-heading font-bold mb-1 bg-gradient-to-r from-[#074f7c] to-[#0d8ad7] bg-clip-text text-transparent">
                    Authentic Morocco
                </h2>
                <div className="w-10 h-1 bg-ifni-gold mb-3 rounded-full"></div>
                <p className="text-sm md:text-lg text-[#666666] mb-4 leading-relaxed max-w-xl font-['Consolas',_monospace] font-bold">
                    Welcome to Ifni Tour Surf Camp Sidi Ifni, one of the original surf camps in Morocco since 2007. 
                    Located in the heart of Sidi Ifni, our Surf Camp blends comfortable accommodation, 
                    professional surf lessons for all levels, and a vibrant coworking space. 
                </p>
                <div className="space-y-2 mb-6 w-full">
                    {[
                        { icon: 'https://i.postimg.cc/PxDg6ySn/icon-location.png', text: 'Located in the heart of Sidi Ifni' },
                        { icon: 'https://i.postimg.cc/1XVx4B8X/guests.png', text: 'Guests from 40+ countries' },
                        { icon: 'https://i.postimg.cc/C5nyd7Rd/surfboard.png', text: 'Daily surf, yoga, and community events' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center group">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-light-gray-blue flex items-center justify-center mr-3 flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                                <img src={item.icon} alt="Icon" className="w-3 h-3 md:w-4 md:h-4" />
                            </div>
                            <span className="text-[#074f7c] font-bold text-xs md:text-lg font-sans">{item.text}</span>
                        </div>
                    ))}
                </div>
                <button 
                    onClick={() => setPage('About')}
                    className="group relative overflow-hidden px-6 py-2.5 md:px-8 md:py-3.5 rounded-xl bg-gradient-to-r from-[#0c8ad7] to-[#085889] text-white text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-magilio font-normal"
                >
                    <span className="relative z-10">Meet the Family</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
            </div>
            <div className="order-1 lg:order-2 w-full" data-aos="fade-left">
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl h-[250px] md:h-[420px] group">
                    <img 
                        src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=1200&auto=format&fit=crop" 
                        alt="Life at Ifni Tour Camp" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-title-blue/10 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500"></div>
                </div>
            </div>
        </div>
    </Section>
);

const AtmosphericHeroSection: React.FC = () => (
    <section className="relative w-full py-10 md:py-20 bg-cover bg-center overflow-hidden flex flex-col items-center justify-center text-center"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1920&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-magilio text-white mb-1 leading-tight tracking-tight drop-shadow-2xl font-normal">
                Waves, Music, Sunsets.
            </h2>
            <div className="w-12 h-1 bg-ifni-gold mx-auto mb-3 rounded-full"></div>
            <p className="text-white text-xs md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 italic font-['Consolas',_monospace] font-bold">
                "Join our community of surfers, travelers, and free spirits for the adventure of a lifetime in Southern Morocco."
            </p>
        </div>
    </section>
);

const ValuePropsSection: React.FC = () => {
    return (
        <Section className="bg-white" padding="py-10 md:py-16">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-magilio text-title-blue mb-1 font-normal">
                    Why Choose Us?
                </h2>
                
                <div className="flex justify-center mb-4" data-aos="zoom-in" data-aos-delay="200">
                    <img 
                      src="https://i.postimg.cc/9fJtSFt1/Screenshot-2025-12-23-200156.png" 
                      alt="Decorative line" 
                      className="h-auto w-40 md:w-[500px] object-contain"
                    />
                </div>

                <p className="text-xs md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed text-balance font-['Consolas',_monospace] font-bold">
                    Discover why ifni Tour is the premier choice for wave riders worldwide. We've optimized every detail for your ultimate comfort and progression.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 max-w-[1400px] mx-auto px-4">
                <div className="md:col-span-2">
                    <ValuePropCard prop={valuePropsData[0]} index={0} />
                </div>
                <div className="md:col-span-2">
                    <ValuePropCard prop={valuePropsData[1]} index={1} />
                </div>
                <div className="md:col-span-2">
                    <ValuePropCard prop={valuePropsData[2]} index={2} />
                </div>
                
                <div className="md:col-start-2 md:col-span-2">
                    <ValuePropCard prop={valuePropsData[3]} index={3} />
                </div>
                <div className="md:col-span-2">
                    <ValuePropCard prop={valuePropsData[4]} index={4} />
                </div>
            </div>
        </Section>
    );
};

const App: React.FC = () => {
    const [page, setPage] = useState('Home');

    useEffect(() => {
        if (typeof AOS !== 'undefined') {
          AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
        }
    }, []);

    const handleSetPage = (newPage: string) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    }

    const renderPage = () => {
        switch (page) {
            case 'Home': return (
                <div className="animate-page-fade-in">
                    <HeroSection setPage={handleSetPage} />
                    <IntroSection />
                    <WelcomeDetailSection setPage={handleSetPage} />
                    <AtmosphericHeroSection />
                    <ValuePropsSection />
                    <RoomTypesSection setPage={handleSetPage} />
                    <ExperienceGrid setPage={handleSetPage} />
                    <FAQSection />
                </div>
            );
            case 'Packages': return <PackagesPage packages={[]} isLoading={false} setPage={handleSetPage} />;
            case 'Surf': return <SurfPage />;
            case 'YogaCamp': return <YogaPage />;
            case 'Activities': return <Activities />;
            case 'Shop': return <ShopPage products={[]} />;
            case 'Accommodation': return <Accommodation />;
            case 'Blog': return <div className="p-20 text-center font-magilio text-4xl py-40">Stories from the Atlantic. Coming soon.</div>;
            case 'About': return <div className="p-20 text-center font-magilio text-4xl py-40">Our journey began in 2007. Full story coming soon.</div>;
            case 'Contact': return <div className="p-20 text-center font-magilio text-4xl py-40">Ready to join the family? Send us a message!</div>;
            default: return <div className="animate-page-fade-in"><HeroSection setPage={handleSetPage} /></div>;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-dark-slate">
            <Header setPage={handleSetPage} />
            <main className="flex-grow">{renderPage()}</main>
            <div id="footer-container">
                <Footer />
            </div>
        </div>
    );
};

export default App;