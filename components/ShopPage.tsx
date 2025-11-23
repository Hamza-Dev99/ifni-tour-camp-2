import React, { useState, useEffect } from 'react';
import type { ShopProduct } from '../types';

interface ShopPageProps {
  products: ShopProduct[];
}

// --- ICONS for Product Card ---
const HeartIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.66l1.318-1.342a4.5 4.5 0 116.364 6.364l-7.682 7.682a.5.5 0 01-.707 0L4.318 12.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

const CompareIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 11a8 8 0 101.4-4.6M20 13a8 8 0 10-1.4 4.6" />
  </svg>
);

const QuickViewIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

// --- NEW QUICK VIEW MODAL COMPONENT ---
const QuickViewModal: React.FC<{ product: ShopProduct; onClose: () => void }> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-up-base"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative overflow-hidden"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 w-full h-64 md:h-auto bg-gray-100 dark:bg-gray-700">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-title-blue dark:text-sand mb-2">{product.name}</h2>
          <p className="font-bold text-2xl text-teal-green mb-4">{product.price}</p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">{product.description}</p>
          
          <div className="mt-auto">
            <button className="bg-teal-green text-white font-bold py-3 px-8 rounded-full hover:bg-teal-green/90 transition-colors w-full text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProductCard: React.FC<{ product: ShopProduct; onQuickView: (product: ShopProduct) => void; }> = ({ product, onQuickView }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-2 flex flex-col">
    <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      
      {/* Hover Overlay - scoped to the image */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center p-4">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-center">
              {/* Action Icons */}
              <div className="flex justify-center space-x-3 mb-4">
                  <button className="bg-white text-dark-slate p-3 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-110" aria-label="Add to wishlist">
                      <HeartIcon />
                  </button>
                  <button className="bg-white text-dark-slate p-3 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-110" aria-label="Compare product">
                      <CompareIcon />
                  </button>
                  <button 
                    onClick={() => onQuickView(product)}
                    className="bg-white text-dark-slate p-3 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-110" 
                    aria-label="Quick view"
                  >
                      <QuickViewIcon />
                  </button>
              </div>
              {/* Add to Cart Button */}
              <button className="bg-teal-green text-white font-bold py-3 px-8 rounded-full hover:bg-teal-green/90 transition-colors w-full">
                  Add to Cart
              </button>
          </div>
      </div>
    </div>

    <div className="p-4 text-center flex-grow flex flex-col justify-center">
      <h3 className="text-lg font-heading text-dark-slate dark:text-sand truncate group-hover:text-ocean-blue dark:group-hover:text-booking-yellow transition-colors duration-300">{product.name}</h3>
      <p className="font-bold text-teal-green mt-1">{product.price}</p>
    </div>
  </div>
);

const ShopPage: React.FC<ShopPageProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);

  const handleQuickView = (product: ShopProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="bg-sand dark:bg-gray-900 py-16 md:py-24 animate-page-fade-in">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-magilio text-title-blue dark:text-ocean-blue mb-4">
              The Dingle Surf Collection
            </h2>
            <img 
              src="https://i.postimg.cc/NGKcdBNt/1.png" 
              alt="Decorative line" 
              className="mx-auto my-6 h-auto w-80 md:w-[500px]" 
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Curated apparel for the modern wave rider. Quality threads with an authentic surf vibe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ShopPage;