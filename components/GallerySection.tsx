import React from 'react';
import { GALLERY_DATA } from '../constants';
import { ZoomIn } from 'lucide-react';

const GallerySection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-24 pt-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Life at IKARUS</h2>
        <p className="text-gray-600">함께 배우고 성장하는 우리의 순간들</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GALLERY_DATA.map((item) => (
          <div key={item.id} className="group relative rounded-2xl overflow-hidden glass-card shadow-lg aspect-video cursor-pointer">
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                {item.category}
              </span>
              <h3 className="text-white text-xl font-bold flex items-center justify-between">
                {item.title}
                <ZoomIn className="text-white/80" size={20} />
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
