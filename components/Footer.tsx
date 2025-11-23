import React from 'react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.81C10.44 7.31 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
);

const TripAdvisorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,7A2.5,2.5 0 0,0 9.5,9.5A2.5,2.5 0 0,0 12,12A2.5,2.5 0 0,0 14.5,9.5A2.5,2.5 0 0,0 12,7M7,12A2.5,2.5 0 0,0 4.5,14.5A2.5,2.5 0 0,0 7,17A2.5,2.5 0 0,0 9.5,14.5A2.5,2.5 0 0,0 7,12M17,12A2.5,2.5 0 0,0 14.5,14.5A2.5,2.5 0 0,0 17,17A2.5,2.5 0 0,0 19.5,14.5A2.5,2.5 0 0,0 17,12Z" />
    </svg>
);

const instagramFeedImages = [
  { src: 'https://picsum.photos/seed/insta1/400/400', alt: 'Surfer on a wave' },
  { src: 'https://picsum.photos/seed/insta2/400/400', alt: 'Sunset over the ocean' },
  { src: 'https://picsum.photos/seed/insta3/400/400', alt: 'Group of surfers on the beach' },
  { src: 'https://picsum.photos/seed/insta4/400/400', alt: 'Yoga session on a rooftop' },
  { src: 'https://picsum.photos/seed/insta5/400/400', alt: 'Close-up of a surfboard' },
  { src: 'https://picsum.photos/seed/insta6/400/400', alt: 'View from the surf camp' },
];


const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-slate text-white dark:bg-black">
      <div className="container mx-auto px-6 py-12">

        {/* Instagram Feed Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold font-heading mb-2">Follow Our Journey</h3>
          <a href="https://www.instagram.com/ifni_sunset/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-booking-yellow hover:text-white transition-colors duration-300">
            @ifni_sunset
          </a>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mt-6 max-w-4xl mx-auto">
            {instagramFeedImages.map((image, index) => (
              <a key={index} href="https://www.instagram.com/ifni_sunset/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group aspect-w-1 aspect-h-1">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Original Footer Content */}
        <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
            <p className="text-sm text-gray-300 md:order-1">
                &copy; {new Date().getFullYear()} SunSet Ifni. All rights reserved.
            </p>

            <div className="flex justify-center space-x-6 md:order-2">
                <a href="https://www.instagram.com/ifni_sunset/" target="_blank" rel="noopener noreferrer" className="text-title-blue hover:text-booking-yellow dark:text-ocean-blue dark:hover:text-booking-yellow transition-colors duration-300">
                    <InstagramIcon className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581823543362" target="_blank" rel="noopener noreferrer" className="text-title-blue hover:text-booking-yellow dark:text-ocean-blue dark:hover:text-booking-yellow transition-colors duration-300">
                    <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="#tripadvisor" className="text-title-blue hover:text-booking-yellow dark:text-ocean-blue dark:hover:text-booking-yellow transition-colors duration-300">
                    <TripAdvisorIcon className="w-6 h-6" />
                </a>
            </div>

            <div className="flex space-x-6 md:order-3">
                <a href="#privacy" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                Privacy Policy
                </a>
                <a href="#terms" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                Terms of Use
                </a>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;