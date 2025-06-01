
import { useState } from "react";
import { Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClothingRack = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const clothingItems = [
    {
      id: 1,
      name: "Vintage Silk Blouse",
      price: "$89",
      color: "Dusty Rose",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Tops"
    },
    {
      id: 2,
      name: "Cropped Cardigan",
      price: "$76",
      color: "Mustard Yellow",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Sweaters"
    },
    {
      id: 3,
      name: "Pleated Midi Skirt",
      price: "$95",
      color: "Sage Green",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Bottoms"
    },
    {
      id: 4,
      name: "Linen Summer Dress",
      price: "$125",
      color: "Cream",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Dresses"
    },
    {
      id: 5,
      name: "Wool Blazer",
      price: "$149",
      color: "Camel",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Jackets"
    },
    {
      id: 6,
      name: "Turtleneck Sweater",
      price: "$68",
      color: "Ivory",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Sweaters"
    }
  ];

  return (
    <section className="bg-cream-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-forest-black mb-4">
            Our Vintage Collection
          </h2>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            Carefully curated pieces that blend timeless elegance with modern sensibility
          </p>
        </div>

        {/* Clothing Rack */}
        <div className="relative">
          {/* Rack Rail */}
          <div className="absolute top-8 left-0 right-0 h-2 bg-warm-brown rounded-full"></div>
          <div className="absolute top-6 left-8 w-2 h-6 bg-warm-brown rounded-full"></div>
          <div className="absolute top-6 right-8 w-2 h-6 bg-warm-brown rounded-full"></div>

          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-4 pt-16">
            <div className="flex space-x-6 min-w-max px-8">
              {clothingItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Hanger */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-8 h-1 bg-warm-brown rounded-full"></div>
                    <div className="absolute top-0 left-1/2 w-1 h-4 bg-warm-brown transform -translate-x-1/2 -translate-y-3"></div>
                  </div>

                  {/* Clothing Card */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-64 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay Actions */}
                      <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center space-x-3 transition-opacity duration-300 ${
                        hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <Button 
                          size="sm"
                          className="bg-muted-mustard hover:bg-vintage-coral text-white rounded-full px-6 transition-all duration-300 transform hover:scale-110"
                        >
                          Try On
                        </Button>
                        <Button 
                          size="icon"
                          variant="outline"
                          className="bg-white hover:bg-soft-beige rounded-full transition-all duration-300 transform hover:scale-110"
                        >
                          <Heart className="w-4 h-4 text-vintage-coral" />
                        </Button>
                      </div>

                      {/* Category Tag */}
                      <div className="absolute top-3 left-3 bg-pastel-blue text-forest-black px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="p-6">
                      <h3 className="font-medium text-forest-black text-lg mb-2">{item.name}</h3>
                      <p className="text-warm-brown text-sm mb-3">{item.color}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-xl font-bold text-forest-black">{item.price}</span>
                        <Button 
                          size="icon"
                          className="bg-soft-beige hover:bg-muted-mustard text-forest-black hover:text-white rounded-full transition-all duration-300"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white rounded-full px-12 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClothingRack;
