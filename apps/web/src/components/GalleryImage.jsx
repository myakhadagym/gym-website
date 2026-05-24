import React from 'react';

export default function GalleryImage({ src, alt, timestamp }) {
  return (
    <div className="relative group overflow-hidden rounded-xl border-2 border-secondary/40 bg-background transition-all duration-500 hover:border-secondary hover:glow-cyan">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-white font-bold text-lg leading-tight mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {alt}
        </p>
        {timestamp && (
          <span className="text-secondary font-medium text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-glow-cyan">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}