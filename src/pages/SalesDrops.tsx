
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Clock, Flame } from "lucide-react";

const SalesDrops = () => {
  const saleItems = [
    {
      name: "Embroidered Boho Top",
      price: "$32",
      originalPrice: "$68",
      discount: "53% OFF",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=400&fit=crop",
      timeLeft: "2 days left",
      badge: "Flash Sale"
    },
    {
      name: "Vintage Leather Jacket",
      price: "$89",
      originalPrice: "$145",
      discount: "39% OFF",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop",
      timeLeft: "5 hours left",
      badge: "Limited Drop"
    },
    {
      name: "Pleated Mini Skirt",
      price: "$28",
      originalPrice: "$54",
      discount: "48% OFF",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=400&fit=crop",
      timeLeft: "1 day left",
      badge: "Hot Deal"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-vintage-coral" />
            <h1 className="font-serif text-4xl font-bold text-forest-black">
              Sales & Limited Drops
            </h1>
            <Flame className="w-6 h-6 text-vintage-coral" />
          </div>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Don't miss out on these exclusive deals and limited-time offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saleItems.map((item, index) => (
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
                <div className="absolute top-3 left-3 space-y-2">
                  <span className="bg-vintage-coral text-cream-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <span className="bg-forest-black text-cream-white text-xs font-bold px-3 py-1 rounded-full block">
                    {item.discount}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <Button size="icon" variant="ghost" className="bg-cream-white/80 hover:bg-vintage-coral text-forest-black hover:text-cream-white rounded-full">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-vintage-coral hover:bg-vintage-coral/90 text-cream-white rounded-full">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Grab Deal
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-bold text-forest-black mb-2 group-hover:text-warm-brown transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-vintage-coral">{item.price}</span>
                  <span className="text-sm text-forest-black/50 line-through">{item.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1 text-warm-brown">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{item.timeLeft}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-vintage-coral hover:bg-vintage-coral/90 text-cream-white px-8 py-3 rounded-full">
            View All Sales
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SalesDrops;
