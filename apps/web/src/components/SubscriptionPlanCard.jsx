import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Check } from 'lucide-react';

export default function SubscriptionPlanCard({ plan, isRecommended = false }) {
  const navigate = useNavigate();

  return (
    <Card
      className={`h-full flex flex-col bg-card transition-all duration-300 animate-scale-hover ${
        isRecommended
          ? 'border-2 border-primary glow-intense scale-105 z-10'
          : 'border border-secondary/50 hover:border-secondary hover:glow-cyan'
      }`}
    >
      {isRecommended && (
        <div className="bg-primary text-white text-center py-2 text-sm font-black uppercase tracking-widest rounded-t-xl text-glow-blue">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center border-b border-secondary/30 pb-6">
        <CardTitle className={`text-2xl mb-2 font-black uppercase tracking-wider ${isRecommended ? 'text-primary text-glow-blue' : 'text-white'}`}>
          {plan.name}
        </CardTitle>
        <div className="mb-4">
          <span className={`text-5xl font-black ${isRecommended ? 'text-secondary text-glow-cyan' : 'text-secondary'}`}>
            ₹{plan.price}
          </span>
          <span className="text-white/60 font-medium">/month</span>
        </div>
        <CardDescription className="text-white/80">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-6">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`p-1 rounded-full ${isRecommended ? 'bg-primary/20 border border-primary' : 'bg-secondary/20 border border-secondary'} flex-shrink-0 mt-0.5`}>
                <Check className={`w-4 h-4 ${isRecommended ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <span className="text-sm leading-relaxed text-white/90">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto pt-6">
        <Button
          onClick={() => navigate('/contact')}
          className={`w-full font-bold uppercase tracking-wider transition-all duration-300 ${
            isRecommended 
              ? 'bg-primary text-white border border-secondary hover:bg-secondary hover:text-background hover:glow-intense' 
              : 'bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-background hover:glow-cyan'
          }`}
        >
          Join Now
        </Button>
      </CardFooter>
    </Card>
  );
}