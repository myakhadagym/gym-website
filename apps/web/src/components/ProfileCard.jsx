import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Award } from 'lucide-react';

export default function ProfileCard({ profile }) {
  return (
    <Card className="h-full bg-card border border-secondary/50 transition-all duration-300 animate-scale-hover hover:border-secondary hover:glow-cyan overflow-hidden">
      <CardHeader className="text-center relative pb-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-secondary glow-cyan relative z-10">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
          />
        </div>
        <CardTitle className="text-2xl font-black text-secondary text-glow-cyan uppercase tracking-wider relative z-10">
          {profile.name}
        </CardTitle>
        <CardDescription className="text-base font-bold text-primary uppercase tracking-widest mt-1 relative z-10">
          {profile.role}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-sm leading-relaxed mb-6 text-white/80 text-center">
          {profile.bio}
        </p>
        {profile.certifications && (
          <div className="space-y-3 bg-background/80 p-4 rounded-xl border border-primary/30">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2 justify-center mb-3">
              <Award className="w-4 h-4 text-primary" />
              Certifications
            </h4>
            <ul className="space-y-2">
              {profile.certifications.map((cert, index) => (
                <li key={index} className="text-sm text-white/90 flex items-start gap-2">
                  <span className="text-secondary mt-0.5 font-bold text-glow-cyan">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}