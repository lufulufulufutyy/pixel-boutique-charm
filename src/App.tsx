
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ShopByCategory from "./pages/ShopByCategory";
import Lookbook from "./pages/Lookbook";
import MyWardrobe from "./pages/MyWardrobe";
import TryOnRoom from "./pages/TryOnRoom";
import NewArrivals from "./pages/NewArrivals";
import SalesDrops from "./pages/SalesDrops";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<ShopByCategory />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/wardrobe" element={<MyWardrobe />} />
          <Route path="/try-on" element={<TryOnRoom />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/sales" element={<SalesDrops />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
