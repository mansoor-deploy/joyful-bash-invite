
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, ShoppingBag, Coffee, Book, Plane, Music } from 'lucide-react';

const GiftRegistry: React.FC = () => {
  const giftIdeas = [
    {
      icon: <ShoppingBag className="h-8 w-8 text-celebration-gold" />,
      title: 'Gift Cards',
      description: 'Amazon, Sephora, or Nordstrom gift cards are always appreciated.',
      link: '#'
    },
    {
      icon: <Coffee className="h-8 w-8 text-celebration-gold" />,
      title: 'Coffee Subscription',
      description: 'A monthly subscription of specialty coffee beans would be delightful.',
      link: '#'
    },
    {
      icon: <Book className="h-8 w-8 text-celebration-gold" />,
      title: 'Books',
      description: 'Any mystery or historical fiction books would be wonderful.',
      link: '#'
    },
    {
      icon: <Plane className="h-8 w-8 text-celebration-gold" />,
      title: 'Travel Fund',
      description: 'Contributions to my travel fund for my dream vacation.',
      link: '#'
    },
    {
      icon: <Music className="h-8 w-8 text-celebration-gold" />,
      title: 'Vinyl Records',
      description: 'Adding to my growing vinyl collection would be amazing.',
      link: '#'
    }
  ];

  return (
    <div className="py-16 px-4 bg-accent/10" id="gifts">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block bg-white p-3 rounded-full mb-6 shadow-md">
          <Gift className="h-8 w-8 text-celebration-gold" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Gift Registry</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Your presence is the best present, but if you'd like to give a gift, here are some ideas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftIdeas.map((gift, index) => (
            <Card key={index} className="overflow-hidden h-full border-gradient hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 mt-2">
                  {gift.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{gift.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{gift.description}</p>
                <Button variant="outline" className="border-celebration-gold text-celebration-gold hover:bg-celebration-gold hover:text-white mt-auto">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10">
          <p className="text-muted-foreground italic">
            No gifts are necessary, your presence is what matters most!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftRegistry;
