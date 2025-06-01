
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const [currentOutfit, setCurrentOutfit] = useState(0);

  const featuredOutfits = [
    {
      id: 1,
      title: "Autumn Casual Look",
      description: "It's cozy, timeless, and full of vintage charm with a modern twist, perfect for your autumn vibes!",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: ["Brown Argyle Sweater", "Cream High-Waisted Shorts", "Vintage Belt"]
    },
    {
      id: 2,
      title: "Romantic Spring",
      description: "Soft florals and flowing fabrics that capture the essence of a vintage garden party.",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      items: ["Floral Midi Dress", "Pearl Accessories", "Wicker Handbag"]
    }
  ];

  const nextOutfit = () => {
    setCurrentOutfit((prev) => (prev + 1) % featuredOutfits.length);
  };

  const prevOutfit = () => {
    setCurrentOutfit((prev) => (prev - 1 + featuredOutfits.length) % featuredOutfits.length);
  };

  const outfit = featuredOutfits[currentOutfit];

  return (
    <section className="bg-gradient-to-br from-cream-white to-soft-beige py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Outfit Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <img 
                src={outfit.image}
                alt={outfit.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-muted-mustard text-white px-4 py-2 rounded-full font-medium animate-gentle-bounce">
                Featured
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <Button
              onClick={prevOutfit}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-soft-beige border-warm-brown rounded-full"
            >
              <ChevronLeft className="w-5 h-5 text-warm-brown" />
            </Button>
            <Button
              onClick={nextOutfit}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-soft-beige border-warm-brown rounded-full"
            >
              <ChevronRight className="w-5 h-5 text-warm-brown" />
            </Button>
          </div>

          {/* Outfit Description */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -left-4 top-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-white"></div>
              
              <h2 className="font-serif text-3xl font-bold text-forest-black mb-4">
                {outfit.title}
              </h2>
              
              <p className="text-warm-brown text-lg leading-relaxed mb-6">
                {outfit.description}
              </p>

              <div className="space-y-3 mb-8">
                <h3 className="font-medium text-forest-black">This look includes:</h3>
                {outfit.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-vintage-coral rounded-full"></div>
                    <span className="text-forest-black">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button className="bg-muted-mustard hover:bg-vintage-coral text-white rounded-full px-8 transition-all duration-300 transform hover:scale-105">
                  Try On Look
                </Button>
                <Button 
                  variant="outline" 
                  className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white rounded-full px-8 transition-all duration-300"
                >
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
