import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const Logo: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => (
  <button onClick={() => setPage('Home')} className="bg-transparent border-none cursor-pointer">
    <img src="https://i.postimg.cc/Sx9Cw9DP/Your-paragraph-text-1.png" alt="Ifni Surf Logo" className="w-[150px] md:w-[200px] h-auto" />
  </button>
);

interface HeaderProps {
  setPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'Packages', page: 'Packages' },
    { name: 'Shop', page: 'Shop' },
    {
      name: 'Category',
      page: 'Category',
      subLinks: [
        { name: 'Accommodation', page: 'Accommodation' },
        { name: 'Surf', page: 'Surf' },
        { name: 'Yoga Camp', page: 'YogaCamp' },
        { name: 'Activities', page: 'Activities' },
      ]
    },
    { name: 'About', page: 'About' },
    { name: 'Contact', page: 'Contact' },
    { name: 'Blog', page: 'Blog' },
  ];

  const handleNavClick = (pageName: string) => {
    setPage(pageName);
    setIsOpen(false);
    setIsCategoryOpen(false);
    setIsMobileCategoryOpen(false);
  }

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };

    if (isCategoryOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoryOpen]);

  return (
    <header className="bg-white/80 backdrop-blur-md dark:bg-dark-slate/80 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          <Logo setPage={setPage} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div
                  key={link.name}
                  className="relative"
                  ref={categoryRef}
                >
                  <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="flex items-center text-deep-sea-blue dark:text-sand font-medium hover:text-ocean-blue dark:hover:text-booking-yellow transition-colors duration-300 bg-transparent border-none cursor-pointer p-0">
                    {link.name}
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isCategoryOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {isCategoryOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-50 ring-1 ring-black ring-opacity-5">
                      {link.subLinks.map(subLink => (
                        <button
                          key={subLink.name}
                          onClick={() => handleNavClick(subLink.page)}
                          className="block w-full text-left px-4 py-2 text-sm text-dark-slate dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 bg-transparent border-none"
                        >
                          {subLink.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button key={link.name} onClick={() => handleNavClick(link.page)} className="text-deep-sea-blue dark:text-sand font-medium hover:text-ocean-blue dark:hover:text-booking-yellow transition-colors duration-300 bg-transparent border-none cursor-pointer p-0">
                  {link.name}
                </button>
              )
            ))}
            <ThemeToggle />
            <a href="#contact" className="bg-ifni-gold text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Book Now
            </a>
          </nav>

          {/* Mobile Burger Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark-slate dark:text-sand focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() => link.subLinks ? setIsMobileCategoryOpen(!isMobileCategoryOpen) : handleNavClick(link.page)}
                    className="flex items-center justify-center text-deep-sea-blue dark:text-sand font-medium hover:text-ocean-blue dark:hover:text-booking-yellow transition-colors duration-300 py-2 text-center bg-transparent border-none cursor-pointer w-full"
                  >
                    {link.name}
                    {link.subLinks && (
                        <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${isMobileCategoryOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    )}
                  </button>
                  {link.subLinks && (
                     <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobileCategoryOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-ocean-blue/30 dark:border-booking-yellow/30 bg-gray-50 dark:bg-gray-800/20 rounded-lg py-2">
                        {link.subLinks.map(subLink => (
                          <button
                            key={subLink.name}
                            onClick={() => handleNavClick(subLink.page)}
                            className="text-gray-600 dark:text-gray-300 font-normal hover:text-ocean-blue dark:hover:text-booking-yellow transition-colors duration-300 py-1 text-left pl-2 bg-transparent border-none cursor-pointer w-full"
                          >
                            {subLink.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
               <div className="flex justify-center py-2">
                <ThemeToggle />
              </div>
              <a href="#contact" className="bg-ifni-gold text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-center" onClick={() => setIsOpen(false)}>
                Book Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;