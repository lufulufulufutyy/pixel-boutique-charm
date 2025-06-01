
import { X, Shirt, Package, Sparkles, Heart, Camera, Tag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  const menuSections = [
    {
      title: "Shop by Category",
      icon: <Shirt className="w-6 h-6" />,
      description: "Explore our curated collections",
      color: "bg-muted-mustard",
      subcategories: ["Tops", "Bottoms", "Outerwear", "Dresses", "Accessories"]
    },
    {
      title: "Lookbook",
      icon: <Sparkles className="w-6 h-6" />,
      description: "Outfit inspiration & styling ideas",
      color: "bg-vintage-coral"
    },
    {
      title: "My Wardrobe",
      icon: <Heart className="w-6 h-6" />,
      description: "Your saved looks & favorites",
      color: "bg-pastel-blue"
    },
    {
      title: "Try On Room",
      icon: <Camera className="w-6 h-6" />,
      description: "Virtual fitting experience",
      color: "bg-warm-brown"
    },
    {
      title: "New Arrivals",
      icon: <Package className="w-6 h-6" />,
      description: "Fresh pieces just for you",
      color: "bg-muted-mustard"
    },
    {
      title: "Sales & Drops",
      icon: <Tag className="w-6 h-6" />,
      description: "Limited time offers",
      color: "bg-vintage-coral"
    }
  ];

  const featuredLook = {
    title: "Today's Featured Look",
    description: "Cozy Autumn Vibes",
    image: "Cropped argyle sweater + cream shorts",
    accent: "Perfect for coffee dates ☕"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-forest-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Content */}
      <div className="relative ml-auto w-full max-w-md bg-cream-white shadow-2xl animate-slide-in-right">
        <div className="h-full overflow-y-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-forest-black">
              Your Closet
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-forest-black hover:text-vintage-coral hover:bg-soft-beige rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Featured Look Card */}
          <Card className="mb-6 bg-gradient-to-br from-soft-beige to-cream-white border-none shadow-lg">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-muted-mustard" />
                <span className="font-serif font-medium text-warm-brown">
                  {featuredLook.title}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-black mb-1">
                {featuredLook.description}
              </h3>
              <p className="text-sm text-warm-brown mb-2">{featuredLook.image}</p>
              <p className="text-xs text-forest-black/70 italic">{featuredLook.accent}</p>
            </div>
          </Card>

          {/* Menu Sections */}
          <div className="space-y-4">
            {menuSections.map((section, index) => (
              <Card 
                key={section.title}
                className="bg-cream-white border border-soft-beige shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${section.color} text-cream-white group-hover:scale-110 transition-transform duration-300`}>
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-forest-black group-hover:text-warm-brown transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-forest-black/70">
                        {section.description}
                      </p>
                      {section.subcategories && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {section.subcategories.map((sub) => (
                            <span 
                              key={sub}
                              className="text-xs bg-soft-beige text-warm-brown px-2 py-1 rounded-full"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="mt-8 text-center">
            <p className="text-sm text-warm-brown font-serif italic">
              "Your style journey starts here ✨"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;
