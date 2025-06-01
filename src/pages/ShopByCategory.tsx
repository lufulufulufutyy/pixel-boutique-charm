
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, Package, ShirtIcon, Crown, Gem } from "lucide-react";

const ShopByCategory = () => {
  const categories = [
    {
      title: "Tops",
      icon: <Shirt className="w-8 h-8" />,
      count: "142 items",
      color: "bg-muted-mustard",
      description: "Blouses, sweaters & more"
    },
    {
      title: "Bottoms",
      icon: <Package className="w-8 h-8" />,
      count: "89 items",
      color: "bg-vintage-coral",
      description: "Skirts, pants & shorts"
    },
    {
      title: "Outerwear",
      icon: <ShirtIcon className="w-8 h-8" />,
      count: "67 items",
      color: "bg-warm-brown",
      description: "Jackets, coats & cardigans"
    },
    {
      title: "Dresses",
      icon: <Crown className="w-8 h-8" />,
      count: "94 items",
      color: "bg-pastel-blue",
      description: "Day & evening wear"
    },
    {
      title: "Accessories",
      icon: <Gem className="w-8 h-8" />,
      count: "156 items",
      color: "bg-muted-mustard",
      description: "Bags, jewelry & scarves"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-forest-black mb-4">
            Shop by Category
          </h1>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Discover your perfect pieces in our carefully curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.title}
              className="bg-cream-white border border-soft-beige shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="p-8 text-center">
                <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 text-cream-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-black mb-2 group-hover:text-warm-brown transition-colors">
                  {category.title}
                </h3>
                <p className="text-warm-brown mb-2">{category.description}</p>
                <p className="text-sm text-forest-black/70 mb-6">{category.count}</p>
                <Button className="bg-warm-brown hover:bg-warm-brown/90 text-cream-white px-6 py-2 rounded-full">
                  Browse {category.title}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopByCategory;
