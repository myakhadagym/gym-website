import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GalleryImage from '../components/GalleryImage';
import supabase from '../lib/supabase';

import image4 from '../assets/image4.jpg';
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';
import image10 from '../assets/image10.jpg';
import image2 from '../assets/image2.jpg';
import image9 from '../assets/image9.jpg';
import image11 from '../assets/image11.jpg';
import image5 from '../assets/image5.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';
import image12 from '../assets/image12.jpg';
import view from '../assets/view.jpg';

const localGalleryItems = [
  { src: image4,  alt: 'Modern gym interior with state-of-the-art equipment',  timestamp: '2026-04-12' },
  { src: image11, alt: 'Athlete performing deadlift with proper form',          timestamp: '2026-04-08' },
  { src: image2,  alt: 'Group fitness class in action',                         timestamp: '2026-03-29' },
  { src: image1,  alt: 'Personal training session with coach guidance',         timestamp: '2026-03-22' },
  { src: image10, alt: 'Olympic weightlifting platform area',                   timestamp: '2026-03-15' },
  { src: image3,  alt: 'Recovery zone with massage and stretching area',        timestamp: '2026-03-08' },
  { src: image5,  alt: 'Cardio equipment zone with treadmills and bikes',       timestamp: '2026-02-28' },
  { src: image9,  alt: 'Inspired Trainer working out with focus and intensity', timestamp: '2026-02-28' },
  { src: image14, alt: 'Motivating Poster Of Goku Character In GYM',           timestamp: '2026-02-28' },
  { src: image15, alt: 'Cardio Zone with Treadmills and Bikes',                 timestamp: '2026-02-28' },
  { src: image12, alt: 'GYM Owner with Artistic Poster of Goku Character',     timestamp: '2026-02-28' },
  { src: view,    alt: 'Gym Outer Entrance View',                               timestamp: '2026-02-28' },
];

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'];

export default function PortfolioPage() {
  const [supabaseImages, setSupabaseImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      const { data, error } = await supabase
        .storage
        .from('portfolio3')
        .list('', { sortBy: { column: 'created_at', order: 'desc' } });

      if (error) {
        console.error('Error fetching images from Supabase:', error);
        setFetchError(true);
        setLoading(false);
        return;
      }

      const urls = data
        .filter(file => {
          if (file.name === '.emptyFolderPlaceholder') return false;
          const ext = file.name.split('.').pop().toLowerCase();
          return IMAGE_EXTENSIONS.includes(ext);
        })
        .map(file => {
          const { data: urlData } = supabase
            .storage
            .from('portfolio3')
            .getPublicUrl(file.name);
          return {
            src: urlData.publicUrl,
            alt: file.name.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, ''),
            timestamp: file.created_at?.split('T')[0] ?? '',
          };
        });

      setSupabaseImages(urls);
      setLoading(false);
    }

    fetchImages();
  }, []);

  const allImages = [...supabaseImages, ...localGalleryItems];

  return (
    <>
      <Helmet>
        <title>The Grid - Akhada The Gym</title>
        <meta name="description" content="Explore the elite facilities and training environment at Akhada The Gym." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-20 animate-slide-up">
                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-secondary mb-6 text-glow-cyan">
                  The Grid
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
                  Witness the environment where champions are forged.
                </p>
              </div>

              {/* Optional: subtle notice if Supabase fetch failed */}
              {fetchError && (
                <div className="text-center mb-8">
                  <p className="text-red-400 text-sm font-medium tracking-wide uppercase">
                    ⚠ Could not load latest uploads — showing local gallery
                  </p>
                </div>
              )}

              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <p className="text-secondary text-xl font-black uppercase tracking-widest animate-pulse">
                    Loading...
                  </p>
                </div>
              ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                  {allImages.map((item, index) => (
                    <div
                      key={index}
                      className={`break-inside-avoid animate-fade-in delay-${(index % 5) * 100}`}
                    >
                      <GalleryImage
                        src={item.src}
                        alt={item.alt}
                        timestamp={item.timestamp}
                      />
                    </div>
                  ))}
                </div>
              )}

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}