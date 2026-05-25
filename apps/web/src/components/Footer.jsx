import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Dumbbell } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { Icon: Instagram, href: 'https://www.instagram.com/akhada.the_gym?igsh=NDRhbWFtZzRlbGxk' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/vishnu-singh-2979053bb?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { Icon: Youtube, href: 'https://youtube.com/@akhada.thegym?si=qQ-aiwD0zUQRdXu3' },
    { Icon: FaWhatsapp, href: 'https://wa.me/917004045547' },
  ];

  return (
    <footer className="bg-background border-t border-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-8 h-8 text-secondary" />
              <span className="font-black text-2xl tracking-tight text-secondary text-glow-cyan uppercase">Akhada The Gym</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Forging champions through discipline, dedication, and premium facilities. Join the Akhada community..
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.Icon;
                return (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-card border border-secondary/50 text-primary hover:bg-primary hover:text-white hover:border-primary rounded-lg transition-all duration-300 hover:glow-blue">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-secondary mb-6 uppercase tracking-wider text-glow-cyan">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:info@akhadathegym.com" className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors duration-300 group">
                <Mail className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                <span className="text-sm group-hover:text-glow-cyan">coredraw33@gmail.com</span>
              </a>
              <a href="tel:+917004045547" className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors duration-300 group">
                <Phone className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                <span className="text-sm group-hover:text-glow-cyan">+91 70040 45547</span>
              </a>
              <a href="https://maps.google.com/?q=Akhada+The+Gym" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/80 hover:text-secondary transition-colors duration-300 group">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:text-secondary transition-colors" />
                <span className="text-sm group-hover:text-glow-cyan">BN 21, near Karam Chowk Road, Vidya Nagar, Kumhartoli, Ranchi - 834001</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-secondary mb-6 uppercase tracking-wider text-glow-cyan">Quick Links</h3>
            <div className="space-y-3">
              {['Plans', 'About Us', 'Shop', 'Portfolio'].map((link) => (
                <a key={link} href={`/${link.toLowerCase().replace(' ', '')}`} className="block text-sm text-white/80 hover:text-secondary hover:translate-x-1 transition-all duration-300 hover:text-glow-cyan">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-secondary mb-6 uppercase tracking-wider text-glow-cyan">Legal</h3>
            <div className="space-y-3">
              <a href="/privacy" className="block text-sm text-primary hover:text-secondary hover:translate-x-1 transition-all duration-300 hover:text-glow-cyan">Privacy Policy</a>
              <a href="/terms" className="block text-sm text-primary hover:text-secondary hover:translate-x-1 transition-all duration-300 hover:text-glow-cyan">Terms of Service</a>
              <a href="/rules" className="block text-sm text-primary hover:text-secondary hover:translate-x-1 transition-all duration-300 hover:text-glow-cyan">Gym Rules</a>
            </div>
          </div>

        </div>
        <div className="border-t border-secondary/30 mt-12 pt-8 text-center">
          <p className="text-sm text-white/60">&copy; Built By Vishnu Singh : AI Generalist</p>
          <p className="text-sm text-white/60">&copy; 2026 Akhada The Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}