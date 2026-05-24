import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function ShopPage() {
  return (
    <>
      <Helmet>
        <title>Hardware Depot - Akhada The Gym</title>
        <meta name="description" content="Premium fitness supplements, equipment, and accessories from Akhada The Gym." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="py-24 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,202,0.1)_0%,transparent_60%)] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-20 animate-slide-up">
                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-secondary mb-6 text-glow-cyan">
                  Hardware Depot
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
                  Fuel your workouts and accelerate recovery with our premium selection of gear and supplements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product, index) => (
                  <div key={product.id} className={`animate-fade-in delay-${(index % 4) * 100}`}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}