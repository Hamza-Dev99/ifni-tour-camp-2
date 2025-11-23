import React, { useState, useEffect } from 'react';

// --- HERO SECTION ---
const heroSlides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop',
    title: 'Find Your Balance',
    subtitle: 'Reconnect with yourself through daily yoga and mindfulness.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1599447462464-a55a8a8a36a7?q=80&w=1920&auto=format&fit=crop',
    title: 'Ocean View Practice',
    subtitle: 'Breathe in the salty air as you flow with the rhythm of the sea.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1920&auto=format&fit=crop',
    title: 'Holistic Wellness',
    subtitle: 'Nourish your mind, body, and soul in Sidi Ifni.',
  },
];

const YogaHeroSection: React.FC = () => {
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

interface YogaExperience {
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  buttonText: string;
  price?: string;
  details: string[];
}

const yogaData: YogaExperience[] = [
    {
        title: 'Daily Yoga Sessions',
        subtitle: '(Sunrise & Sunset)',
        description: 'Start your day with a sunrise flow to awaken your body and mind, and wind down with a restorative sunset session to release tension. Our classes cater to all levels, ensuring you feel energized for surfing and relaxed for sleep.',
        images: [
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575052814086-c75ae76e6043?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€15/Class',
        details: ['75 Mins Duration', 'Mats Provided', 'All Levels', 'Ocean View']
    },
    {
        title: 'Surf & Yoga Balance',
        subtitle: '(Core & Flexibility)',
        description: 'Discover how yoga complements surfing by improving core strength, flexibility, and focus. Learn to find your center on the mat, which directly translates to better balance and stability on your board in the ocean.',
        images: [
            'https://images.unsplash.com/photo-1599447462464-a55a8a8a36a7?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1593164842264-85460449a6a0?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: 'Included in Package',
        details: ['Surf Focus', 'Injury Prevention', 'Core Strength', 'Balance Training']
    },
    {
        title: 'Community & Connection',
        subtitle: '(Social Vibes)',
        description: 'Join a community of like-minded travelers in a supportive and relaxed environment. Share stories after class, enjoy communal meals, and build lasting connections with people from around the world who share your passion for wellness.',
        images: [
            'https://images.unsplash.com/photo-1575052814086-c75ae76e6043?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: 'Free Spirit',
        details: ['Group Dinners', 'Tea Ceremonies', 'Bonfires', 'Global Friends']
    },
    {
        title: 'Ultimate Yoga Retreat',
        subtitle: '(1 Week Package)',
        description: 'Immerse yourself fully with our all-inclusive week-long retreat. Includes daily yoga sessions, comfortable accommodation, nutritious healthy meals, and optional surf lessons. It’s the perfect way to disconnect and recharge.',
        images: [
            'https://images.unsplash.com/photo-1591291621265-cc6519ce608f?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1554244933-d877debcdb49?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€499/Week',
        details: ['7 Nights Stay', 'All Meals', 'Daily Yoga', 'Airport Transfer']
    }
];

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2 text-[#f39c11] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const YogaCard: React.FC<{ experience: YogaExperience; imagePosition: 'left' | 'right' }> = ({ experience, imagePosition }) => {
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
                {experience.subtitle && <span className="text-[#f39c11] ml-2">{experience.subtitle}</span>}
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
                 {experience.price && <p className="text-2xl font-bold text-[#f39c11] font-consolas">{experience.price}</p>}
                <a 
                    href="#contact" 
                    className="bg-[#f39c11] text-[#f4f5fa] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105 font-magilio uppercase tracking-wider inline-block"
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

const YogaPage: React.FC = () => {
    return (
        <div className="bg-[#f4f5fa] dark:bg-gray-900 animate-page-fade-in min-h-screen">
            <YogaHeroSection />
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-4xl md:text-6xl font-magilio text-title-blue dark:text-ocean-blue mb-4">
                            Yoga & Wellness Experience
                        </h2>
                        <img src="https://i.postimg.cc/NGKcdBNt/1.png" alt="Decorative line" className="mx-auto my-6 h-auto w-80 md:w-[500px]" />
                        <p className="text-xl font-consolas text-black dark:text-gray-300 max-w-3xl mx-auto font-bold">
                            Our camp extends beyond the waves. Immerse yourself in a holistic lifestyle that nourishes the mind, body, and soul through the practice of yoga and community connection. Find your balance where the desert meets the ocean.
                        </p>
                    </div>
                    
                    <div className="max-w-6xl mx-auto flex flex-col gap-12">
                        {yogaData.map((experience, index) => (
                            <YogaCard 
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

export default YogaPage;