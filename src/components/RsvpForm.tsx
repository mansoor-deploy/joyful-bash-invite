
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, PartyPopper } from "lucide-react";

interface RsvpFormProps {
  id?: string;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ id = "rsvp" }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "0",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attending: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "RSVP Received!",
      description: "Thank you for your response.",
      duration: 5000,
    });

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="py-16 px-4" id={id}>
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">RSVP</h2>

        {isSubmitted ? (
          <Card className="border-gradient">
            <CardContent className="pt-10 pb-8 px-6 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your RSVP has been received. We're looking forward to
                {formData.attending === "yes" ? " seeing you there!" : " your thoughts!"}
              </p>
              <div className="flex justify-center">
                <PartyPopper className="h-8 w-8 text-celebration-gold animate-float" />
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-gradient">
            <CardHeader>
              <CardTitle className="text-center text-xl">Please respond by June 1st</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Will you be attending?</Label>
                  <RadioGroup
                    value={formData.attending}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="attending-yes" />
                      <Label htmlFor="attending-yes" className="font-normal">
                        Yes, I'll be there
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="attending-no" />
                      <Label htmlFor="attending-no" className="font-normal">
                        Sorry, I can't make it
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maybe" id="attending-maybe" />
                      <Label htmlFor="attending-maybe" className="font-normal">
                        Maybe, I'll let you know
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attending === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of guests (including you)</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.guests === "0" ? "1" : formData.guests}
                      onChange={handleChange}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any dietary restrictions or special notes?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-celebration-gold hover:bg-celebration-gold/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send RSVP"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RsvpForm;
