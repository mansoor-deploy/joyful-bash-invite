
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Party, Calendar, Gift, MapPin } from 'lucide-react';

interface HeroProps {
  invitee?: string;
  onRsvpClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ invitee = "Guest", onRsvpClick }) => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-celebration-gradient opacity-10 z-0"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 flex justify-center"
      >
        <Party size={60} className="text-celebration-gold" />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground mb-2"
      >
        You're invited to
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient"
      >
        Sarah's Birthday
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl md:text-2xl mb-6 font-serif"
      >
        Let's celebrate together
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col md:flex-row gap-4 items-center justify-center text-muted-foreground mb-10"
      >
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-celebration-gold" />
          <span>Saturday, June 15th, 2024</span>
        </div>
        <div className="hidden md:block">•</div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-celebration-gold" />
          <span>The Grand Plaza Hotel</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Button 
          onClick={onRsvpClick}
          className="bg-celebration-gold hover:bg-celebration-gold/90 text-white font-medium px-8 py-6 rounded-full text-lg transition-all hover:shadow-lg"
        >
          RSVP Now
        </Button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
