
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClothingRack from "@/components/ClothingRack";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-white">
      <Navigation />
      <HeroSection />
      <ClothingRack />
      <Footer />
    </div>
  );
};

export default Index;
