
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload, Sparkles, RotateCcw } from "lucide-react";

const TryOnRoom = () => {
  return (
    <div className="min-h-screen bg-cream-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-forest-black mb-4">
            Virtual Try-On Room
          </h1>
          <p className="text-warm-brown text-lg max-w-2xl mx-auto">
            See how clothes look on you before you buy with our virtual fitting technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-gradient-to-br from-soft-beige to-cream-white border-none shadow-lg p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-16 h-16 text-warm-brown" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-black mb-4">
                  Start Your Virtual Fitting
                </h3>
                <p className="text-warm-brown mb-8">
                  Upload a photo or take a new one to begin your virtual try-on experience
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-warm-brown hover:bg-warm-brown/90 text-cream-white py-3 rounded-full">
                    <Camera className="w-5 h-5 mr-2" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="w-full border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream-white py-3 rounded-full">
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Photo
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-cream-white border border-soft-beige shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-muted-mustard rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cream-white" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-forest-black">AI-Powered Fitting</h4>
                  <p className="text-sm text-warm-brown">Advanced technology for realistic results</p>
                </div>
              </div>
            </Card>

            <Card className="bg-cream-white border border-soft-beige shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-vintage-coral rounded-full flex items-center justify-center">
                  <RotateCcw className="w-6 h-6 text-cream-white" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-forest-black">360° View</h4>
                  <p className="text-sm text-warm-brown">See how clothes fit from every angle</p>
                </div>
              </div>
            </Card>

            <Card className="bg-cream-white border border-soft-beige shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pastel-blue rounded-full flex items-center justify-center">
                  <Camera className="w-6 h-6 text-cream-white" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-forest-black">Save & Share</h4>
                  <p className="text-sm text-warm-brown">Keep your favorite looks and get feedback</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TryOnRoom;
