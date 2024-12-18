import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-red-600 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 2 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Logo />
      </motion.div>
    </div>
  );
}
