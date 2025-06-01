
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Sparkles } from "lucide-react";

const NewArrivals = () => {
  const newItems = [
    {
      name: "Cashmere Blend Sweater",
      price: "$89",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=400&fit=crop",
      isNew: true,
      badge: "Just In"
    },
    {
      name: "Vintage Print Midi Dress",
      price: "$76",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop",
      isNew: true,
      badge: "New"
    },
    {
      name: "Wool Peacoat",
      price: "$124",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=400&fit=crop",
      isNew: true,
      badge: "Fresh"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-muted-mustard" />
            <h1 className="font-serif text-4xl font-bold text-forest-black">
              New Arrivals
            </h1>
            <Sparkles className="w-6 h-6 text-muted-mustard" />
          </div>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Fresh styles just dropped! Be the first to discover our latest vintage-inspired pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newItems.map((item, index) => (
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
                <div className="absolute top-3 left-3">
                  <span className="bg-muted-mustard text-cream-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute top-3 right-3 space-y-2">
                  <Button size="icon" variant="ghost" className="bg-cream-white/80 hover:bg-vintage-coral text-forest-black hover:text-cream-white rounded-full">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-warm-brown hover:bg-warm-brown/90 text-cream-white rounded-full">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Bag
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-bold text-forest-black mb-2 group-hover:text-warm-brown transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-warm-brown">{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-forest-black/50 line-through">{item.originalPrice}</span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-warm-brown hover:bg-warm-brown/90 text-cream-white px-8 py-3 rounded-full">
            View All New Arrivals
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewArrivals;
