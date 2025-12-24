import React, { useState, useEffect } from 'react';

// --- HERO SECTION ---
const heroSlides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1546823478-143856454176?q=80&w=1920&auto=format&fit=crop',
    title: 'Adventure Awaits',
    subtitle: 'Explore the breathtaking landscapes of Southern Morocco.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop',
    title: 'Beyond the Surf',
    subtitle: 'Sandboarding, hiking, and cultural experiences.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1920&auto=format&fit=crop',
    title: 'Unforgettable Memories',
    subtitle: 'Create your own unique adventure in Sidi Ifni.',
  },
];

const ActivitiesHeroSection: React.FC = () => {
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

interface ActivityExperience {
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  buttonText: string;
  price?: string;
  details: string[];
}

const activitiesData: ActivityExperience[] = [
    {
        title: 'SANDBOARDING',
        subtitle: '(Sahara Dunes)',
        description: 'Ride the golden dunes of the Sahara. An exhilarating experience that combines the thrill of surfing with the stunning beauty of the desert landscape. Perfect for adrenaline junkies and nature lovers alike.',
        images: [
            'https://images.unsplash.com/photo-1546823478-143856454176?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1605538293549-7442e4b90d8d?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518182170546-0766bc530ebc?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504280509247-03322054e849?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€40/Person',
        details: ['Equipment', 'Transport', 'Tea & Snacks', 'Local Guide']
    },
    {
        title: 'HIKING',
        subtitle: '(Coastal Trails)',
        description: 'Explore the rugged coastline and hidden trails around Sidi Ifni. Discover breathtaking views, secret coves, and the unique flora of the region on a guided trek. A perfect way to connect with nature at your own pace.',
        images: [
            'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1445363689197-38da4258ab02?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1465310477141-6fb2516331c3?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€20/Person',
        details: ['Guided Tour', 'Ocean Views', 'Beginner Friendly', 'Water Included']
    },
    {
        title: 'HORSE & CAMEL RIDING',
        subtitle: '(Sunset Ride)',
        description: 'Experience the magic of the Moroccan coast from a different perspective. Enjoy a peaceful ride along the beach or through traditional villages at sunset. Connect with these majestic animals and create unforgettable memories.',
        images: [
            'https://images.unsplash.com/photo-1598642398249-446700700b00?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1541336528065-8f1fdc435835?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1526485627359-846a8b518324?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€30/Hour',
        details: ['Beach Route', 'Sunset Option', 'Professional Guide', 'Helmet Included']
    },
    {
        title: 'JET SKI / QUAD',
        subtitle: '(Adrenaline)',
        description: 'Satisfy your need for speed. Tear up the waves on a jet ski or navigate challenging off-road tracks on a powerful quad bike. An unforgettable adventure for those seeking a high-octane break from the surf.',
        images: [
            'https://images.unsplash.com/photo-1590524948946-231a4a4848a6?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1568493021943-4a8eb675f025?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1599690925058-90e1a0b15197?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?q=80&w=1200&auto=format&fit=crop'
        ],
        buttonText: 'BOOK NOW',
        price: '€50/Session',
        details: ['Safety Gear', 'Briefing', 'Fuel Included', 'Fun Guaranteed']
    },
];

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2 text-[#f18219] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const ActivityCard: React.FC<{ activity: ActivityExperience, imagePosition: 'left' | 'right' }> = ({ activity, imagePosition }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % activity.images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [activity.images.length]);

    const imageContainer = (
        <div className="md:w-1/2 w-full h-full">
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] group h-full">
                {activity.images.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img 
                            src={img} 
                            alt={`${activity.title} ${index + 1}`}
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
                {activity.title}
                {activity.subtitle && <span className="text-[#f18219] ml-2">{activity.subtitle}</span>}
            </h3>
            <p className="text-[#f4f5fa] my-4 leading-relaxed font-consolas text-lg font-bold">
                {activity.description}
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 my-4">
                {activity.details.map(detail => (
                    <div key={detail} className="flex items-center text-[#f4f5fa] font-consolas">
                        <CheckIcon />
                        <span>{detail}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-6">
                {activity.price && <p className="text-2xl font-bold text-[#f18219] font-consolas">{activity.price}</p>}
                <a href="#contact" className="bg-gradient-to-r from-[#0c8ad7] to-[#085889] text-[#f4f5fa] py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-magilio uppercase tracking-wider inline-block font-normal">
                    {activity.buttonText}
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

const Activities: React.FC = () => {
    return (
        <div className="bg-[#f4f5fa] animate-page-fade-in min-h-screen">
            <ActivitiesHeroSection />
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-6xl font-magilio text-title-blue mb-4 font-normal">
                            Adventure Activities & Events
                        </h2>
                        <img src="https://i.postimg.cc/NGKcdBNt/1.png" alt="Decorative line" className="mx-auto my-4 h-auto w-80 md:w-[500px]" />
                        <p className="text-xl font-consolas text-black max-w-3xl mx-auto font-bold">
                            Beyond the waves, the adventure continues. Discover the rich culture and stunning landscapes surrounding Sidi Ifni. From thrilling desert excursions to peaceful coastal rides, our activities offer a deeper connection to the magic of Morocco.
                        </p>
                    </div>
                    
                    <div className="max-w-6xl mx-auto flex flex-col gap-8">
                        {activitiesData.map((activity, index) => (
                            <ActivityCard 
                                key={index} 
                                activity={activity} 
                                imagePosition={index % 2 === 0 ? 'left' : 'right'} 
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Activities;