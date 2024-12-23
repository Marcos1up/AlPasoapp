import { motion } from "framer-motion";
import { Utensils, Clock, Truck } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Comida de calidad",
    description:
      "Elaborado con ingredientes frescos de origen local todos los días.",
  },
  {
    icon: Clock,
    title: "Servicio rápido",
    description: "De nuestra cocina a tu puerta en 30 minutos o menos",
  },
  {
    icon: Truck,
    title: "Entrega inmediata",
    description: "Sin cargo de envío en pedidos superiores a $20.000",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl text-red-600 font-bold mb-4">
            ¿Por qué elegir AlPaso?
          </h2>
          <p className="text-gray-600">
            Nos comprometemos a entregar no solo comida, sino también una
            experiencia gastronómica excepcional directamente a su puerta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center text-red-600"
            >
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
