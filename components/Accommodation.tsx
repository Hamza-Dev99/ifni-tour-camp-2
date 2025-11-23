import React, { useState, useEffect } from 'react';
import type { AccommodationService } from '../types';

// Hero Section Slide Data
const heroSlides = [
  {
    imageUrl: 'https://i.postimg.cc/W4pWC8Gx/berber-room-1.jpg',
    title: 'Experience Coastal Luxury',
    subtitle: 'Wake up to the sound of the Atlantic in our premium accommodations.',
  },
  {
    imageUrl: 'https://i.postimg.cc/XvHrkNNL/santa-cruz-room-1.jpg',
    title: 'Comfort Meets Culture',
    subtitle: 'Authentic Moroccan design with modern amenities for your stay.',
  },
  {
    imageUrl: 'https://i.postimg.cc/854tH6J2/occan-view-room-1.jpg',
    title: 'Your Sanctuary After Surf',
    subtitle: 'Relax, recharge, and reconnect in our peaceful rooms and suites.',
  },
];

const AccommodationHeroSection: React.FC = () => {
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

interface Room {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  price: string;
  details: string[];
}

// Data for the new layout with 5 rooms total, each with 5 images
const roomsData: Room[] = [
    {
        title: '',
        subtitle: 'Berber Room',
        description: 'The Berber Room you live in the Marocaine authenticity with traditional Berber decor. This luminous chamber offers all the necessary comfort for an agréable experience.',
        images: [
            'https://i.postimg.cc/W4pWC8Gx/berber-room-1.jpg',
            'https://i.postimg.cc/fbW2pCcv/berber-room-2.jpg',
            'https://i.postimg.cc/Jh76vxNZ/berber-room-3.jpg',
            'https://i.postimg.cc/52SKsTCS/berber-room-4.jpg',
            'https://i.postimg.cc/Z5xsw2d9/berber-room-5.jpg',
            'https://i.postimg.cc/cJ192hRD/berber-room-6.jpg'
        ],
        price: '€55/night',
        details: ['2 Guests', 'Climatisation', 'En-suite Bathroom', 'Free WiFi', 'Bed linen and towels provided', 'Breakfast included', 'View of the city']
    },
    {
        title: '',
        subtitle: 'Santa Cruz Room',
        description: 'The Santa Cruz Room is perfect for small groups or families. Spacious and bright, it combines modern comfort with traditional Moroccan touches.',
        images: [
            'https://i.postimg.cc/XvHrkNNL/santa-cruz-room-1.jpg',
            'https://i.postimg.cc/d1hLHMDS/santa-cruz-room-2.jpg',
            'https://i.postimg.cc/hjNhNCd7/santa-cruz-room-3.jpg',
            'https://i.postimg.cc/k4LDLjbM/santa-cruz-room-4.jpg'
        ],
        price: '€30/night',
        details: ['3 Guests', 'Ideal for groups and families', 'Breakfast included', 'Free WIFI', 'Air Conditioning', 'Large window with a view', 'Private bathroom', 'Generous storage space']
    },
    {
        title: '',
        subtitle: 'Ocean View Room',
        description: 'The Ocean View Room offers a magnificent view of the Atlantic Ocean. Perfect for groups or families wishing to enjoy the seascape from their room.',
        images: [
            'https://i.postimg.cc/854tH6J2/occan-view-room-1.jpg',
            'https://i.postimg.cc/Gh8xBNQj/occan-view-room-2.jpg',
            'https://i.postimg.cc/9FRY4Spk/occan-view-room-3.jpg',
            'https://i.postimg.cc/WbB60nYV/occan-view-room-4.jpg',
            'https://i.postimg.cc/sg5PmhbP/occan-view-room-5.jpg'
        ],
        price: '30€/night',
        details: ['3 Guests', 'Kitchenette', 'Living Area', 'Ocean View Option', 'Breathtaking ocean view', 'Ideal for groups and families', 'Breakfast included', 'Private bathroom', 'Free Wi-Fi', 'Ample storage space', 'Air conditioning' ]
    },
    {
        title: '',
        subtitle: 'Sun Suite',
        description: 'Experience ultimate luxury in our top-tier suite. Featuring panoramic windows, a spacious living area, and a private terrace for watching the sunset over the Atlantic.',
        images: [
            'https://i.postimg.cc/bvWtjNXf/sun-suite-1.jpg',
            'https://i.postimg.cc/6QgvN5sQ/sun-suite-2.jpg',
            'https://i.postimg.cc/KYwMyvXK/sun-suite-3.jpg',
            'https://i.postimg.cc/TPFDXY8j/sun-suite-4.jpg',
            'https://i.postimg.cc/1tFNRhPF/sun-suite-5.jpg',
            'https://i.postimg.cc/xCmbjDYP/sun-suite-6.jpg'
        ],
        price: '€30/night',
        details: ['3 Guests', 'Panoramic view', 'Breakfast included', 'Private bathroom', 'Free Wi-Fi', 'Private lounge area', 'Perfect for groups', 'Air conditioning',]
    },
    {
        title: '',
        subtitle: 'Sunset Room',
        description: 'The Sunset Room lives up to its name: it offers a privileged view of the spectacular Atlantic sunsets. Romantic and elegant.',
        images: [
            'https://i.postimg.cc/fLMhyYQj/sunset-room-1.jpg',
            'https://i.postimg.cc/j5Rr2yY3/sunset-room-2.jpg',
            'https://i.postimg.cc/63BNqCxD/sunset-room-3.jpg',
            'https://i.postimg.cc/63BNqCNK/sunset-room-4.jpg',
            'https://i.postimg.cc/wvFYm39S/sunset-room-5.jpg',
            'https://i.postimg.cc/RFGxHqM4/sunset-room-6.jpg'
        ],
        price: '€60/night',
        details: ['2 Guests', 'Romantic decor', 'Breakfast included', 'Private bathroom', 'Free Wi-Fi', 'Premium linens', 'Perfect for groups', 'Private terrace', 'Air conditioning']
    }
];


// Reusable check icon
const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2 text-[#f39c11] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);


// Card for each room type
const RoomCard: React.FC<{ room: Room; imagePosition: 'left' | 'right' }> = ({ room, imagePosition }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [room.images.length]);

    const imageContainer = (
        <div className="md:w-1/2 w-full h-full">
             <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] group h-full">
                {room.images.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img 
                            src={img} 
                            alt={`${room.title} ${index + 1}`}
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
                {room.title}
                {room.subtitle && <span className="text-[#f39c11] ml-2">{room.subtitle}</span>}
            </h3>
            <p className="text-gray-200 my-4 leading-relaxed font-consolas text-lg font-bold">{room.description}</p>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 my-4">
                {room.details.map(detail => (
                    <div key={detail} className="flex items-center text-[#f4f5fa] font-consolas">
                        <CheckIcon />
                        <span>{detail}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mt-6">
                 <p className="text-2xl font-bold text-[#f39c11] font-consolas">{room.price}</p>
                 <a href="#contact" className="bg-[#f39c11] text-[#f4f5fa] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105 font-magilio uppercase tracking-wider">
                    Book Now
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

interface AccommodationProps {
  services?: AccommodationService[];
}

const Accommodation: React.FC<AccommodationProps> = () => {
    return (
        <div className="bg-[#f4f5fa] dark:bg-gray-900 animate-page-fade-in">
            <AccommodationHeroSection />
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-4xl md:text-6xl font-magilio text-title-blue dark:text-ocean-blue mb-4">
                            O u r  &nbsp;  R o o m s  
                        </h2>
                        <img src="https://i.postimg.cc/NGKcdBNt/1.png" alt="Decorative line" className="mx-auto my-6 h-auto w-80 md:w-[500px]" />
                        <p className="text-xl font-consolas text-black dark:text-gray-300 max-w-3xl mx-auto font-bold">
                            Comfortable, clean, and designed for surfers. Choose the perfect space for your adventure, whether you're a solo traveler, a couple, or with a group of friends.
                        </p>
                    </div>
                    
                    <div className="max-w-6xl mx-auto flex flex-col gap-12">
                         {roomsData.map((room, index) => (
                            <RoomCard 
                                key={index} 
                                room={room} 
                                imagePosition={index % 2 === 0 ? 'left' : 'right'} 
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accommodation;