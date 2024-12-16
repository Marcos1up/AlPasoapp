import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onViewMenu: () => void;
}

const heroImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081",
];

export function HeroSection({ onViewMenu }: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 animate-carousel-slide"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: `carousel-slide 15s infinite ${index * 5}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Delicious Food, <span className="text-red-500">Delivered Fast</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Your favorite local dishes, just a click away. Experience the best
            of local cuisine, delivered right to your doorstep.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Order Now <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/50"
              onClick={onViewMenu}
            >
              View Menu
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
