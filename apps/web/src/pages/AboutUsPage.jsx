import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';

import shubhamImg from '../assets/shubham.png';
import abhiImg from '../assets/abhi.png';

const profiles = [
  {
    name: 'Shubham',
    role: 'GYM OWNER & HEAD COACH',
    image: shubhamImg,
    bio: 'With over 5 years in the fitness industry, Shubham founded AKHADA, Fitness to create a training environment that combines cutting-edge equipment with personalized coaching. His philosophy centers on sustainable progress and building lifelong healthy habits.',
    certifications: [
      'Certified Strength & Conditioning Specialist',
      'State Level Weightlifting Coach',
      'Precision Nutrition Level Certified',
    ],
  },
  {
    name: 'Abhijeet',
    role: 'Lead Trainer',
    image: abhiImg,
    bio: 'Abhijeet specializes in functional training and athletic performance. He works with clients ranging from beginners to competitive athletes, focusing on movement quality, injury prevention, and measurable results.',
    certifications: [
      'Certified Personal Trainer',
      'PERFECT Movement Specialist',
      'CrossFit Level Trainer',
    ],
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>The Architects - Akhada The Gym</title>
        <meta
          name="description"
          content="Meet the team behind Akhada The Gym. Expert coaches dedicated to helping you reach your fitness goals."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-secondary mb-4 text-glow-cyan">
                  The Architect of Akhada...
                </h1>
                <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                  Our certified coaches bring years of combined experience to help you train smarter and reach your goals faster.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {profiles.map((profile) => (
                  <ProfileCard key={profile.name} profile={profile} />
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