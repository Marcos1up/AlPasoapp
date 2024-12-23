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

import hamburger from "@/assets/hamburguesa.webp";
import milanesa from "@/assets/milanesa.webp";
import lomito from "@/assets/lomito.webp";
import pizza from "@/assets/pizza.webp";
import peceto from "@/assets/peceto.webp";
import promo from "@/assets/promo_fernet.webp";

import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Hamburguesa clásica",
    price: 8000,
    image: hamburger.src,
    ingredients: [
      "Carne de vaca",
      "Lechuga",
      "Tomate",
      "Cebolla",
      "Encurtidos",
    ],
    rating: 4.2,
  },
  {
    id: 2,
    name: "Sandwich de milanesa",
    price: 8300,
    image: milanesa.src,
    ingredients: [
      "Milanesa",
      "Huevo frito",
      "Mayonesa casera",
      "Jamón",
      "Lechuga",
      "Tomate",
      "Papas fritas",
    ],
    rating: 4.4,
  },
  {
    id: 3,
    name: "Lomito rústico con papas",
    price: 9000,
    image: lomito.src,
    ingredients: [
      "Lomo",
      "Huevo frito",
      "Mayonesa casera",
      "Jamón",
      "Lechuga",
      "Tomate",
      "Papas fritas",
    ],
    rating: 3.9,
  },
  {
    id: 4,
    name: "Pizza pepperoni",
    price: 9500,
    image: pizza.src,
    ingredients: ["Mozzarella", "Pepperoni", "Jamón", "Champiñones"],
    rating: 3.9,
  },
  {
    id: 5,
    name: "Sandwich de peceto",
    price: 3800,
    image: peceto.src,
    ingredients: ["Peceto", "Mayonesa casera", "Jamón", "Lechuga", "Tomate"],
    rating: 4.9,
  },
  {
    id: 6,
    name: "Promo de Fernet con Coca",
    price: 14000,
    image: promo.src,
    ingredients: ["Fernet 2lt", "Coca Cola 3lt", "Hielo"],
    rating: 4.8,
  },
];

const locations = [
  {
    id: 1,
    name: "Microcentro",
    address: "Av. Corrientes 123",
    hours: "10:00 - 22:00",
    phone: "+54 11 2345-6789",
  },
  {
    id: 2,
    name: "Palermo",
    address: "Calle 4567",
    hours: "16:00 - 23:00",
    phone: "+54 11 3456-7890",
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
      setIsOpen(hour >= 10 && hour < 22); //para abrir entre 10 e 22
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // clasico scroll to top
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

              <div className="flex items-center gap-4 text-black">
                <Badge
                  variant="secondary"
                  className={cn(
                    "font-semibold px-3 py-2 text-green-900 ring-1 ring-inset ring-green-600/20",
                    isOpen ? "bg-green-500" : "bg-yellow-500"
                  )}
                >
                  {isOpen ? "Abierto ahora" : "Cerrado"}
                </Badge>

                <Button
                  variant="secondary"
                  className="hidden md:flex text-black border-white bg-white hover:bg-white/80 rounded-lg"
                  onClick={() =>
                    window.open("https://wa.me/1234567890", "_blank")
                  }
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contáctenos
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
                <h2 className="text-3xl text-red-600 font-bold mb-8 text-center">
                  Nuestro menú
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    //mapear todos los productos
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
                <h2 className="text-3xl text-red-600 font-bold mb-8 text-center">
                  Nuestros locales
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {locations.map(
                    //mapear los datos de locations
                    (location, index) => (
                      <motion.div
                        key={location.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <LocationCard location={location} />
                      </motion.div>
                    )
                  )}
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
                    Llevamos sabores locales a tu puerta.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-4">¡Contáctenos!</h3>
                  <Button
                    variant="outline"
                    className="text-white border-green-900 bg-green-500 hover:bg-green/50"
                    onClick={
                      () => window.open("https://wa.me/1234567890", "_blank") // sin contacto real
                    }
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Soporte de whatsApp
                  </Button>
                </div>

                <div>
                  <h3 className="font-bold mb-4">¡Síganos!</h3>
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
                {/* se agrego el año actual */}
                <p className="text-gray-400">
                  © {new Date().getFullYear()} AlPaso App. All rights reserved.
                </p>{" "}
              </div>
            </div>
          </footer>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
