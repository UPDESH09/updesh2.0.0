
import React from 'react';

const images = [
  'https://picsum.photos/800/600?image=1015',
  'https://picsum.photos/800/600?image=1018',
  'https://picsum.photos/800/600?image=1025',
  'https://picsum.photos/800/600?image=1040',
  'https://picsum.photos/800/600?image=1041',
  'https://picsum.photos/800/600?image=1050',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 font-serif">🌿 Moments of Devotion</h2>
          <p className="text-lg text-stone-600 mt-4 max-w-2xl mx-auto">
            A glimpse into our community, events, and shared spiritual journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
