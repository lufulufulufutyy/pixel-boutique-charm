
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, Share2 } from "lucide-react";

const MyWardrobe = () => {
  const savedItems = [
    {
      name: "Vintage Floral Blouse",
      category: "Tops",
      price: "$48",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=400&fit=crop",
      saved: "2 days ago"
    },
    {
      name: "High-Waisted Denim",
      category: "Bottoms",
      price: "$65",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop",
      saved: "1 week ago"
    },
    {
      name: "Cozy Cardigan",
      category: "Outerwear",
      price: "$72",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=400&fit=crop",
      saved: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-forest-black mb-4">
            My Wardrobe
          </h1>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Your saved favorites and wishlist items all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-cream-white border border-soft-beige shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="aspect-[3/4] bg-soft-beige relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 space-y-2">
                  <Button size="icon" variant="ghost" className="bg-cream-white/80 hover:bg-vintage-coral text-vintage-coral hover:text-cream-white rounded-full">
                    <Heart className="w-4 h-4 fill-current" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-soft-beige text-warm-brown px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-forest-black/50">{item.saved}</span>
                </div>
                <h3 className="font-serif font-bold text-forest-black mb-2 group-hover:text-warm-brown transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-warm-brown">{item.price}</span>
                  <div className="flex gap-1">
                    <Button size="icon" variant="ghost" className="w-8 h-8 text-forest-black hover:text-warm-brown">
                      <Share2 className="w-3 h-3" />
                    </Button>
                    <Button size="icon" variant="ghost" className="w-8 h-8 text-forest-black hover:text-vintage-coral">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-warm-brown hover:bg-warm-brown/90 text-cream-white px-8 py-3 rounded-full">
            Browse More Items
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyWardrobe;
