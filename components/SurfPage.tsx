import React, { useState, useEffect } from 'react';

// --- HERO SECTION ---
const heroSlides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1502680390408-f8b8fe1e2c1e?q=80&w=1920&auto=format&fit=crop',
    title: 'Ride the Atlantic Waves',
    subtitle: 'Expert surf coaching for all skill levels in the heart of Sidi Ifni.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=1920&auto=format&fit=crop',
    title: 'Discover Secret Breaks',
    subtitle: 'Explore the hidden surf spots of Southern Morocco with our local guides.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=1920&auto=format&fit=crop',
    title: 'Progression & Passion',
    subtitle: 'Improve your surfing technique with professional video analysis and coaching.',
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
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            ))}
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
                <div key={currentSlide} className="w-full">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-magilio text-white mb-4 animate-fade-in-down font-normal">
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
        title: 'Beginner Surf Camp',
        subtitle: '(First Waves)',
        description: 'Start your surfing journey with our beginner-focused program. We cover the fundamentals: ocean safety, paddling technique, the "pop-up," and catching your very first waves in a supportive environment.',
        images: [
            'https://images.unsplash.com/photo-1502680390408-f8b8fe1e2c1e?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504280509247-03322054e849?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502680390408-f8b8fe1e2c1e?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€449/Week',
        details: ['Soft-top Boards', 'Wetsuit Included', '2 Sessions Daily', 'Photo Package']
    },
    {
        title: 'Intermediate Coaching',
        subtitle: '(Level Up)',
        description: 'Refine your technique and gain confidence in larger waves. Our intermediate coaching focuses on wave selection, generating speed, and basic maneuvers like bottom turns and cutbacks.',
        images: [
            'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505784043884-214bc6f3f1e1?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€549/Week',
        details: ['Video Analysis', 'Custom Quiver', 'Tidal Theory', 'Maneuver Focus']
    },
    {
        title: 'Surfari & Guiding',
        subtitle: '(Secret Spots)',
        description: 'For experienced surfers who want to skip the crowds and find the best waves of the day. Our local guides know every reef, point, and beach break along the Sidi Ifni coastline and beyond.',
        images: [
            'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505784043884-214bc6f3f1e1?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502680390408-f8b8fe1e2c1e?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1599690925058-90e1a0b15197?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€599/Week',
        details: ['4x4 Transport', 'Local Expertise', 'Daily Road Trips', 'Untouched Waves']
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
            <h3 className="text-2xl md:text-4xl font-magilio text-[#f4f5fa] font-normal">
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
                    className="bg-gradient-to-r from-[#0c8ad7] to-[#085889] text-[#f4f5fa] py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-magilio uppercase tracking-wider inline-block font-normal"
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
        <div className="bg-[#f4f5fa] animate-page-fade-in min-h-screen">
            <SurfHeroSection />
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-6xl font-magilio text-title-blue mb-4 font-normal">
                            Surf Experience Morocco
                        </h2>
                        <img src="https://i.postimg.cc/NGKcdBNt/1.png" alt="Decorative line" className="mx-auto my-4 h-auto w-80 md:w-[500px]" />
                        <p className="text-xl font-consolas text-black max-w-3xl mx-auto font-bold">
                            Sidi Ifni is a surfer's paradise with consistent swells and a variety of breaks for every level. Our team of local and international coaches is dedicated to helping you catch the wave of your life while experiencing the authentic Moroccan surf culture.
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