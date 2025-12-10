
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PackagesPage from './components/Packages';
import BlogPostPage from './components/BlogPostPage';
import Accommodation from './components/Accommodation';
import Activities from './components/Activities';
import ShopPage from './components/ShopPage'; // Import the new ShopPage component
import SurfPage from './components/SurfPage'; // Import the new SurfPage component
import YogaPage from './components/YogaPage'; // Import the new YogaPage component
import type { Coach, Package, BlogPost, AccommodationService, ShopProduct } from './types';

declare var AOS: any;

// --- LOADING COMPONENTS ---
const Spinner: React.FC = () => (
  <div className="w-12 h-12 border-4 border-booking-yellow border-solid border-t-transparent rounded-full animate-spin" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

const BlogCardSkeleton: React.FC = () => (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden animate-pulse">
        <div className="bg-gray-300 dark:bg-gray-700 h-56 w-full"></div>
        <div className="p-6">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
            <div className="flex items-center text-sm">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
        </div>
    </div>
);


// --- DATA ---
const coaches: Coach[] = [
    {
        name: 'Youssef',
        title: 'Head Coach & Founder',
        bio: 'With 15 years on these waves, Youssef founded Ifni Surf to share his deep passion for the ocean and Moroccan hospitality.',
        imageUrl: 'https://i.postimg.cc/k5YF7rN1/p1.jpg',
    },
    {
        name: 'Fatima',
        title: 'Yoga & Surf Instructor',
        bio: 'Fatima believes in the synergy of mind and water. She guides you to find balance on and off the board through yoga and surf.',
        imageUrl: 'https://i.postimg.cc/W191sK3z/p2.jpg',
    },
    {
        name: 'Khalid',
        title: 'Local Guide & Spot Expert',
        bio: 'Born and raised in Sidi Ifni, Khalid knows every secret spot and hidden gem. He ensures you get a truly authentic, tailored experience.',
        imageUrl: 'https://i.postimg.cc/Pq06k52y/p3.jpg',
    }
];

const vibeImages = [
  { src: 'https://picsum.photos/seed/vibe1/800/600', alt: 'Lush green forest path under a blue sky', className: 'md:col-span-2' },
  { src: 'https://picsum.photos/seed/vibe2/800/600', alt: 'Close-up of a turntable spinning a vinyl record' },
  { src: 'https://picsum.photos/seed/vibe3/800/600', alt: 'Misty coastal cliffs overlooking the sea' },
  { src: 'https://picsum.photos/seed/vibe4/800/600', alt: 'People gathered in a warmly lit bar scene' },
  { src: 'https://picsum.photos/seed/vibe5/800/600', alt: 'Pink and purple silhouetted sunset over a mountain ridge' },
  { src: 'https://picsum.photos/seed/vibe6/800/600?grayscale', alt: 'Black and white photo of the Brooklyn Bridge at night' },
  { src: 'https://picsum.photos/seed/vibe7/800/600?grayscale', alt: 'Black and white photo of an ethereal sea of clouds over hills' },
];

const packages: Package[] = [
  {
    name: 'Beginner Level',
    duration: '7 Days / 6 Nights',
    level: '',
    features: [
      'Shared Accommodation',
      'Daily Breakfast & Dinner',
      '5x Surf Lessons (2h)',
      'Full Surf Equipment Rental',
      'Sidi Ifni City Tour',
      'Free Wifi'
    ],
  },
  {
    name: 'Pro Rider',
    price: '€650',
    duration: '7 Days / 6 Nights',
    level: 'Intermediate/Advanced Level',
    features: [
      'Private Room Accommodation',
      'All Meals Included',
      'Daily Guided Surf Sessions',
      'Advanced Technique Coaching',
      'Video Analysis Sessions',
      'Airport Transfer (Agadir)',
      'Yoga Session'
    ],
    highlight: true,
  },
  {
    name: 'All Levels Level',
    duration: '7 Days / 6 Nights',
    level: '',
    features: [
      'Shared Accommodation',
      'Daily Breakfast',
      'Board & Wetsuit Rental',
      'Spot Transfers',
      'Local guidance & tips'
    ],
  }
];

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Why You Should Try a Surf and Yoga Camp This Summer',
        excerpt: 'More than just a beach vacation, a surf and yoga camp transforms your body and mind. Discover the perfect balance of energy and calm, and why it might be the best thing you do for yourself this summer.',
        imageUrl: 'https://i.postimg.cc/7YW5M5WX/img.webp',
        author: 'Youssef',
        date: 'October 26, 2023',
        content: `## More Than Just a Beach Vacation

When you imagine the perfect summer getaway, what comes to mind? Maybe soft sand, warm sunsets, and waves rolling in. But what if your trip could give you more than just relaxation — what if it could transform your body and mind?

That’s exactly what a surf and yoga camp offers. It’s a place where you can challenge yourself, reconnect with nature, and find balance — all while having the time of your life. Whether you’re a beginner or just looking for a healthy break, this combination is pure magic.

Let’s dive into why a surf and yoga camp might just be the best thing you do for yourself this summer.

### 1. A Perfect Balance Between Energy and Calm

Surfing and yoga might seem like opposites — one full of adrenaline, the other peaceful and still. But together, they create a beautiful balance.

• Surfing builds strength, coordination, and focus.

• Yoga improves flexibility, breathing, and inner calm.

After a morning catching waves, yoga helps your muscles recover and keeps your mind centered. This balance of energy and calm is what makes surf and yoga camps truly unique.

### 2. Yoga Improves Your Surfing Skills (And Vice Versa)

Many professional surfers practice yoga for a reason — it works!

• Yoga helps improve balance, which is crucial for standing on your board.

• It teaches breath control, helping you stay calm when you wipe out or face a big wave.

• Surfing, on the other hand, strengthens your core and stamina, which enhances your yoga practice.

Together, they make you stronger, more focused, and more connected to your body.

### 3. The Ultimate Way to Disconnect from Stress

In our fast-paced world, we’re constantly connected — emails, notifications, deadlines. A surf and yoga camp is your chance to hit pause.

Most camps are located in stunning natural spots — think Bali, Costa Rica, Morocco, or Portugal. You wake up with the sunrise, practice yoga by the beach, surf during the day, and fall asleep to the sound of the ocean.

No stress. No rush. Just pure presence. 🌺

### 4. A Supportive Community of Like-Minded People

One of the best parts of joining a surf and yoga camp is the people you’ll meet. Everyone is there for the same reason — to grow, relax, and enjoy life.

You’ll share meals, surf sessions, and laughter with people from all over the world. It’s not just a trip — it’s a community experience. Many travelers leave camp with new friends (and sometimes, life-changing connections).

### 5. Nourishing Food and Healthy Lifestyle

Surf and yoga camps usually include healthy, local meals — fresh fruits, smoothie bowls, grilled fish, and plant-based options.

The food is designed to fuel your body for surfing while keeping you light and energized for yoga. You’ll probably leave camp feeling healthier, stronger, and more vibrant than when you arrived.

### 6. You Don’t Need to Be an Expert

Worried you’ve never surfed or tried yoga before? Don’t be.

Most surf and yoga camps are beginner-friendly. You’ll have patient instructors who guide you step by step, whether it’s your first time on a surfboard or your first downward dog. The goal isn’t perfection — it’s progress and fun.

### 7. You’ll Create Memories That Last a Lifetime

Imagine this: You’re sitting on your board, waiting for the next wave, watching the sunset paint the sky orange and pink. Later that night, you join a group bonfire, laughing with new friends under the stars.

That’s what surf and yoga camps are all about — unforgettable experiences that feed your soul. You’ll return home refreshed, stronger, and maybe even a little transformed.

### 8. A Sustainable Way to Travel

Many surf and yoga camps follow eco-friendly practices — from plastic-free policies to locally sourced food and solar-powered facilities. By joining one, you’re supporting responsible tourism and protecting the environment you enjoy so much.

### 9. Popular Surf & Yoga Camp Destinations

If you’re wondering where to go this summer, here are some of the most popular spots:

• Bali, Indonesia: Lush nature, warm waves, and spiritual vibes.

• Taghazout, Morocco: Year-round surf, ocean-view yoga decks, and rich culture.

• Costa Rica: Jungle meets the ocean — pura vida style!

• Portugal: Stunning coastlines, friendly locals, and great surf schools.

• Sri Lanka: Calm waves and peaceful yoga retreats by the beach.

Each destination has its own charm — it just depends on your mood and travel goals.

### 10. The Perfect Gift to Yourself

In a world that’s always demanding more, taking time for yourself is the best investment you can make. A surf and yoga camp gives you space to reconnect, recharge, and rediscover your inner peace.

So this summer, skip the usual vacation. Instead, choose something that feeds your soul and transforms your body.

You deserve it. 🌞🌊`
    },
    // ... (rest of blogPosts omitted for brevity, keeping existing content)
];

const accommodationServices: AccommodationService[] = [
    {
        id: '1',
        name: 'Ocean View Riad',
        logoUrl: 'https://i.postimg.cc/mD0Vz3Y3/logo1.png',
        description: 'A beautiful Riad located right on the coast, offering stunning ocean views from every room. Perfect for those who want to wake up to the sound of waves.\n\nIncludes a rooftop terrace for yoga and relaxation, daily Moroccan breakfast, and is just a short walk from the town center.',
        tags: ['Ocean View', 'Rooftop Terrace', 'Luxury', 'Free Wifi', 'Breakfast Included'],
        affiliateUrl: 'https://www.booking.com/'
    },
    {
        id: '2',
        name: 'The Surfer\'s Hub',
        logoUrl: 'https://i.postimg.cc/mD0Vz3Y3/logo1.png',
        description: 'A budget-friendly hostel designed for surfers. Features a shared living space, board storage, and is located just a 5-minute walk from the main surf break.\n\nA great place to meet other travelers, with communal dinners and organized social events.',
        tags: ['Hostel', 'Budget-Friendly', 'Social', 'Board Storage', 'Close to Beach'],
        affiliateUrl: 'https://www.hostelworld.com/'
    },
    {
        id: '3',
        name: 'Berber Coast Apartments',
        logoUrl: 'https://i.postimg.cc/mD0Vz3Y3/logo1.png',
        description: 'Modern, self-catering apartments with fully equipped kitchens. Ideal for families or groups who want more independence during their stay.\n\nEach apartment has a private balcony, and there is a shared pool available for all guests.',
        tags: ['Apartment', 'Self-Catering', 'Family Friendly', 'Private Balcony', 'Pool'],
        affiliateUrl: 'https://www.airbnb.com/'
    },
];

interface RoomType {
  name: string;
  hashtag: string;
  imageUrl: string;
}

const roomTypes: RoomType[] = [
  {
    name: 'Berber Room',
    hashtag: '#DIDYOUSURFTODAY',
    imageUrl: 'https://i.postimg.cc/W4pWC8Gx/berber-room-1.jpg',
  },
  {
    name: 'Santa Cruz Room',
    hashtag: '#DIDYOUSURFTODAY',
    imageUrl: 'https://i.postimg.cc/XvHrkNNL/santa-cruz-room-1.jpg',
  },
  {
    name: 'Ocean View Room',
    hashtag: '#DIDYOUSURFTODAY',
    imageUrl: 'https://i.postimg.cc/854tH6J2/occan-view-room-1.jpg',
  },
  {
    name: 'Sun Suite  Room',
    hashtag: '#DIDYOUSURFTODAY',
    imageUrl: 'https://i.postimg.cc/bvWtjNXf/sun-suite-1.jpg',
  },
];

// --- NEW SHOP DATA ---
const shopProducts: ShopProduct[] = [
    {
        id: '1',
        name: 'Dingle Surf Wave T-Shirt',
        price: '€25.00',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        description: 'Ride the wave of style with our classic organic cotton t-shirt. Featuring a retro wave graphic, it\'s the perfect tee for beach days and beyond. Soft, breathable, and built to last.'
    },
    {
        id: '2',
        name: 'Dingle Surf Classic Long Sleeve',
        price: '€35.00',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        description: 'Stay warm on cooler evenings with our premium long sleeve. Made from a soft cotton blend, it features the iconic Dingle Surf logo on the chest and a minimalist design on the back.'
    },
    {
        id: '3',
        name: 'Dingle Surf Co. Kerry T-Shirt',
        price: '€25.00',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        description: 'Represent the rugged coast of County Kerry. This t-shirt is a tribute to our home, featuring a unique typographic design that captures the spirit of the Irish coast. Made from 100% organic cotton.'
    },
    {
        id: '4',
        name: 'Dingle Surf Wave Long Sleeve T-Shirt - Atlantic Storm',
        price: '€35.00',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        description: 'Embrace the elements with the Atlantic Storm edition long sleeve. A darker take on our classic wave design, this shirt is perfect for those who feel the power of the ocean. Heavyweight cotton for extra warmth.'
    }
];

// --- UI COMPONENTS ---

const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string, padding?: string }> = ({ children, className, id, padding = 'py-12 md:py-16' }) => (
    <section id={id} className={className}>
        <div className={`container mx-auto px-6 ${padding}`}>
            {children}
        </div>
    </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode, subtitle?: string, fontStyle?: 'default' | 'special' }> = ({ children, subtitle, fontStyle = 'default' }) => (
    <div className="text-center mb-10 md:mb-12">
        <h2 className={
            fontStyle === 'special'
            ? "text-3xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down"
            : "text-3xl md:text-4xl font-bold font-heading text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down"
        }>
            {children}
        </h2>
        <img 
            src="https://i.postimg.cc/NGKcdBNt/1.png" 
            alt="Decorative line" 
            className="mx-auto my-4 h-auto w-80 md:w-[500px] animate-fade-in-up" 
        />
        {subtitle && <p className={
            fontStyle === 'special'
            ? "text-lg font-mono text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
            : "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
        }>{subtitle}</p>}
    </div>
);

// --- HOME PAGE COMPONENTS ---

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
  },
  {
    imageUrl: 'https://i.postimg.cc/zXhdypJh/3.jpg',
    title: 'Sun, Sea, and Soul',
    subtitle: 'Connect with nature and yourself at our authentic surf camp.',
  },
  {
    imageUrl: 'https://i.postimg.cc/hjHLgWQp/4.jpg',
    title: 'Surf the Sunset',
    subtitle: 'Endless horizons and golden hours on the waves.',
  },
  {
    imageUrl: 'https://i.postimg.cc/yd5Pd3tL/5.jpg',
    title: 'Adventure Awaits',
    subtitle: 'Discover hidden surf spots along the Moroccan coast.',
  }
];

const HeroSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % heroSlides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval);
    }, []);

    const handleButtonClick = (link: string) => {
        if (link.startsWith('#')) {
            const element = document.querySelector(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            setPage(link);
        }
    };

    return (
        <section className="relative h-[85vh] min-h-[600px] text-white overflow-hidden">
             {/* Background Slides with Fade Effect */}
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out animate-subtle-pan"
                    style={{ 
                        backgroundImage: `url('${slide.imageUrl}')`,
                        opacity: index === currentSlide ? 1 : 0,
                    }}
                >
                    <div className="absolute inset-0 bg-title-blue/40"></div>
                </div>
            ))}
            
             {/* Animated Waves - Peeking out from behind the static divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[5] opacity-40 h-[100px] md:h-[220px]">
                <svg className="relative block w-[calc(100%+1.3px)] h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" className="animate-wave-slow" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" className="animate-wave-medium" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" className="animate-wave-fast" />
                    </g>
                </svg>
            </div>


            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                <div className="flex-grow flex flex-col items-center justify-center">
                    <div key={currentSlide} className="w-full">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-magilio text-white mb-4 animate-fade-in-down drop-shadow-lg leading-tight">
                            {heroSlides[currentSlide].title}
                        </h1>
                        <p className="text-lg md:text-xl font-consolas text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up-base" style={{ animationDelay: '0.3s' }}>
                            {heroSlides[currentSlide].subtitle}
                        </p>
                    </div>
                    <div className="animate-fade-in-up-base" style={{ animationDelay: '0.6s' }}>
                         <button
                            onClick={() => handleButtonClick('#intro')}
                            className="bg-ifni-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-ifni-gold/50 inline-block"
                        >
                            Discover Your Adventure
                        </button>
                    </div>
                </div>
            </div>

            {/* Optimized Orange Multi-Layer Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg 
                    className="relative block w-full h-[80px] md:h-[150px]" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    {/* Back Layer - Semi-transparent for depth */}
                    <path 
                        d="M0,120L1200,120L1200,60C1050,90 900,110 750,90C600,70 450,40 300,50C150,60 50,90 0,100Z" 
                        className="fill-[#f18219] opacity-60"
                    ></path>
                    
                    {/* Front Layer - Solid Orange */}
                    <path 
                        d="M0,120L1200,120L1200,80C1000,120 800,40 600,60C400,80 200,100 0,60Z" 
                        className="fill-[#f18219]" 
                        fillOpacity="1"
                    ></path>
                </svg>
            </div>
        </section>
    );
};


const IntroSection: React.FC = () => (
  <Section id="intro" className="bg-light-gray-blue dark:bg-dark-slate/20">
    {/* Welcome Text Part */}
    <div className="text-center max-w-4xl mx-auto">
      <img src="https://i.postimg.cc/GtswGY0P/65.png" alt="Sunset Ifni Surf Camp Wave Logo" className="mx-auto mb-4 h-20 animate-fade-in-down" />
      <h2 className="text-2xl md:text-4xl font-magilio text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
        <span className="whitespace-nowrap">W e l c o m e</span> <span className="whitespace-nowrap">&nbsp; t o</span> <span className="whitespace-nowrap">&nbsp; I f n i</span> <span className="whitespace-nowrap">&nbsp; T o u r</span> <span className="whitespace-nowrap">&nbsp; <br/>S u r f</span> <span className="whitespace-nowrap">&nbsp; C a m p</span>
      </h2>
      <img 
        src="https://i.postimg.cc/NGKcdBNt/1.png" 
        alt="Decorative line" 
        className="mx-auto my-4 h-auto w-80 md:w-[500px] animate-fade-in-up" 
        style={{ animationDelay: '0.2s' }} 
      />
      <p className="text-lg font-mono font-bold text-black dark:text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        At Ifni Tour Camp, we believe surfing is more than just a sport it’s a lifestyle. Our camp offers an authentic Moroccan surf experience where sunset, sea, and soul connect.
      </p>
    </div>
  </Section>
);

// --- NEW Welcome Section (Replaces SidiIfniSection) ---
const WelcomeSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const welcomeImages = [
    "https://i.postimg.cc/7PNRg8tv/9.jpg",
    "https://i.postimg.cc/g0vsm8fW/pexels-hameen-31633265.jpg",
    "https://i.postimg.cc/prNnT68C/pexels-alexandre-saraiva-carniato-583650-2045391.jpg",
    "https://i.postimg.cc/XYy6kfxC/8.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % welcomeImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 md:py-16 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left Column */}
                <div className="lg:w-1/2 text-left animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-magilio text-[#f2831a] dark:text-[#f2831a] mb-4">
                    Welcome to Ifni Tour Surf Camp
                </h2>
                <p className="text-lg font-consolas font-bold text-black dark:text-gray-100 mb-6 leading-relaxed">
                    Welcome to Ifni Tour Surf Camp, the hidden gem of Morocco. Located in the heart of Sidi Ifni, our Surf Camp blends comfortable accommodation, professional surf lessons for all levels, and a vibrant community atmosphere. Whether you are a beginner or an advanced surfer, our team ensures your SurfCamp experience goes beyond the waves.
                </p>
                
                <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                    <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4 text-title-blue dark:text-sand flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    <span className="text-lg font-medium text-dark-slate dark:text-gray-200">Located in the heart of Sidi Ifni</span>
                    </div>
                    <div className="flex items-center">
                    <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4 text-title-blue dark:text-sand flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012 2v1.065M15 19.88V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                    <span className="text-lg font-medium text-dark-slate dark:text-gray-200">Guests from 40+ countries</span>
                    </div>
                    <div className="flex items-center">
                    <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4 text-title-blue dark:text-sand flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                    <span className="text-lg font-medium text-dark-slate dark:text-gray-200">Daily surf, yoga, and community events</span>
                    </div>
                </div>

                <button 
                    onClick={() => setPage('About')}
                    className="bg-gradient-to-r from-[#004677] to-[#0a81d5] text-white font-magilio py-4 px-10 rounded-full text-2xl tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    Meet The Ifni Tour Family
                </button>
                </div>

                {/* Right Column - Slideshow */}
                <div className="lg:w-1/2 relative w-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                         {welcomeImages.map((img, index) => (
                            <img 
                                key={index}
                                src={img} 
                                alt={`Welcome slide ${index + 1}`} 
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};


// --- START: New "Why Choose Us" Section ---
const valuePropsData = [
  {
    headline: "Authentic Local Experience",
    body: "Led by passionate local experts, we offer an unparalleled connection to the culture, community, and secret surf spots of Sidi Ifni.",
    imageUrl: "https://i.postimg.cc/ZnFgsXLJ/create-a-image-founded-and-run-by-local-surf-experts-we-offer-an-unparalleled-connection-to-the-c.png",
  },
  {
    headline: "World-Class Coaching",
    body: "Our certified instructors use personalized techniques and video analysis to help you progress, whatever your skill level.",
    imageUrl: "https://i.postimg.cc/C53y9b3L/analyse.png",
  },
  {
    headline: "The Ifni Tour Vibe",
    body: "More than a camp, we're a family. Enjoy delicious home-cooked meals, sunset yoga, and good vibes by the campfire.",
    imageUrl: "https://i.postimg.cc/MTtpk35f/restaurant-ifni-sunset-13.webp",
  },
  {
    headline: "All-Inclusive & Hassle-Free",
    body: "From top-quality gear to airport transfers, we've got you covered. Just show up and we'll handle the rest for an unforgettable adventure.",
    imageUrl: "https://i.postimg.cc/nzQf2d5z/create-a-image-from-airport-transfers-to-top-quality-gear-weve-got-you-covered-just-show-up-and-w.png",
  },
  {
    headline: "Ocean View",
    body: "Wake up to the sound of the waves. Our camp offers stunning ocean views, putting you right at the heart of the action from sunrise to sunset.",
    imageUrl: "https://i.postimg.cc/T1YqGSXQ/6082982.jpg",
  },
];

interface ValueProp {
    headline: string;
    body: string;
    imageUrl: string;
}

const ValuePropPanel: React.FC<{ prop: ValueProp }> = ({ prop }) => (
  <div 
    className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3] group transform hover:-translate-y-2 transition-transform duration-300"
    data-aos="fade-up"
    data-aos-anchor-placement="center-center"
  >
    <img src={prop.imageUrl} alt={prop.headline} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-6 transition-colors duration-300 group-hover:bg-black/70">
      <h3 className="text-2xl md:text-4xl font-magilio mb-4">{prop.headline}</h3>
      {/* Using font-heading (Poppins) as a substitute for the specified but unavailable Ebrima font */}
      <p className="font-heading max-w-sm font-light">{prop.body}</p>
    </div>
  </div>
);

const ValuePropsSection: React.FC = () => (
    <Section className="bg-light-gray-blue dark:bg-dark-slate">
        <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-magilio text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down">
                W h y &nbsp; C h o o s e &nbsp; U s &nbsp; ?
            </h2>
             <img 
                src="https://i.postimg.cc/NGKcdBNt/1.png" 
                alt="Decorative line" 
                className="mx-auto my-4 h-auto w-80 md:w-[500px] animate-fade-in-up" 
                style={{ animationDelay: '0.1s' }}
            />
            <p className="text-lg font-mono font-bold text-black dark:text-white max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                We’re not another surf camp. We're your gateway to an unforgettable Moroccan adventure.
            </p>
        </div>
        
        {/* Top row with 3 panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePropsData.slice(0, 3).map((prop) => (
                <ValuePropPanel key={prop.headline} prop={prop} />
            ))}
        </div>
        
        {/* Bottom row with 2 panels, centered */}
        <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuePropsData.slice(3, 5).map((prop) => (
                <ValuePropPanel key={prop.headline} prop={prop} />
            ))}
        </div>
    </Section>
);
// --- END: New "Why Choose Us" Section ---

// --- NEW Community Section ---
const CommunitySection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const communityImages = [
        'https://i.postimg.cc/wjp1gKpv/583737643-25486704330941405-5574.jpg',
        'https://i.postimg.cc/05KjS55r/583041309-25486704700941368-2860.jpg',
        'https://i.postimg.cc/0NH56FLC/584404803-25486705380941300-4432.jpg',
        'https://i.postimg.cc/KzMb1z74/582871584-25487323140879524-5552.jpg'
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % communityImages.length);
        }, 4000);

        return () => {
            clearInterval(slideInterval);
        };
    }, []);

  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center bg-[#f18219]">
      {/* Background Images without Parallax */}
      {communityImages.map((img, index) => (
        <div 
          key={index}
          className="absolute inset-0 w-full h-full" 
          style={{ 
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1500ms ease-in-out',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-magilio text-white mb-6 drop-shadow-md animate-fade-in-down">
          More than waves — it’s music, sunsets, and memories.
        </h2>
        
        {/* Decorative Orange Line */}
        <div className="w-24 h-1.5 bg-[#f18219] mx-auto mb-8 rounded-full shadow-sm animate-fade-in-up"></div>
        
        <p className="text-lg md:text-2xl font-bold font-consolas text-gray-100 max-w-3xl mx-auto drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Join our community of surfers, travelers, and free spirits for the adventure of a lifetime in Sidi Ifni.
        </p>
      </div>
    </section>
  );
};
// --- END: Community Section ---


const RoomCard: React.FC<{ room: RoomType }> = ({ room }) => (
  <div 
    className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1200"
  >
    <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
      <img 
        src="https://i.postimg.cc/NfRPKtVh/6.png" 
        alt="Ifni Sunset Logo" 
        className="h-20 w-auto mb-4"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
      <h3 className="text-2xl md:text-3xl font-magilio uppercase tracking-wider">{room.name}</h3>
      <p className="mt-1 text-sm font-consolas font-bold italic tracking-widest">{room.hashtag}</p>
    </div>
  </div>
);

const RoomTypesSection: React.FC<{ rooms: RoomType[], setPage: (page: string) => void }> = ({ rooms, setPage }) => (
  <Section className="bg-gradient-to-r from-[#0b3d62] to-[#25a2ff]">
    <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-magilio text-[#f4f5fa] dark:text-[#f4f5fa] mb-4 animate-fade-in-down">
            O U R &nbsp; R O O M &nbsp; T Y P E S
        </h2>
        <img 
          src="https://i.postimg.cc/NGKcdBNt/1.png" 
          alt="Decorative line" 
          className="mx-auto my-4 h-auto w-80 md:w-[500px] animate-fade-in-up" 
          style={{ animationDelay: '0.1s' }}
        />
        <p className="text-lg font-mono font-bold text-white dark:text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Enjoy our inviting, real rooms, each with a distinct personality, created to provide you with a wonderful time in Sidi Ifni.
        </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms.map((room, index) => (
            <RoomCard key={`${room.name}-${index}`} room={room} />
        ))}
    </div>

    <div className="text-center mt-12">
        <button 
            onClick={() => setPage('Accommodation')}
            className="bg-gradient-to-r from-[#f18219] to-[#ffcc7a] text-white font-magilio py-4 px-10 rounded-full text-2xl tracking-wider hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
            Discover More
        </button>
    </div>
  </Section>
);

// --- NEW EXPERIENCE GRID SECTION ---
const experienceBlocks = [
    {
        title: "Discover The Magic Of Sidi Ifni",
        image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop",
        description: "Sidi Ifni is Morocco’s surf and party paradise—a place to catch world-class waves, meet incredible people from around the globe, and live the ultimate adventure lifestyle.",
        features: [
            "Consistent waves year-round",
            "Vibrant international surf community",
            "Authentic Moroccan culture & cuisine",
            "Perfect weather for beach life"
        ],
        cta: "Discover Sidi Ifni",
        link: "Activities"
    },
    {
        title: "The Ocean Calls",
        image: "https://images.unsplash.com/photo-1502680390408-f8b8fe1e2c1e?q=80&w=800&auto=format&fit=crop",
        description: "Every morning in Sidi Ifni begins with the sound of waves. Whether you’re standing on a board for the very first time or chasing your hundredth ride, the ocean always has something new to teach.",
        features: [],
        cta: "Feel the Waves",
        link: "Surf"
    },
    {
        title: "Find Your Flow",
        image: "https://images.unsplash.com/photo-1599447462464-a55a8a8a36a7?q=80&w=800&auto=format&fit=crop",
        description: "After the waves, it’s time to slow down. Breathe deeply, stretch by the ocean, and reconnect with your body.\n\nOur daily yoga sessions bring balance to your surf adventure — sunrise or sunset, the work is always unforgettable.",
        features: [],
        cta: "Explore Yoga",
        link: "YogaCamp"
    },
    {
        title: "Work, Surf & Stay",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
        description: "Why choose between work and adventure when you can have both? Our coworking space is designed for digital nomads who want fast Wi-Fi, inspired community, and surf breaks between calls.\n\nStay with us in Sidi Ifni, share meals, and be part of a community that feels like family.",
        features: [],
        cta: "Discover Coworking",
        link: "Accommodation"
    }
];

const ExperienceGridSection: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => (
    <Section className="bg-white dark:bg-gray-900">
        <SectionTitle subtitle="Immerse yourself in a lifestyle of adventure, wellness, and community.">
            Experience The Lifestyle
        </SectionTitle>
        <div className="flex flex-col gap-24 w-full">
            {experienceBlocks.map((block, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Container */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[400px] lg:h-[550px] overflow-hidden rounded-2xl shadow-xl group">
                            <img 
                                src={block.image} 
                                alt={block.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>
                    </div>
                    
                    {/* Content Container */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <h3 className="text-4xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue mb-6 leading-tight">
                            {block.title}
                        </h3>
                        <p className="text-lg md:text-xl font-sans text-gray-600 dark:text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
                            {block.description}
                        </p>
                        
                        {block.features && block.features.length > 0 && (
                            <ul className="mb-10 space-y-4">
                                {block.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-700 dark:text-gray-400 font-sans text-lg">
                                        <span className="mt-1 mr-3 text-[#0a81d5] flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <button 
                            onClick={() => setPage(block.link)}
                            className="bg-[#0a81d5] text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-[#004677] transition-all duration-300 transform hover:scale-105"
                        >
                            {block.cta}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);
// --- END: New Experience Grid Section ---

const CoachCard: React.FC<{ coach: Coach }> = ({ coach }) => (
    <div className="text-center group animate-fade-in-up-base">
        <div className="relative inline-block mb-4">
            <img src={coach.imageUrl} alt={coach.name} className="rounded-full w-40 h-40 object-cover shadow-lg mx-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-booking-yellow transition-all duration-300"></div>
        </div>
        <h3 className="text-xl font-bold font-heading text-dark-slate dark:text-sand mb-1">{coach.name}</h3>
        <p className="text-ocean-blue dark:text-experience-yellow font-semibold mb-2">{coach.title}</p>
        <p className="text-gray-600 dark:text-gray-400">{coach.bio}</p>
    </div>
);

const CoachesSection: React.FC<{ coaches: Coach[] }> = ({ coaches }) => (
    <Section className="bg-light-gray-blue dark:bg-dark-slate/20">
        <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue mb-4 animate-fade-in-down">
                M e e t &nbsp; T h e &nbsp; C r e w
            </h2>
            <img
              src="https://i.postimg.cc/NGKcdBNt/1.png"
              alt="Decorative line"
              className="mx-auto my-4 h-auto w-80 md:w-[500px] animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            />
            <p className="text-lg font-mono font-bold text-black dark:text-sand max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Our experienced and friendly team is here to guide you every step of the way.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
            {coaches.map((coach) => <CoachCard key={coach.name} coach={coach} />)}
        </div>
    </Section>
);

const VibeGallery: React.FC<{ images: typeof vibeImages }> = ({ images }) => (
    <Section className="bg-deep-sea-blue dark:bg-deep-sea-blue/95">
        <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-magilio text--[#f4f5fa] dark:text-[#f4f5fa] mb-4 animate-fade-in-down">
                C a t c h &nbsp; T h e  &nbsp; V i b e
            </h2>
            <img
              src="https://i.postimg.cc/NGKcdBNt/1.png"
              alt="Decorative line"
              className="mx-auto my-4 h-auto w-80 md:w-[500px] animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            />
            <p className="text-lg font-mono font-bold text-white dark:text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Discover about the memorable experiences that our customers had at Ifni Tour.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
                <div key={index} className={`overflow-hidden rounded-lg shadow-lg group ${image.className || ''}`}>
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
            ))}
        </div>
    </Section>
);

const BlogCard: React.FC<{ post: BlogPost; onSelectPost: (post: BlogPost) => void }> = ({ post, onSelectPost }) => (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer group" onClick={() => onSelectPost(post)}>
        <img className="h-56 w-full object-cover" src={post.imageUrl} alt={post.title} />
        <div className="p-6">
            <h3 className="text-xl font-bold font-heading text-title-blue dark:text-sand mb-2 group-hover:text-ocean-blue dark:group-hover:text-booking-yellow transition-colors duration-300">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
            </div>
        </div>
    </div>
);

// --- START: New Code-Based Testimonials Section (Clean & Clear) ---

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "OLLIVANDER",
    role: "customer",
    avatar: "https://i.postimg.cc/3xx9gjYm/2.png",
    text: "Une expérience inoubliable, un staff en or très accueillant, très chaleureux qui met à l'aise et très serviable. Vous vous sentez comme chez vous, avec tout tour des Décors magnifiques, C'est littéralement une valeur sûre, vous pouvez y aller les yeux fermés 😑"
  },
  {
    name: "SHAYNA",
    role: "customer",
    avatar: "https://i.postimg.cc/W11SMmTM/3.png",
    text: "Une expérience exceptionnelle du début à la fin ! 🌟 Un accueil chaleureux, une équipe aux petits soins, toujours souriante et à l'écoute. On se sent immédiatement à l'aise, comme à la maison, dans un cadre tout simplement magnifique. L'ambiance est apaisante, le service impeccable. Merci à toute l'équipe !"
  },
  {
    name: "CINOORDO",
    role: "customer",
    avatar: "https://i.postimg.cc/Dww5qQnG/4.png",
    text: "\"Semaine de rêve pour une équipe de 10 lycéens en ciné-audio! Auberge hyper confortable, literie au top, déco pleine de goût et la cerise sur le gâteau une jeune équipe disponible autour d'un chef cuisinier irréprochable. Ici c'est bio, équitable et local! Un palais des mille et une nuits tourné vers la mer !\""
  },
  {
    name: "Andrea",
    role: "customer",
    avatar: "https://i.postimg.cc/t44DhdpF/5.png",
    text: "Ifni sunset is beautiful place to stay! We were here for 7nights, room was clean and really nice. Breakfasts were so rich, with many options. But the best thing about this place was hospitality! The staff is so helpful and kind! We will definitely come back! ❤️"
  },
   {
    name: "Jawale",
    role: "customer",
    avatar: "https://i.postimg.cc/3xx9gjYm/2.png",
    text: "Je n'ai pas l'habitude de laisser des commentaires mais je tenais à remercier sincèrement ifni sunset pour les vacances exceptionnelles que j'ai passé. Merci à Youssef et Rachid pour leur générosité, leur accueil, leur disponibilité et leur joie de vivre. C'était un séjour inoubliable."
  }
];


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div 
        className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative pt-16 px-8 pb-8 h-full flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
        data-aos="fade-up"
    >
        {/* Floating Pill Header */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF8C4D] to-[#f18219] rounded-full p-1.5 flex items-center shadow-md">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border-2 border-white" />
            <div className="ml-3 mr-4 text-left">
                <p className="text-white font-bold text-sm uppercase leading-none">{testimonial.name}</p>
                <p className="text-white/80 text-[10px] leading-none mt-0.5">{testimonial.role}</p>
            </div>
        </div>

        {/* Decorative Quotes */}
        <div className="absolute top-8 left-6 text-[#D3D3D3] text-5xl font-serif leading-none opacity-50">“</div>

        {/* Text Content */}
        <div className="mt-4 mb-6">
             <p className="text-gray-700 font-sans text-sm leading-relaxed text-left line-clamp-[8]">
                {testimonial.text}
            </p>
        </div>
        
         {/* Footer: Rating & Bottom Quote */}
        <div className="flex justify-between items-end mt-auto">
             <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
             <div className="text-[#f18219] text-5xl font-serif leading-none opacity-80 rotate-180 translate-y-2">“</div>
        </div>
    </div>
);

const NewTestimonialsSection: React.FC = () => {
    // --- Mobile Carousel Logic (1 slide) ---
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleMobileNext = () => setCurrentIndex(prev => (prev + 1) % testimonials.length);
    const handleMobilePrev = () => setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));

    // --- Desktop Layout (Responsive Grid 1-2-5) ---
    // Note: Since we only have 5 testimonials, and the request is to show 5 on desktop,
    // we don't need carousel logic for desktop anymore, just a grid.
    // However, if more testimonials are added, carousel logic would be needed.
    // Based on "Display exactly 5 cards per row on desktop", I will use a static grid for desktop.
    
    // Tablet Logic (2 slides) - Need carousel for Tablet view if we have > 2 items
    const [tabletIndex, setTabletIndex] = useState(0);
    const tabletVisibleCards = 2;
    const maxTabletIndex = Math.max(0, testimonials.length - tabletVisibleCards);
    const handleTabletNext = () => setTabletIndex(prev => prev >= maxTabletIndex ? 0 : prev + 1);
    const handleTabletPrev = () => setTabletIndex(prev => prev <= 0 ? maxTabletIndex : prev - 1);


    return (
        <section className="bg-[#F3F3F3] dark:bg-charcoal-gray py-20 w-full relative group">
             <div className="container mx-auto px-6 text-center mb-16">
                 <SectionTitle subtitle="Real stories from our community, designed to build trust, credibility, and emotional connection.">
                    What Our Guests Say
                </SectionTitle>
            </div>
            
            {/* Enlarged Container */}
            <div className="container mx-auto px-6 relative max-w-[95%] 2xl:max-w-7xl">
                
                {/* --- Mobile View (< md) : 1 Card Carousel --- */}
                <div className="md:hidden relative">
                    <button onClick={handleMobilePrev} className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-[#f18219] text-white p-2 rounded-full shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={handleMobileNext} className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-[#f18219] text-white p-2 rounded-full shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="overflow-hidden w-full py-8">
                        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-2 h-auto">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Tablet View (md - lg) : 2 Card Carousel --- */}
                <div className="hidden md:block lg:hidden relative">
                     <button onClick={handleTabletPrev} className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-[#f18219] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={handleTabletNext} className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-[#f18219] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="overflow-hidden w-full py-8">
                        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${tabletIndex * 50}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-1/2 flex-shrink-0 px-4 h-auto">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Desktop View (lg+) : 5 Cards Static Grid --- */}
                <div className="hidden lg:flex w-full py-8 justify-center gap-4 xl:gap-6">
                    {testimonials.slice(0, 5).map((testimonial, index) => (
                        <div key={index} className="w-1/5 flex-shrink-0 h-auto">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

            </div>

            <div className="text-center mt-12">
                <button 
                    className="bg-[#f18219] text-[#f4f5fa] font-magilio py-4 px-10 rounded-full text-2xl tracking-wider hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                    Show More
                </button>
            </div>
        </section>
    );
};
// --- END: New Static Testimonials Section ---


const HomePage: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => (
    <div className="animate-page-fade-in">
        <HeroSection setPage={setPage} />
        <IntroSection />
        <WelcomeSection setPage={setPage} />
        <CommunitySection />
        <ValuePropsSection />
        <RoomTypesSection rooms={roomTypes} setPage={setPage} />
        <ExperienceGridSection setPage={setPage} />
        <CoachesSection coaches={coaches} />
        <NewTestimonialsSection />
    </div>
);

// --- BLOG LIST PAGE ---
const BlogListPage: React.FC<{ posts: BlogPost[], onSelectPost: (post: BlogPost) => void, isLoading: boolean }> = ({ posts, onSelectPost, isLoading }) => (
    <Section className="bg-sand dark:bg-gray-900 min-h-screen" padding="pt-20 md:pt-24 pb-12 md:pb-16">
        <SectionTitle subtitle="Dive into our collection of stories, tips, and guides.">
            The SunSet Ifni Blog
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => <BlogCardSkeleton key={index} />)
            ) : (
                posts.map(post => <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />)
            )}
        </div>
    </Section>
);

// --- ABOUT PAGE ---
const AboutPage: React.FC = () => (
    <div className="animate-page-fade-in">
        <Section className="bg-sand dark:bg-gray-900" padding="pt-20 md:pt-24 pb-12 md:pb-16">
            <SectionTitle subtitle="This is our story.">
                About SunSet Ifni
            </SectionTitle>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <img src="https://i.postimg.cc/k4G2w00g/2.webp" alt="Sidi Ifni beach" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                    <p>SunSet Ifni was born from a simple dream: to create a place where the love for surfing meets the warmth of Moroccan hospitality. Founded by a group of local surfers, our camp is built on the principles of community, respect for the ocean, and sharing the incredible culture of Sidi Ifni with the world.</p>
                    <p>We believe that surfing is more than a sport—it's a way of life. It teaches patience, resilience, and a deep connection to nature. Our mission is to provide a safe, fun, and supportive environment for everyone, from absolute beginners to seasoned pros, to experience this magic for themselves.</p>
                </div>
            </div>
        </Section>
        <CoachesSection coaches={coaches} />
        <VibeGallery images={vibeImages.slice(0, 4)} />
    </div>
);


// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
    const [page, setPage] = useState('Home');
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const mainContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSetPage = (newPage: string) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    }
    
    const handleSelectPost = (post: BlogPost) => {
        setSelectedPost(post);
        handleSetPage('BlogPost');
    };

    const renderPage = () => {
        switch (page) {
            case 'Home':
                return <HomePage setPage={handleSetPage} />;
            case 'Packages':
                return <PackagesPage packages={packages} isLoading={isLoading} setPage={handleSetPage} />;
            case 'Surf':
                return <SurfPage />;
            case 'YogaCamp':
                return <YogaPage />;
            case 'Activities':
                return <Activities />;
            case 'Shop':
                return <ShopPage products={shopProducts} />;
            case 'Accommodation':
                return <Accommodation services={accommodationServices} />;
            case 'Blog':
                return <BlogListPage posts={blogPosts} onSelectPost={handleSelectPost} isLoading={isLoading} />;
            case 'BlogPost':
                if (selectedPost) {
                    return <BlogPostPage post={selectedPost} onBack={() => handleSetPage('Blog')} />;
                }
                return <BlogListPage posts={blogPosts} onSelectPost={handleSelectPost} isLoading={isLoading} />;
            case 'About':
                return <AboutPage />;
            case 'Contact':
                mainContentRef.current?.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                return <HomePage setPage={handleSetPage} />;
            default:
                return <HomePage setPage={handleSetPage} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-sand dark:bg-dark-slate transition-colors duration-300 font-sans text-dark-slate dark:text-sand" ref={mainContentRef}>
            <Header setPage={handleSetPage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
