import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import IntegratedAiChat from '../components/integrated-ai-chat';
import BmiCalculator from '../components/BmiCalculator';
import products from '../data/products';
import { ArrowRight, Zap, Target, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

import heroBg from '../assets/back.png';
import gallery1 from '../assets/image1.jpg';
import gallery2 from '../assets/image2.jpg';
import gallery3 from '../assets/image3.jpg';
import gallery4 from '../assets/image4.jpg';

const featuredProducts = products.slice(0, 3);

const features = [
  {
    icon: Zap,
    title: 'Neural Training',
    description: 'Expert-designed programs that adapt to your goals and progress. No wasted effort, just pure results.',
  },
  {
    icon: Target,
    title: 'Precision Tracking',
    description: 'Measure strength gains, body composition changes, and performance improvements with absolute precision.',
  },
  {
    icon: Users,
    title: 'Cyber Community',
    description: 'Train alongside motivated athletes who push each other to reach new levels of greatness.',
  },
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Akhada The Gym - Cybernetic Enhancement</title>
        <meta
          name="description"
          content="Premium gym facility with expert coaching, state-of-the-art equipment, and personalized training programs. Join Akhada The Gym today."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden border-b border-secondary/30">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/80 to-background" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter text-secondary text-glow-cyan">
                Akhada The Gym
              </h1>
              <p className="text-xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto font-medium tracking-wide uppercase">
                Upgrade your chassis. Forge your legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/plans">
                  <Button size="lg" className="text-lg px-10 py-6 bg-primary text-white border border-secondary hover:bg-secondary hover:text-background font-black uppercase tracking-widest transition-all duration-300 glow-blue hover:glow-intense hover:scale-105">
                    Initialize Sequence
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`bg-card border border-secondary/40 p-8 rounded-2xl animate-slide-up hover:border-secondary hover:glow-cyan transition-all duration-500 delay-${(index + 1) * 100}`}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/50 glow-blue">
                      <feature.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4">{feature.title}</h3>
                    <p className="text-muted leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Tools Section (AI + BMI) */}
          <section className="py-24 bg-card/30 border-y border-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,202,0.05)_0%,transparent_70%)]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16 animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-secondary mb-4 text-glow-cyan">
                  Cybernetic Tools
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Leverage our digital tools to optimize your fitness journey.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* BMI Calculator */}
                <div className="animate-slide-up delay-100">
                  <BmiCalculator />
                </div>

                {/* AI Chat */}
                <div className="bg-card border border-secondary rounded-2xl transition-all duration-300 hover:glow-cyan flex flex-col h-[500px] animate-slide-up delay-200 overflow-hidden">
                  <div className="p-4 border-b border-secondary/30 bg-background/50 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse glow-blue" />
                    <h3 className="font-bold text-secondary uppercase tracking-wider m-0 text-glow-cyan">Akhada AI Construct</h3>
                  </div>
                  <div className="flex-1 overflow-hidden bg-background/30">
                    <IntegratedAiChat />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-slide-up">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-secondary mb-4 text-glow-cyan">
                    Hardware Depot
                  </h2>
                  <p className="text-lg text-white/70 max-w-2xl">
                    Premium gear and supplements for serious athletes.
                  </p>
                </div>
                <Link to="/shop" className="mt-6 md:mt-0">
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-background font-bold uppercase tracking-wider hover:glow-cyan">
                    Access Inventory
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredProducts.map((product, index) => (
                  <div key={product.id} className={`animate-slide-up delay-${(index + 1) * 100}`}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mini Gallery */}
          <section className="py-24 bg-card/30 border-t border-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-secondary mb-4 text-glow-cyan">
                  The Grid
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square overflow-hidden rounded-xl border-2 border-secondary/40 hover:border-secondary transition-all duration-500 animate-fade-in delay-${index * 100} hover:glow-cyan`}
                  >
                    <img
                      src={image}
                      alt={`Akhada facility ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 mix-blend-luminosity hover:mix-blend-normal opacity-80 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12 animate-slide-up delay-400">
                <Link to="/portfolio">
                  <Button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-wider px-8 hover:glow-blue">
                    Access Full Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}