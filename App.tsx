
import React, { useState, useRef, useEffect } from 'react';
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

const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string, padding?: string }> = ({ children, className, id, padding = 'py-8 md:py-12' }) => (
    <section id={id} className={`${className} ${padding}`}>
        <div className="container-wide">
            {children}
        </div>
    </section>
);

const valuePropsData = [
  {
    headline: "Pioneer Roots",
    body: "Founded in 2007, we are the original heartbeat of Sidi Ifni's surf culture, blending deep local heritage with world-class hospitality.",
    imageUrl: "https://i.postimg.cc/PxgMK619/1.jpg"
  },
  {
    headline: "Elite Progression",
    body: "Our ISA-certified instructors utilize advanced video analysis to transform your technique, whether it's your first wave or your hundredth.",
    imageUrl: "https://i.postimg.cc/PxgMK619/1.jpg"
  },
  {
    headline: "The 'Ifni' Soul",
    body: "More than a camp—a family. Experience our legendary communal dinners, acoustic sunset sessions, and the warmest vibes in Morocco.",
    imageUrl: "https://i.postimg.cc/PxgMK619/1.jpg"
  },
  {
    headline: "Nomad Sanctuary",
    body: "Designed for the remote worker. Enjoy high-speed fiber internet and dedicated quiet zones, perfectly balancing workflow and wave-flow.",
    imageUrl: "https://i.postimg.cc/PxgMK619/1.jpg"
  },
  {
    headline: "Earth First",
    body: "We lead the way in sustainable tourism with zero-plastic initiatives and monthly coastal cleanups to protect our Atlantic playground.",
    imageUrl: "https://i.postimg.cc/PxgMK619/1.jpg"
  }
];

const ValuePropCard: React.FC<{ prop: typeof valuePropsData[0], index: number }> = ({ prop, index }) => (
    <div 
        className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 group"
        data-aos="fade-up"
        data-aos-delay={index * 100}
    >
        <div className="relative aspect-[4/3] overflow-hidden">
            <img 
                src={prop.imageUrl} 
                alt={prop.headline} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-8 flex flex-col flex-grow text-left">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-ifni-gold"></div>
                <span className="text-ifni-gold font-bold text-xs tracking-widest uppercase">0{index + 1}</span>
            </div>
            <h3 className="text-2xl font-bold text-title-blue dark:text-ocean-blue mb-4 font-heading leading-tight">
                {prop.headline}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-sans leading-relaxed text-lg">
                {prop.body}
            </p>
        </div>
    </div>
);

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
        <section className="relative h-[92vh] w-full text-white overflow-hidden flex items-center justify-center">
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
                    <div className="absolute inset-0 bg-radial-vignette opacity-50"></div>
                </div>
            ))}
            
            <div className="relative z-10 container-wide w-full h-full flex items-center">
                <div className="max-w-4xl text-left px-4 md:px-0">
                    <div key={currentSlide} className="overflow-hidden">
                        <div className="flex items-center gap-4 mb-4 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                            <div className="w-12 h-[2px] bg-ifni-gold"></div>
                            <span className="text-ifni-gold uppercase tracking-[0.4em] font-bold text-xs md:text-sm">Welcome to Sidi Ifni</span>
                        </div>
                        
                        <SplitText 
                            text={heroSlides[currentSlide].title}
                            className="fluid-h1 font-magilio text-white leading-[1] mb-6 drop-shadow-2xl"
                            textAlign="left"
                            delay={400}
                            duration={1}
                            stagger={0.04}
                        />
                        
                        <p className="text-lg md:text-2xl font-sans text-white/80 max-w-2xl animate-fade-in-up drop-shadow-lg leading-relaxed mb-10" style={{ animationDelay: '1.2s' }}>
                            {heroSlides[currentSlide].subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 items-start animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                            <button
                                onClick={() => setPage('Packages')}
                                className="group relative overflow-hidden bg-ifni-gold text-white font-bold py-5 px-14 rounded-full text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-ifni-gold/30"
                            >
                                <span className="relative z-10">Start Your Adventure</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                            </button>
                            
                            <button
                                onClick={() => {
                                    const el = document.getElementById('intro');
                                    el?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group flex items-center gap-4 py-5 px-4 text-white font-bold text-lg hover:text-ifni-gold transition-colors duration-300"
                            >
                                <span>See More</span>
                                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-ifni-gold group-hover:bg-ifni-gold transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end gap-12">
                <div className="flex flex-col gap-6 items-center">
                    {heroSlides.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className="group relative flex items-center gap-4 outline-none"
                            aria-label={`Slide ${idx + 1}`}
                        >
                            <span className={`text-[10px] font-bold tracking-[0.2em] transition-all duration-500 opacity-0 group-hover:opacity-100 ${idx === currentSlide ? 'text-ifni-gold opacity-100' : 'text-white'}`}>
                                0{idx + 1}
                            </span>
                            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${idx === currentSlide ? 'bg-ifni-gold border-ifni-gold scale-125' : 'bg-transparent border-white/40 hover:border-white'}`} />
                        </button>
                    ))}
                </div>
                
                <div className="flex flex-col gap-6 text-white/40 hover:text-white/80 transition-colors">
                    <a href="#" className="hover:text-ifni-gold transition-colors"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="hover:text-ifni-gold transition-colors"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>

            <div className="absolute bottom-12 left-0 w-full z-20 px-8 md:px-16 flex items-end justify-between">
                <div className="hidden md:flex flex-col gap-1 text-white/60">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Current Location</span>
                    <span className="text-sm font-sans text-white font-semibold">29.3842° N, 10.1741° W • Sidi Ifni</span>
                </div>

                <div className="flex flex-col items-center gap-4 animate-pulse opacity-60 hover:opacity-100 cursor-pointer" onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}>
                    <span className="text-[9px] uppercase tracking-[0.5em] font-bold rotate-90 mb-8 origin-center translate-y-4">Scroll</span>
                    <div className="w-[1.5px] h-16 bg-gradient-to-b from-ifni-gold via-white to-transparent"></div>
                </div>
                
                <div className="flex items-baseline gap-2 font-magilio text-2xl">
                    <span className="text-ifni-gold">0{currentSlide + 1}</span>
                    <span className="text-white/20 text-sm">/</span>
                    <span className="text-white/40 text-sm">0{heroSlides.length}</span>
                </div>
            </div>
        </section>
    );
};

const IntroSection: React.FC = () => (
  <Section id="intro" className="bg-white dark:bg-dark-slate/20 text-center" padding="pt-16 md:pt-20 pb-12">
      <img src="https://i.postimg.cc/ZngFwFYH/65.png" alt="Logo" className="mx-auto mb-6 h-20 md:h-28 opacity-100 transition-transform hover:scale-105" />
      
      <h2 className="fluid-h2 font-magilio text-title-blue dark:text-ocean-blue mb-6">
        Welcome to Ifni Tour Surf Camp
      </h2>
      
      <img 
        src="https://i.postimg.cc/NGKcdBNt/1.png"
        alt="Decorative line" 
        className="mx-auto mb-10 h-auto w-48 md:w-[480px]" 
      />
      
      <p className="text-lg md:text-xl font-sans text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center px-4" data-aos="fade-up">
        At Ifni Tour Camp, we believe surfing is more than just a sport it’s a lifestyle. Our camp offers an authentic Moroccan surf experience where sunset, sea, and soul connect.
      </p>
  </Section>
);

const WelcomeDetailSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => (
    <Section className="bg-white dark:bg-dark-slate" padding="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-start text-left" data-aos="fade-right">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-[#074f7c] to-[#0d8ad7] bg-clip-text text-transparent">
                    Authentic Morocco
                </h2>
                <div className="w-16 h-1 bg-ifni-gold mb-8 rounded-full"></div>
                <p className="text-lg text-[#666666] dark:text-gray-300 mb-8 leading-relaxed font-sans max-w-xl">
                    Welcome to Ifni Tour Surf Camp Sidi Ifni, one of the original surf camps in Morocco since 2007. 
                    Located in the heart of Sidi Ifni, our Surf Camp blends comfortable accommodation, 
                    professional surf lessons for all levels, and a vibrant coworking space. 
                </p>
                <div className="space-y-6 mb-10 w-full">
                    {[
                        { icon: 'https://i.postimg.cc/yx3qWjDY/location.png', text: 'Located in the heart of Sidi Ifni' },
                        { icon: 'https://i.postimg.cc/1XVx4B8X/guests.png', text: 'Guests from 40+ countries' },
                        { icon: 'https://i.postimg.cc/C5nyd7Rd/surfboard.png', text: 'Daily surf, yoga, and community events' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center group">
                            <div className="w-12 h-12 rounded-xl bg-light-gray-blue dark:bg-gray-800 flex items-center justify-center mr-5 flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                                <img src={item.icon} alt="Icon" className="w-6 h-6" />
                            </div>
                            <span className="text-[#074f7c] dark:text-ocean-blue font-bold text-lg font-sans">{item.text}</span>
                        </div>
                    ))}
                </div>
                <button 
                    onClick={() => setPage('About')}
                    className="group relative overflow-hidden px-10 py-4 rounded-xl bg-title-blue text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <span className="relative z-10">Meet the Family</span>
                    <div className="absolute inset-0 bg-ifni-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
            </div>
            <div className="order-1 lg:order-2 w-full" data-aos="fade-left">
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-[450px] md:h-[600px] group">
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
    <section className="relative w-full py-24 md:py-36 bg-cover bg-center overflow-hidden flex flex-col items-center justify-center text-center"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1920&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-magilio text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                Waves, Music, Sunsets.
            </h2>
            <div className="w-24 h-1.5 bg-ifni-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-white text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-sans font-light opacity-90 italic">
                "Join our community of surfers, travelers, and free spirits for the adventure of a lifetime in Southern Morocco."
            </p>
        </div>
    </section>
);

const ValuePropsSection: React.FC = () => (
    <Section className="bg-white dark:bg-dark-slate" padding="py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="fluid-h2 font-magilio text-title-blue dark:text-ocean-blue mb-4">
                Why Choose Us?
            </h2>
            <div className="w-14 h-[2px] bg-ifni-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-sans leading-relaxed text-balance">
                Discover why Ifni Tour is the premier choice for wave riders worldwide. We've optimized every detail for your ultimate comfort and progression.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
            {valuePropsData.map((prop, index) => (
                <ValuePropCard key={index} prop={prop} index={index} />
            ))}
        </div>
    </Section>
);

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
        <div className="flex flex-col min-h-screen bg-white dark:bg-dark-slate transition-colors duration-300 font-sans text-dark-slate dark:text-sand">
            <Header setPage={handleSetPage} />
            <main className="flex-grow">{renderPage()}</main>
            <Footer />
        </div>
    );
};

export default App;
