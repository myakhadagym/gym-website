import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubscriptionPlanCard from '../components/SubscriptionPlanCard';

const plans = [
  {
    name: 'Initiate',
    price: 1000,
    description: 'Perfect for beginners starting their iron journey',
    features: [
      'One-Month access..',
      '+ ₹300-Cardio/month area access',
      'Advanced strength equipment',
      'Locker access',
      'Monthly fitness assessment',
    ],
  },
  {
    name: 'Warrior',
    price: 800,
    description: 'For dedicated athletes ready to train harder',
    features: [
      '3-Month access..',
      '+ ₹300-Cardio/month area access',
      'All equipments access',
      'Personal deck',
      'Nutrition consultation',
    ],
  },
  {
    name: 'Champion',
    price: 2000,
    description: 'Complete training package for serious results',
    features: [
      '6-Month access..',
      'Full Cardio area access',
      'Personal trainer access',
      'Weekly body composition analysis',
      'Custom meal planning',
      'Recovery zone access',
    ],
  },
  {
    name: 'Legend',
    price: 1000,
    description: 'Premium experience with dedicated support',
    features: [
      '12-Month access..',
      'Full Cardio area access',
      '₹1000/month Personal Trainer..',
      'Weekly body composition analysis',
      'Supplement consultation',
    ],
  },
];

export default function PlansPage() {
  return (
    <>
      <Helmet>
        <title>Access Tiers - Akhada The Gym</title>
        <meta name="description" content="Choose your path to greatness. Premium membership plans at Akhada The Gym." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,128,255,0.15)_0%,transparent_50%)] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-20 animate-slide-up">
                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-secondary mb-6 text-glow-cyan">
                  Access Tiers
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
                  Select your clearance level. Upgrade your physical capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan, index) => (
                  <div key={plan.name} className={`animate-slide-up delay-${index * 100}`}>
                    <SubscriptionPlanCard
                      plan={plan}
                      isRecommended={index === 2}
                    />
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