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
    <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
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
      <div className="relative h-full container mx-auto px-12 flex items-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-7">
            Comida deliciosa,{" "}
            <span className="text-red-500">entregada rápidamente</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Tus platos locales favoritos, a solo un clic de distancia. Disfruta
            de lo mejor de la cocina local, directamente en tu puerta.
          </p>

          <div className="flex gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 ">
              Ordene ahora <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black border-white bg-white hover:bg-white/80"
              onClick={onViewMenu}
            >
              Ver Menú
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
