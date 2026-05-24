import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Comms Link - Akhada The Gym</title>
        <meta name="description" content="Get in touch with Akhada The Gym. We're here to answer your questions." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-20 animate-slide-up">
                <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-secondary mb-6 text-glow-cyan">
                  Comms Link
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
                  Establish a secure connection with our team for inquiries and support.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="animate-slide-up delay-100">
                  <div className="bg-card border border-secondary/50 p-8 rounded-2xl hover:glow-cyan transition-all duration-300">
                    <h2 className="text-3xl font-black uppercase tracking-wider text-white mb-8">Transmit Data</h2>
                    <ContactForm />
                  </div>
                </div>

                <div className="animate-slide-up delay-200">
                  <h2 className="text-3xl font-black uppercase tracking-wider text-white mb-8">Mainframe</h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="p-4 bg-card border border-secondary/30 rounded-xl group-hover:border-secondary group-hover:glow-cyan transition-all duration-300">
                        <Mail className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-secondary uppercase tracking-wider mb-1">Email</h3>
                        <a href="mailto:coredraw33@gmail.com" className="text-white/70 hover:text-secondary transition-colors text-lg">
                          coredraw33@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="p-4 bg-card border border-secondary/30 rounded-xl group-hover:border-secondary group-hover:glow-cyan transition-all duration-300">
                        <Phone className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-secondary uppercase tracking-wider mb-1">Phone</h3>
                        <a href="tel:+91 7004045547" className="text-white/70 hover:text-secondary transition-colors text-lg">
                          +91 70040 45547
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="p-4 bg-card border border-secondary/30 rounded-xl group-hover:border-secondary group-hover:glow-cyan transition-all duration-300">
                        <MapPin className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-secondary uppercase tracking-wider mb-1">Location</h3>
                        <a href="https://maps.google.com/?q=Akhada+The+Gym" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors text-lg">
                          BN 21, near Karam Chowk Road, Vidya Nagar, Kumhartoli, Ranchi - 834001
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="p-4 bg-card border border-secondary/30 rounded-xl group-hover:border-secondary group-hover:glow-cyan transition-all duration-300">
                        <Clock className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-secondary uppercase tracking-wider mb-1">Uptime</h3>
                        <div className="text-white/70 text-lg space-y-1">
                          <p>Mon - Sat: <span className="text-primary font-bold">6:00 AM - 10:00 PM</span></p>
                          <p>Afternoon Off: <span className="text-primary font-bold">12:00 PM - 4:00 PM</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}