
import React, { useState } from 'react';
import type { Package } from '../types';

// --- ICONS ---
const SurfIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.23 20.92c-1.25 0-2.34-1.02-2.34-2.28s1.05-2.28 2.34-2.28c1.29 0 2.34 1.02 2.34 2.28 0 1.25-1.05 2.28-2.34 2.28zM20.7 4.2c-1.4-.4-2.8-.4-4.2 0-1.4.4-2.8.4-4.2 0-1.4-.4-2.8-.4-4.2 0L2.1 5.6c1.4.4 2.8.4 4.2 0 1.4-.4 2.8-.4 4.2 0l1.8-1.4zM2.1 12.6c1.4.4 2.8.4 4.2 0 1.4-.4 2.8-.4 4.2 0 1.4.4 2.8.4 4.2 0 1.4-.4 2.8-.4 4.2 0l1.8-1.4c-1.4-.4-2.8-.4-4.2 0-1.4.4-2.8.4-4.2 0-1.4-.4-2.8-.4-4.2 0-1.4.4-2.8.4-4.2 0L2.1 12.6z"></path><path d="M12.48 4.2c.42 1.4-.35 2.8-1.75 3.22-1.4.42-2.8-.35-3.22-1.75"></path></svg>
);
const MealIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21h2v-2H7v2zM7 17h2v-2H7v2zM7 13h2v-2H7v2zM7 9h2V7H7v2zM7 5h2V3H7v2z"></path><path d="M10 21v-2c0-1.1.9-2 2-2h4v-2h-4c-2.2 0-4-1.8-4-4V7c0-1.1.9-2 2-2h2"></path><path d="M17 21v-8c0-2.2-1.8-4-4-4h-2"></path></svg>
);
const YogaIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12 21a2 2 0 100-4 2 2 0 000 4zM11 21v-4a2 2 0 012-2h4a2 2 0 012 2v4"></path><path d="M10 17v-4a2 2 0 012-2h2"></path><path d="M14 13h4a2 2 0 012 2v4"></path><path d="M12 13H4a2 2 0 00-2 2v4"></path></svg>
);
const BedIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16h20V4H2z"></path><path d="M2 12h20"></path><path d="M6 12v-4a2 2 0 012-2h8a2 2 0 012 2v4"></path></svg>
);
const VanIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2v-5a4 4 0 014-4h12a4 4 0 014 4v5zM6 17v-3M18 17v-3"></path><path d="M4 17h-2v-5a2 2 0 012-2h1M20 17h2v-5a2 2 0 00-2-2h-1"></path><path d="M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
);
const BeachIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c-5 0-8-2.5-8-5s3-5 8-5 8 2.5 8 5-3 5-8 5z"></path><path d="M12 2v7"></path><path d="M12 12l5-3"></path><path d="M12 12L7 9"></path><path d="M12 12l-4 4"></path><path d="M12 12l4 4"></path><path d="M12 12l-1-5"></path><path d="M12 12l1-5"></path></svg>
);
const VideoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
);

// --- NEW PACKAGES DATA & COMPONENTS ---

interface Inclusion {
    icon: React.ReactNode;
    text: string;
}

interface NewPackage {
  name: string;
  duration: string;
  tagline: string;
  description: string;
  price: string;
  imageUrl: string;
  inclusions: Inclusion[];
}

const newPackages: NewPackage[] = [
  {
    name: 'Surf Package',
    duration: '1 Week',
    tagline: 'All Inclusive Learn To Surf',
    description: "Expert coaching for all levels. Enhance your surfing skills and confidence in just one week. Perfect for beginners and improvers.",
    price: '449€',
    imageUrl: 'https://i.postimg.cc/Z5pNbGSG/Ella.jpg',
    inclusions: [
      { icon: <SurfIcon />, text: '5 Days surf lessons' },
      { icon: <MealIcon />, text: '3 Meals/day' },
      { icon: <YogaIcon />, text: '2 Yoga sessions/week' },
      { icon: <BedIcon />, text: 'Accommodation' },
      { icon: <VanIcon />, text: 'Airport transfer one way' },
    ],
  },
  {
    name: 'Yoga Package',
    duration: '1 Week',
    tagline: 'All Inclusive Yoga And Surf',
    description: "Rejuvenate body and mind. Balance exhilarating surf sessions with calming yoga practice for a holistic retreat experience.",
    price: '449€',
    imageUrl: 'https://i.postimg.cc/MTPM3x7Z/image-asset.jpg',
    inclusions: [
      { icon: <YogaIcon />, text: '6 Yoga sessions/week' },
      { icon: <MealIcon />, text: '3 Meals/day' },
      { icon: <SurfIcon />, text: '1 Day surf lesson' },
      { icon: <BedIcon />, text: 'Accommodation' },
      { icon: <VanIcon />, text: 'Airport transfer one way' },
    ],
  },
  {
    name: 'Surfari Package',
    duration: '1 Week',
    tagline: 'All Inclusive Surfari',
    description: 'Daily transfers to prime surf spots. Experience diverse waves at Reef and Point breaks for ultimate surfing adventure.',
    price: '499€',
    imageUrl: 'https://i.postimg.cc/C59ZYN6p/ocean-surfari-snorkeling-do-it-a.jpg',
    inclusions: [
      { icon: <BeachIcon />, text: '5 Beach transfers' },
      { icon: <MealIcon />, text: '3 Meals/day' },
      { icon: <YogaIcon />, text: '2 Yoga sessions/week' },
      { icon: <BedIcon />, text: 'Accommodation' },
      { icon: <VanIcon />, text: 'Airport transfer one way' },
    ],
  },
  {
    name: 'Surf & Yoga Combo',
    duration: '1 Week',
    tagline: 'The Perfect Balance',
    description: "Find your flow in and out of the water. This package perfectly blends daily surf lessons with rejuvenating yoga sessions to improve your balance, flexibility, and focus.",
    price: '549€',
    imageUrl: 'https://i.postimg.cc/KjTT1wT2/Yoga-and-Surfing-The-Perfect-Com.jpg',
    inclusions: [
      { icon: <SurfIcon />, text: '5 Days surf lessons' },
      { icon: <YogaIcon />, text: '5 Yoga sessions/week' },
      { icon: <MealIcon />, text: '3 Meals/day' },
      { icon: <BedIcon />, text: 'Accommodation' },
      { icon: <VanIcon />, text: 'Airport transfer one way' },
    ],
  },
  {
    name: 'Full Immersion Surf',
    duration: '1 Week',
    tagline: 'Eat, Sleep, Surf, Repeat',
    description: "For the dedicated surfer who wants to maximize time in the water. Includes twice-daily surf sessions, video analysis, and expert coaching to take your skills to the next level.",
    price: '599€',
    imageUrl: 'https://i.postimg.cc/3Nzy7Bff/1200px-MA-Sidi-Ifni-Legzira-Beac.jpg',
    inclusions: [
      { icon: <SurfIcon />, text: '10 surf sessions (2/day)' },
      { icon: <VideoIcon />, text: 'Video analysis' },
      { icon: <MealIcon />, text: '3 Meals/day' },
      { icon: <BedIcon />, text: 'Accommodation' },
      { icon: <VanIcon />, text: 'Airport transfer one way' },
    ],
  },
];

const NewPackageCard: React.FC<{ packageInfo: NewPackage }> = ({ packageInfo }) => (
  <div 
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full mx-auto overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full"
    data-aos="fade-up"
  >
    <div className="relative">
      <img src={packageInfo.imageUrl} alt={packageInfo.name} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-48 transform transition-transform duration-300 group-hover:scale-105">
        <div 
          className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg text-center border-2 border-ifni-gold"
        >
            <p className="font-consolas text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Starting From</p>
            <p className="font-magilio text-3xl font-bold text-ifni-gold">{packageInfo.price}</p>
        </div>
      </div>
    </div>

    <div className="p-8 pt-16 flex flex-col flex-grow">
      <div className="text-center mb-6">
          <h3 className="font-magilio text-2xl md:text-3xl font-bold uppercase text-[#11375c] dark:text-[#f4f5fa]">{packageInfo.name}</h3>
          <p className="font-magilio text-lg text-[#f18219] mt-1">{packageInfo.duration}</p>
          <p className="font-consolas text-base text-gray-500 dark:text-gray-400 mt-2 italic">{packageInfo.tagline}</p>
      </div>

      <p className="font-consolas text-black dark:text-gray-300 text-base leading-relaxed mb-8">{packageInfo.description}</p>
      
      <div className="mt-auto">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
            <h4 className="font-magilio text-xl text-[#11375c] dark:text-[#f4f5fa] mb-4 text-center">Inclusions</h4>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-3">
                {packageInfo.inclusions.map((item, index) => (
                <li key={index} className="flex items-center font-consolas text-charcoal-gray dark:text-sand text-sm md:text-base">
                    <span className="mr-3 text-[#f18219] flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                </li>
                ))}
            </ul>
        </div>

        <a href="#contact" className="bg-[#f18219] text-[#f4f5fa] font-magilio font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-opacity-90 text-center w-full block text-xl tracking-wider hover:shadow-lg transform hover:scale-[1.02]">
            Book Now
        </a>
      </div>
    </div>
  </div>
);


const NewPackageCardSkeleton: React.FC<{className?: string}> = ({className}) => (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full mx-auto overflow-hidden animate-pulse ${className}`}>
      <div className="bg-gray-300 dark:bg-gray-700 w-full h-56"></div>
      <div className="p-6 pt-16">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
        <div className="space-y-3 mt-6 mb-6">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            ))}
        </div>
        <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-full w-full"></div>
      </div>
    </div>
);

const PackageCarousel: React.FC<{ packages: NewPackage[] }> = ({ packages }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mobile: shows 1 card at a time
    const handleMobilePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? packages.length - 1 : prevIndex - 1));
    };
    const handleMobileNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === packages.length - 1 ? 0 : prevIndex + 1));
    };

    // Desktop: shows 3 cards, slides one card at a time
    const [desktopIndex, setDesktopIndex] = useState(0);
    const desktopVisibleCards = 3;
    const maxDesktopIndex = packages.length > desktopVisibleCards ? packages.length - desktopVisibleCards : 0;

    const handleDesktopPrev = () => {
        setDesktopIndex(prevIndex => (prevIndex === 0 ? maxDesktopIndex : prevIndex - 1));
    };
    const handleDesktopNext = () => {
        setDesktopIndex(prevIndex => (prevIndex === maxDesktopIndex ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full max-w-[95%] mx-auto">
             {/* Mobile Carousel Layout */}
            <div className="md:hidden">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {packages.map((pkg, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-2">
                                <NewPackageCard packageInfo={pkg} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Carousel Layout */}
            <div className="hidden md:block">
                <div className="overflow-hidden">
                    <div className="flex -mx-4 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${desktopIndex * (100 / desktopVisibleCards)}%)` }}>
                        {packages.map((pkg, index) => (
                            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                                <NewPackageCard packageInfo={pkg} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Mobile Arrows */}
            <button onClick={handleMobilePrev} className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white/70 dark:bg-black/70 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black z-10 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-slate dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleMobileNext} className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white/70 dark:bg-black/70 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black z-10 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-slate dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Desktop Arrows (only show if there are more cards than visible) */}
            {packages.length > desktopVisibleCards && <>
                <button onClick={handleDesktopPrev} className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white/70 dark:bg-black/70 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-black z-10 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dark-slate dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={handleDesktopNext} className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white/70 dark:bg-black/70 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-black z-10 hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dark-slate dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </>}

            {/* Dots for mobile */}
            <div className="flex justify-center mt-8 space-x-3 md:hidden">
                {packages.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-teal-green' : 'bg-gray-300 dark:bg-gray-600'}`}></button>
                ))}
            </div>

            {/* Dots for desktop (only show if there are more cards than visible) */}
            {packages.length > desktopVisibleCards && (
                <div className="hidden md:flex justify-center mt-8 space-x-3">
                    {Array.from({ length: packages.length - desktopVisibleCards + 1 }).map((_, index) => (
                        <button key={index} onClick={() => setDesktopIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${desktopIndex === index ? 'bg-teal-green' : 'bg-gray-300 dark:bg-gray-600'}`}></button>
                    ))}
                </div>
            )}
        </div>
    );
};


// --- EXISTING PAGE COMPONENTS ---

const heroSlides = [
  {
    imageUrl: 'https://i.postimg.cc/tRK8DJc4/massive-waves.jpg',
    title: 'Your Ultimate Surf Adventure',
    subtitle: 'Custom packages for every wave rider, from beginner to pro.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop',
    title: 'Balance Your Body & Mind',
    subtitle: 'Combine thrilling surf sessions with restorative yoga by the sea.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1920&auto=format&fit=crop',
    title: 'Comfort Meets Culture',
    subtitle: 'Relax in our cozy accommodations after a day of exploring Sidi Ifni.',
  },
];


const PackagesHeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);
    
    return (
        <section className="relative h-[60vh] min-h-[500px] text-white overflow-hidden">
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out animate-subtle-pan"
                    style={{ 
                        backgroundImage: `url('${slide.imageUrl}')`,
                        opacity: index === currentSlide ? 1 : 0,
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                <div key={currentSlide} className="w-full">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-magilio text-white mb-4 animate-fade-in-down">
                        {heroSlides[currentSlide].title}
                    </h1>
                    <p className="text-lg md:text-xl font-consolas text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        {heroSlides[currentSlide].subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
};


// --- Accommodation Section Components ---

const accommodationData = [
    {
        title: 'Berber Room',
        description: 'Cozy Berber-style room with authentic décor and comfort.',
        imageUrl: 'https://i.postimg.cc/W4pWC8Gx/berber-room-1.jpg',
    },
    {
        title: 'Santa Cruz Room',
        description: 'Spacious, bright room with modern comfort and Moroccan style.',
        imageUrl: 'https://i.postimg.cc/XvHrkNNL/santa-cruz-room-1.jpg',
    },
    {
        title: 'Ocean View Room',
        description: 'The Ocean View Room offers stunning Atlantic Ocean views, ideal for families or groups.',
        imageUrl: 'https://i.postimg.cc/854tH6J2/occan-view-room-1.jpg',
    },
    {
        title: 'Sun Suite',
        description: 'Sun Suite with panoramic views, ideal for friends or family.',
        imageUrl: 'https://i.postimg.cc/bvWtjNXf/sun-suite-1.jpg',
    }
];

const AccommodationCard: React.FC<{ room: typeof accommodationData[0] }> = ({ room }) => (
    <div className="text-left" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <img src={room.imageUrl} alt={room.title} className="w-full h-48 object-cover rounded-lg mb-4 shadow-md transition-transform duration-300 hover:scale-105" />
        <h4 className="text-xl font-bold text-dark-slate dark:text-gray-200 mb-2">{room.title}</h4>
        <p className="text-gray-600 dark:text-gray-400 font-consolas">{room.description}</p>
    </div>
);

const AccommodationSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => (
    <section className="bg-light-gray-blue dark:bg-dark-slate/20 py-20">
        <div className="container mx-auto px-6">
            <div className="w-full mb-12" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop" alt="Comfortable accommodation at Ifni Surf with Moroccan pillows" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue">A c c o m m o d a t i o n</h2>
                <img src="https://i.postimg.cc/L6CCYqMP/x-1.png" alt="Decorative line" className="mx-auto my-6 h-auto w-96 md:w-[600px]" />
                <p className="text-lg font-consolas text-black dark:text-gray-200 max-w-3xl mx-auto font-bold">
                    Welcome to our <em>IFNI SURF CAMP</em>, where surfing meets remote work. Enjoy ocean-view coworking, daily surf sessions, and stunning <em>SIDI IFNI</em> sunsets.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {accommodationData.map((room, index) => (
                    <AccommodationCard key={index} room={room} />
                ))}
            </div>
            <div className="text-center mt-16">
                <button onClick={() => setPage('Accommodation')} className="bg-[#f18219] text-[#f4f5fa] font-magilio font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block">
                    Book Now
                </button>
            </div>
        </div>
    </section>
);

// --- Surf Section Components ---

const surfData = [
    {
        title: 'Surf coaching for beginners',
        description: 'Learn the basics with expert instructors in a fun, supportive group setting.',
        imageUrl: 'https://i.postimg.cc/vBdGphqZ/img.webp',
    },
    {
        title: 'Boards & Wetsuits',
        description: 'High-quality boards and wetsuits provided for every level and condition.',
        imageUrl: 'https://i.postimg.cc/qq5SdMJC/img.webp',
    },
    {
        title: 'Surf Road Trip',
        description: "Join our guided trips to Morocco's top surf spots and hidden gems.",
        imageUrl: 'https://i.postimg.cc/pdC0HXk8/img.webp',
    },
    {
        title: 'Self-Guided Surf',
        description: 'Explore the coastline at your own pace with our local tips and gear.',
        imageUrl: 'https://i.postimg.cc/L8pK45kk/img.webp',
    }
];

const SurfExperienceCard: React.FC<{ experience: typeof surfData[0] }> = ({ experience }) => (
    <div className="text-left" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <img src={experience.imageUrl} alt={experience.title} className="w-full h-48 object-cover rounded-lg mb-4 shadow-md transition-transform duration-300 hover:scale-105" />
        <h4 className="text-xl font-bold text-dark-slate dark:text-gray-200 mb-2">{experience.title}</h4>
        <p className="text-gray-600 dark:text-gray-400 font-consolas">{experience.description}</p>
    </div>
);


const SurfSection: React.FC = () => (
    <section className="bg-light-gray-blue dark:bg-dark-slate/20 py-20">
        <div className="container mx-auto px-6">
            <div className="w-full mb-12" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <img src="https://i.postimg.cc/tRK8DJc4/massive-waves.jpg" alt="Surfer riding a wave" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue">S u r f</h2>
                <img src="https://i.postimg.cc/L6CCYqMP/x-1.png" alt="Decorative line" className="mx-auto my-6 h-auto w-96 md:w-[600px]" />
                <p className="text-lg font-consolas text-black dark:text-gray-200 max-w-3xl mx-auto font-bold">
                    Welcome to <em>IFNI TOUR CAMP</em> for expert surf lessons at iconic spots. Experience surfing, community, and unforgettable memories at our  <em>SurfCamp</em>. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {surfData.map((experience, index) => (
                    <SurfExperienceCard key={index} experience={experience} />
                ))}
            </div>
            <div className="text-center mt-16">
                <a href="#contact" className="bg-[#f18219] text-[#f4f5fa] font-magilio font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block">
                    Book Now
                </a>
            </div>
        </div>
    </section>
);

// --- Yoga Section Components ---

const yogaData = [
    {
        title: 'Morning / Evening yoga session',
        description: 'Start and end your day with sessions designed to energize and restore.',
        imageUrl: 'https://i.postimg.cc/fbT6QZ8f/img.webp',
    },
    {
        title: 'Integrate the concepts of balance',
        description: 'Improve your core strength and find your center, on and off the board.',
        imageUrl: 'https://i.postimg.cc/DzH5pKHW/img.webp',
    },
    {
        title: 'Unlock surfing’s hidden potential',
        description: 'Enhance your flexibility and focus to catch more waves with confidence.',
        imageUrl: 'https://i.postimg.cc/jS9zt4XB/img.webp',
    },
    {
        title: 'Make new friends',
        description: 'Connect with fellow travelers in a fun, relaxed, and supportive environment.',
        imageUrl: 'https://i.postimg.cc/Jzwr8yJ1/img.webp',
    }
];

const YogaExperienceCard: React.FC<{ experience: typeof yogaData[0] }> = ({ experience }) => (
    <div className="text-left" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <img src={experience.imageUrl} alt={experience.title} className="w-full h-48 object-cover rounded-lg mb-4 shadow-md transition-transform duration-300 hover:scale-105" />
        <h4 className="text-xl font-bold text-dark-slate dark:text-gray-200 mb-2">{experience.title}</h4>
        <p className="text-gray-600 dark:text-gray-400 font-consolas">{experience.description}</p>
    </div>
);

const YogaSection: React.FC = () => (
    <section className="bg-light-gray-blue dark:bg-dark-slate/20 py-20">
        <div className="container mx-auto px-6">
            <div className="w-full mb-12" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <img src="https://i.postimg.cc/LX7dV73M/img.webp" alt="Group yoga session on a rooftop at sunset" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue">Y o g a &nbsp; C a m p</h2>
                <img src="https://i.postimg.cc/L6CCYqMP/x-1.png" alt="Decorative line" className="mx-auto my-6 h-auto w-96 md:w-[600px]" />
                <p className="text-lg font-consolas text-black dark:text-gray-200 max-w-3xl mx-auto font-bold">
                    At <em>IFNI SURF CAMP</em>, enjoy daily yoga sessions to boost balance, flexibility, and focus, with ocean views in <em>SIDI IFNI</em> perfect after surfing.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {yogaData.map((experience, index) => (
                    <YogaExperienceCard key={index} experience={experience} />
                ))}
            </div>
            <div className="text-center mt-16">
                <a href="#contact" className="bg-[#f18219] text-[#f4f5fa] font-magilio font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block">
                    Book Now
                </a>
            </div>
        </div>
    </section>
);

// --- Activities Section Components ---

const activitiesData = [
    {
        title: 'SANDBOARDING',
        description: 'Surf across golden Sahara dunes in a fast, thrilling ride set against a striking desert landscape.',
        imageUrl: 'https://i.postimg.cc/VNdYwj6D/USO-Sandboard-DVIDS72781.jpg',
    },
    {
        title: 'HIKING',
        description: 'Explore Sidi Ifni’s coastline on a guided trek with scenic cliffs, quiet coves, and local flora',
        imageUrl: 'https://i.postimg.cc/pVYMg0CP/download.jpg',
    },
    {
        title: 'HORSE & CAMEL RIDING',
        description: 'Ride along the Moroccan coast at sunset, moving between quiet beaches and traditional villages.',
        imageUrl: 'https://i.postimg.cc/MT2gLRjW/download.jpg',
    },
    {
        title: 'JET SKI / QUAD',
        description: 'Feel the thrill on a jet ski or quad bike—high-speed adventures for adrenaline seekers.',
        imageUrl: 'https://i.postimg.cc/pVk1f3kb/download.jpg',
    },
];

const ActivityCard: React.FC<{ activity: typeof activitiesData[0] }> = ({ activity }) => (
    <div className="text-left" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <img src={activity.imageUrl} alt={activity.title} className="w-full h-48 object-cover rounded-lg mb-4 shadow-md transition-transform duration-300 hover:scale-105" />
        <h4 className="text-xl font-bold text-dark-slate dark:text-gray-200 mb-2">{activity.title}</h4>
        <p className="text-gray-600 dark:text-gray-400 font-consolas">{activity.description}</p>
    </div>
);

const ActivitiesSection: React.FC = () => (
    <section className="bg-light-gray-blue dark:bg-dark-slate/20 py-20">
        <div className="container mx-auto px-6">
            <div className="w-full mb-12" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <img src="https://i.postimg.cc/MKzkmyyM/img.webp" alt="Group enjoying activities" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue">A c t i v i t i e s</h2>
                 <img src="https://i.postimg.cc/L6CCYqMP/x-1.png" alt="Decorative line" className="mx-auto my-6 h-auto w-96 md:w-[600px]" />
                <p className="text-lg font-consolas text-black dark:text-gray-200 max-w-3xl mx-auto font-bold">
                Beyond the waves, explore <em>SIDI IFNI</em>’s culture and landscapes. Enjoy desert adventures and coastal rides for a true taste of <em>Morocco</em>’s magic.                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {activitiesData.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} />
                ))}
            </div>

            <div className="text-center mt-16">
                <a href="#contact" className="bg-[#f18219] text-[#f4f5fa] font-magilio font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block">
                    Book Now
                </a>
            </div>
        </div>
    </section>
);


// --- Main Page Component ---

const PackagesPage: React.FC<{ packages: Package[], isLoading: boolean, setPage: (page: string) => void }> = ({ packages, isLoading, setPage }) => (
  <>
    <PackagesHeroSection />
    <section className="py-20 bg-light-gray-blue dark:bg-dark-slate/20">
      <div className="container mx-auto px-6">
          <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue mb-4">
                  Ifni Tour Camp, A unique Destination, Great Experience !
              </h2>
              <img src="https://i.postimg.cc/L6CCYqMP/x-1.png" alt="Decorative line" className="mx-auto my-6 h-auto w-96 md:w-[600px]" />
              <p className="text-lg font-consolas text-black dark:text-gray-200 max-w-3xl mx-auto font-bold">
                  Welcome to Surf Camp SunSet Ifni. Located in Sidi Ifni City, our Surf Camp blends comfortable accommodation, professional surf lessons for all levels. Whether you are a beginner or an advanced surfer, our team ensures your SurfCamp experience goes beyond the waves.
              </p>
          </div>
      </div>
    </section>
    <section className="py-20 bg-deep-sea-blue dark:bg-deep-sea-blue/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-magilio text-white dark:text-booking-yellow">O u r &nbsp; L a t e s t &nbsp; O f f e r s &nbsp; !</h2>
          <img src="https://i.postimg.cc/L6CCYqMP/x-1.png" alt="Decorative line" className="mx-auto my-6 h-auto w-96 md:w-[600px]" />
          <p className="text-lg font-consolas text-white dark:text-gray-200 max-w-3xl mx-auto mt-6 font-bold">
            Choose the perfect adventure for your skill level and style. All packages include a taste of local culture and unforgettable memories.
          </p>
        </div>
        {isLoading ? (
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
              <NewPackageCardSkeleton />
              <NewPackageCardSkeleton className="hidden md:block" />
              <NewPackageCardSkeleton className="hidden md:block" />
          </div>
        ) : (
          <PackageCarousel packages={newPackages} />
        )}
      </div>
    </section>
    <AccommodationSection setPage={setPage} />
    <SurfSection />
    <YogaSection />
    <ActivitiesSection />
  </>
);

export default PackagesPage;
