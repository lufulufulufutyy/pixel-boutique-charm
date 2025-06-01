
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-black text-cream-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Belle Boutique</h3>
            <p className="text-soft-beige leading-relaxed mb-4">
              Discover timeless vintage fashion pieces that blend classic elegance 
              with modern sensibility. Each piece is carefully curated to bring 
              joy and sophistication to your wardrobe.
            </p>
            <div className="flex items-center space-x-2 text-vintage-coral">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current" />
              <span>for vintage lovers</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-soft-beige">
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">New Arrivals</li>
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">Dresses</li>
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">Tops</li>
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">Accessories</li>
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">Sale</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-soft-beige">
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">Size Guide</li>
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">Care Instructions</li>
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">Returns</li>
              <li className="hover:text-muted-mustard cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-warm-brown mt-8 pt-8 text-center text-soft-beige">
          <p>&copy; 2024 Belle Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
