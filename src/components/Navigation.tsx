
import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  return (
    <nav className="bg-cream-white border-b border-soft-beige sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-serif text-2xl font-bold text-forest-black">
              Belle Boutique
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-brown w-4 h-4" />
              <Input 
                placeholder="Search for vintage treasures..."
                className="pl-10 bg-soft-beige border-none rounded-full focus:ring-2 focus:ring-muted-mustard"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-forest-black hover:text-warm-brown hover:bg-soft-beige rounded-full"
            >
              Menu
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-forest-black hover:text-warm-brown hover:bg-soft-beige rounded-full"
            >
              <Heart className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-forest-black hover:text-warm-brown hover:bg-soft-beige rounded-full"
            >
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-forest-black hover:text-warm-brown hover:bg-soft-beige rounded-full"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
