
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Bookmark } from "lucide-react";

const Lookbook = () => {
  const looks = [
    {
      title: "Autumn Coffee Date",
      description: "Cozy cardigan meets vintage charm",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=500&fit=crop",
      likes: 234,
      tags: ["casual", "autumn", "cozy"]
    },
    {
      title: "Sunday Brunch Vibes",
      description: "Effortless elegance for weekend plans",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=500&fit=crop",
      likes: 189,
      tags: ["brunch", "elegant", "weekend"]
    },
    {
      title: "Vintage Office Look",
      description: "Professional with a retro twist",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop",
      likes: 156,
      tags: ["office", "vintage", "professional"]
    }
  ];

  return (
    <div className="min-h-screen bg-cream-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-forest-black mb-4">
            Lookbook
          </h1>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Get inspired by our curated outfit combinations and styling ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {looks.map((look, index) => (
            <Card 
              key={index}
              className="bg-cream-white border border-soft-beige shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="aspect-[4/5] bg-soft-beige relative overflow-hidden">
                <img 
                  src={look.image} 
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="ghost" className="bg-cream-white/80 hover:bg-cream-white text-forest-black rounded-full">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-cream-white/80 hover:bg-cream-white text-forest-black rounded-full">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-forest-black mb-2">
                  {look.title}
                </h3>
                <p className="text-warm-brown text-sm mb-4">{look.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-vintage-coral">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{look.likes}</span>
                  </div>
                  <Button size="icon" variant="ghost" className="text-forest-black hover:text-warm-brown">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {look.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-soft-beige text-warm-brown px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Lookbook;
