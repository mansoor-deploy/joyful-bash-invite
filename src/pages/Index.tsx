
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ShareIcon, Copy, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

import Hero from '@/components/Hero';
import EventDetails from '@/components/EventDetails';
import CountdownTimer from '@/components/CountdownTimer';
import RsvpForm from '@/components/RsvpForm';
import GiftRegistry from '@/components/GiftRegistry';
import LocationMap from '@/components/LocationMap';
import Gallery from '@/components/Gallery';
import ConfettiBackground from '@/components/ConfettiBackground';

const Index = () => {
  const { toast } = useToast();
  const rsvpRef = useRef<HTMLDivElement>(null);
  
  const scrollToRsvp = () => {
    rsvpRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const copyInviteLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Share this invitation with your friends.",
    });
  };
  
  const sections = [
    { id: "details", label: "Details" },
    { id: "rsvp", label: "RSVP" },
    { id: "gifts", label: "Gifts" },
    { id: "location", label: "Location" },
    { id: "gallery", label: "Gallery" },
  ];
  
  return (
    <div className="relative min-h-screen">
      <ConfettiBackground />
      
      {/* Floating navigation */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white shadow-md border-celebration-gold"
          onClick={copyInviteLink}
        >
          <Copy className="h-4 w-4 text-celebration-gold" />
        </Button>
      </div>
      
      {/* Floating navigation on the left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="space-y-6 flex flex-col items-center">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="w-3 h-3 rounded-full bg-white border border-celebration-gold transition-all hover:w-4 hover:h-4 hover:bg-celebration-gold group relative"
            >
              <span className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
                {section.label}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
      
      {/* Main Content */}
      <Hero onRsvpClick={scrollToRsvp} />
      
      <EventDetails />
      
      <CountdownTimer />
      
      <div ref={rsvpRef}>
        <RsvpForm id="rsvp" />
      </div>
      
      <GiftRegistry />
      
      <LocationMap />
      
      <Gallery />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center text-muted-foreground text-sm bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-4">
            <Heart className="h-5 w-5 text-celebration-gold" />
          </div>
          <p className="mb-2">Sarah's Birthday Celebration</p>
          <p>Created with love for your special occasion</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
