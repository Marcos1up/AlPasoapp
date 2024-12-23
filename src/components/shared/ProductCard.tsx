import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Toast } from "../ui/toast";

import { Star } from "lucide-react";

interface ProductProps {
  product: {
    name: string;
    price: number;
    image: string;
    ingredients: string[];
    rating: number;
  };
}

export function ProductCard({ product }: ProductProps) {
  const [toasts, setToasts] = useState<string[]>([]);

  const handleCart = () => {
    setToasts((prev) => [
      ...prev,
      "Servicio interrumpido. Intente de nuevo más tarde.",
    ]);
  };

  const closeToast = (index: number) => {
    setToasts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-xl text-black font-semibold">{product.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 font-medium">
              {product.rating}
            </span>
          </div>
        </div>
      </CardHeader>

      {/* Product card */}
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          {product.ingredients.join(", ")}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg text-green-600 font-bold">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            onClick={handleCart}
          >
            Añadir al carrito
          </button>
        </div>
      </CardContent>

      {/* Alert message */}
      {toasts.map((msg, i) => (
        <Toast
          key={i}
          message={msg}
          index={i}
          duration={5000}
          onClose={() => closeToast(i)}
        />
      ))}
    </Card>
  );
}
