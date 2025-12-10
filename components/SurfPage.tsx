

import React, { useState, useEffect } from 'react';

// --- HERO SECTION ---
const heroSlides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1502680390408-f8b8fe1e2c1e?q=80&w=1920&auto=format&fit=crop',
    title: 'Catch The Perfect Wave',
    subtitle: 'From first-timers to pro riders, find your flow in Sidi Ifni.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1531722569936-825d3dd91b15?q=80&w=1920&auto=format&fit=crop',
    title: 'Expert Coaching',
    subtitle: 'Learn from local legends and certified instructors.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1520443240718-fce21901db79?q=80&w=1920&auto=format&fit=crop',
    title: 'Uncrowded Lineups',
    subtitle: 'Explore the hidden gems of the Moroccan coastline.',
  },
];

const SurfHeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
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
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                <div key={currentSlide} className="w-full">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-magilio text-white mb-4 animate-fade-in-down">
                        {heroSlides[currentSlide].title}
                    </h1>
                    <p className="text-lg md:text-xl font-consolas text-[#f4f5fa] max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        {heroSlides[currentSlide].subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
};

// --- DATA & COMPONENTS ---

interface SurfExperience {
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  buttonText: string;
  price?: string;
  details: string[];
}

const surfData: SurfExperience[] = [
    {
        title: '',
        subtitle: 'Learn to Surf with the Best Surf Coaching for Beginners',
        description: 'Starting your surfing journey can feel overwhelming. From finding balance to understanding the waves, it’s easy to feel lost. But with IFNI TOUR, you don’t have to worry! Our experienced coaches provide step-by-step guidance to help you learn quickly and safely. Whether it’s your first time or you want to improve, our IFNI TOUR surf camp is the perfect place to start your surfing journey.',
        images: [
            '',
            '',
            '',
            '',
            ''
        ],
        buttonText: 'BOOK NOW',
        price: '',
        details: ['']
    },
    {
        title: '',
        subtitle: 'Surfboards and Wetsuits: Everything You Need to Catch Waves',
        description: 'Struggling with the wrong gear? Poor-quality boards and uncomfortable wetsuits can ruin your experience. At Adventurekeys, we provide high-quality surfboards and wetsuits for all levels. Whether you’re a beginner or an advanced surfer, we have the perfect gear to make your sessions amazing.',
        images: [
            '',
            '',
            '',
            '',
            ''
        ],
        buttonText: 'BOOK NOW',
        price: '',
        details: ['']
    },
    {
        title: '',
        subtitle: 'Explore Morocco’s Waves with Road Trips to Hidden Surf Spots',
        description: 'Tired of surfing at the same crowded beaches? Many surfers miss out on the best waves because they don’t know where to go. At IFNI TOUR, we take you on exciting road trips to sidi ifni hidden surf gems. Ride the best waves in sidi ifni surf and beyond with our expert guides.',
        images: [
            '',
            '',
            '',
            '',
        ],
        buttonText: 'BOOK NOW',
        price: '',
        details: ['']
    },
    {
        title: '',
        subtitle: 'Surf Bike Experience: Explore and Surf at Your Own Pace',
        description: 'Prefer to explore at your own pace? We provide local tips, tide charts, and spot maps so you can plan your own sessions. Enjoy the freedom of independent surfing while having a comfortable, social base to return to.',
        images: [
            '',
            '',
            '',
            '',
        ],
        buttonText: 'BOOK NOW',
        price: 'Free Advice',
        details: ['Spot Maps', 'Tide Charts', 'Local Tips', 'Flexibility']
    },
    {
        title: 'Surf Bike Experience',
        subtitle: '(Eco-Adventure)',
        description: 'Combine two passions with our unique surf bike adventures. Pedal to secret spots inaccessible by car, exploring rugged trails and pristine beaches on specialized bikes equipped with surfboard racks.',
        images: [
            '',
            '',
            '',
            '',
        ],
        buttonText: 'BOOK NOW',
        price: '',
        details: ['']
    }
];

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2 text-[#f18219] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const SurfCard: React.FC<{ experience: SurfExperience; imagePosition: 'left' | 'right' }> = ({ experience, imagePosition }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % experience.images.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [experience.images.length]);

    const imageContainer = (
        <div className="md:w-1/2 w-full h-full">
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] group h-full">
                 {experience.images.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img 
                            src={img} 
                            alt={`${experience.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    const textContainer = (
        <div className="md:w-1/2 w-full flex flex-col justify-center px-4 md:px-12 py-8 md:py-0">
            <h3 className="text-2xl md:text-4xl font-magilio text-[#f4f5fa]">
                {experience.title}
                {experience.subtitle && <span className="text-[#f18219] ml-2">{experience.subtitle}</span>}
            </h3>
            <p className="text-[#f4f5fa] my-4 leading-relaxed font-consolas text-lg font-bold">
                {experience.description}
            </p>
             <div className="grid grid-cols-2 gap-x-4 gap-y-2 my-4">
                {experience.details.map(detail => (
                    <div key={detail} className="flex items-center text-[#f4f5fa] font-consolas">
                        <CheckIcon />
                        <span>{detail}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-6">
                {experience.price && <p className="text-2xl font-bold text-[#f18219] font-consolas">{experience.price}</p>}
                <a 
                    href="#contact" 
                    className="bg-[#f18219] text-[#f4f5fa] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105 font-magilio uppercase tracking-wider inline-block"
                >
                    {experience.buttonText}
                </a>
            </div>
        </div>
    );

    return (
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 bg-[#0b3d62] p-6 rounded-2xl shadow-sm`}>
            {imageContainer}
            {textContainer}
        </div>
    );
};

const SurfPage: React.FC = () => {
    return (
        <div className="bg-[#f4f5fa] dark:bg-gray-900 animate-page-fade-in min-h-screen">
            <SurfHeroSection />
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-6xl font-magilio text-title-blue dark:text-ocean-blue mb-4">
                            Surf Experiences
                        </h2>
                        <img src="https://i.postimg.cc/NGKcdBNt/1.png" alt="Decorative line" className="mx-auto my-4 h-auto w-80 md:w-[500px]" />
                        <p className="text-xl font-consolas text-black dark:text-gray-300 max-w-3xl mx-auto font-bold">
                            Catch the best waves of your life in Sidi Ifni. From beginner lessons to guided road trips and gear rental, we offer everything you need for the ultimate Moroccan surf trip.
                        </p>
                    </div>
                    
                    <div className="max-w-6xl mx-auto flex flex-col gap-8">
                        {surfData.map((experience, index) => (
                            <SurfCard 
                                key={index} 
                                experience={experience} 
                                imagePosition={index % 2 === 0 ? 'left' : 'right'} 
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SurfPage;
