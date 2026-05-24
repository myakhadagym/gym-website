import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

export default function ProductCard({ product }) {
  return (
    <Card className="h-full flex flex-col bg-card border-secondary/50 transition-all duration-300 animate-scale-hover hover:glow-cyan overflow-hidden">
      
      <CardHeader className="p-0 border-b border-secondary/30">
        <div className="aspect-square overflow-hidden bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
          
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 opacity-80 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-6 relative z-20 -mt-6">
        <CardTitle className="text-xl mb-2 text-white font-bold uppercase tracking-wider">
          {product.name}
        </CardTitle>

        <CardDescription className="text-sm leading-relaxed mb-4 text-white/70">
          {product.description}
        </CardDescription>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-black text-secondary text-glow-cyan">
            ₹{product.price.toFixed(2)}
          </span>

          {product.stock && (
            <span className="text-xs font-bold uppercase tracking-wider text-background bg-secondary px-2 py-1 rounded glow-cyan">
              {product.stock} left
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto">
        <a
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            className="w-full bg-primary text-white border border-secondary hover:bg-secondary hover:text-background font-bold uppercase tracking-wider transition-all duration-300 hover:glow-blue"
          >
            Buy Now
          </Button>
        </a>
      </CardFooter>

    </Card>
  );
}