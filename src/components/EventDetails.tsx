
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Music, Utensils } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-5xl mx-auto" id="details">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Details</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join us for an unforgettable evening of celebration, laughter, and memories.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden border-gradient">
          <CardContent className="p-6">
            <div className="flex items-start mb-4">
              <Calendar className="w-6 h-6 mr-3 text-celebration-gold shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">Date & Time</h3>
                <p className="text-muted-foreground mb-2">Saturday, June 15th, 2024</p>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-celebration-gold" />
                  <span>7:00 PM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-gradient">
          <CardContent className="p-6">
            <div className="flex items-start mb-4">
              <MapPin className="w-6 h-6 mr-3 text-celebration-gold shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">Location</h3>
                <p className="text-muted-foreground mb-2">The Grand Plaza Hotel</p>
                <p className="text-sm">123 Celebration Avenue, New York, NY 10001</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-gradient">
          <CardContent className="p-6">
            <div className="flex items-start mb-4">
              <Utensils className="w-6 h-6 mr-3 text-celebration-gold shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">Food & Drinks</h3>
                <p className="text-muted-foreground mb-2">Gourmet dinner will be served</p>
                <p className="text-sm">Open bar with signature cocktails</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-gradient">
          <CardContent className="p-6">
            <div className="flex items-start mb-4">
              <Music className="w-6 h-6 mr-3 text-celebration-gold shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">Entertainment</h3>
                <p className="text-muted-foreground mb-2">Live band & DJ</p>
                <p className="text-sm">Photo booth and special performances</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground italic">
          "Looking forward to celebrating this special day with all of you!"
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
