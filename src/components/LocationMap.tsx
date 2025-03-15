
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <div className="py-16 px-4" id="location">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Location</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Grand Plaza Hotel, 123 Celebration Avenue, New York, NY 10001
          </p>
        </div>
        
        <Card className="overflow-hidden border-gradient">
          <CardContent className="p-0">
            <div className="aspect-video relative bg-muted">
              {/* This would be a real map in production - using a placeholder for now */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center p-8">
                  <MapPin className="h-10 w-10 text-celebration-gold mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">The Grand Plaza Hotel</h3>
                  <p className="text-muted-foreground mb-6">Interactive map would be displayed here</p>
                  <Button className="bg-celebration-gold hover:bg-celebration-gold/90">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-xl mb-4">Parking & Transportation</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Valet Parking</h4>
                  <p className="text-muted-foreground text-sm">
                    Complimentary valet parking is available for all guests.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Public Transportation</h4>
                  <p className="text-muted-foreground text-sm">
                    The venue is accessible via subway. Take the A, C, or E train to 34th Street station.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Rideshare</h4>
                  <p className="text-muted-foreground text-sm">
                    Dedicated pickup and drop-off points for Uber and Lyft are available at the main entrance.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LocationMap;
