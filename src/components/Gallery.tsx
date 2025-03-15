
import React from 'react';
import { Heart } from 'lucide-react';

const Gallery: React.FC = () => {
  // Sample images - in a real application, these would be actual relevant photos
  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&auto=format", alt: "Birthday celebration" },
    { id: 2, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format", alt: "Party decorations" },
    { id: 3, src: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=600&auto=format", alt: "Birthday cake" },
    { id: 4, src: "https://images.unsplash.com/photo-1523982440-83c9d6a10a13?w=600&auto=format", alt: "Celebration" },
    { id: 5, src: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?w=600&auto=format", alt: "Friends gathering" },
    { id: 6, src: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?w=600&auto=format", alt: "Party" },
  ];

  return (
    <div className="py-16 px-4" id="gallery">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <Heart className="h-8 w-8 text-celebration-gold" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-celebration-blush rounded-full"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-celebration-mint rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A preview of the wonderful moments we'll create together
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg aspect-square relative group hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="text-white p-4 w-full">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
