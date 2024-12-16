"use client";

import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/Logo";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { ProductCard } from "@/components/shared/ProductCard";
import { LocationCard } from "@/components/shared/LocationCard";
import { HeroSection } from "@/components/shared/HeroSection";
import { AboutSection } from "@/components/shared/AboutSection";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Classic PEPE",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2099",
    ingredients: ["Beef patty", "Lettuce", "Tomato", "Cheese", "Special sauce"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Chicken Wings",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=2080",
    ingredients: ["Chicken wings", "BBQ sauce", "Ranch dip"],
    rating: 4.6,
  },
  {
    id: 3,
    name: "Supreme Pizza",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=2073",
    ingredients: ["Mozzarella", "Pepperoni", "Bell peppers", "Mushrooms"],
    rating: 4.9,
  },
];

const locations = [
  {
    id: 1,
    name: "Downtown",
    address: "123 Main St",
    hours: "10:00 AM - 10:00 PM",
    phone: "+1 234-567-8900",
  },
  {
    id: 2,
    name: "West Side",
    address: "456 Oak Ave",
    hours: "11:00 AM - 11:00 PM",
    phone: "+1 234-567-8901",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const checkOpenStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOpen(hour >= 10 && hour < 22);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen"
        >
          {/* Header */}
          <header className="fixed w-full bg-red-600/95 backdrop-blur-sm text-white z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <button
                onClick={scrollToTop}
                className="transition-transform hover:scale-105"
              >
                <Logo />
              </button>
              <div className="flex items-center gap-4">
                <Badge
                  variant="secondary"
                  className={cn(
                    "font-semibold",
                    isOpen ? "bg-green-500" : "bg-yellow-500"
                  )}
                >
                  {isOpen ? "Open Now" : "Closed"}
                </Badge>
                <Button
                  variant="secondary"
                  onClick={() =>
                    (window.location.href = "https://wa.me/1234567890")
                  }
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <HeroSection
            onViewMenu={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />

          {/* About Section */}
          <AboutSection />

          {/* Products Section */}
          <section id="menu" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Our Menu
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Locations Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Our Locations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <LocationCard location={location} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <Logo />
                  <p className="mt-4 text-gray-400">
                    Bringing local flavors to your doorstep
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Contact Us</h3>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                    onClick={() =>
                      (window.location.href = "https://wa.me/1234567890")
                    }
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp Support
                  </Button>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-white hover:text-red-500 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-red-500 transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-red-500 transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} AlPaso App. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
