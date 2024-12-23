// src/components/ui/toast.tsx

import { useEffect } from "react";

// Toast component props
interface ToastProps {
  message: string;
  onClose: () => void;
  index?: number;
  duration?: number;
}

// Toast component definition
export function Toast({
  message,
  onClose,
  index = 0,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className="fixed right-4 z-50 w-72 p-4 bg-yellow-600 text-white rounded shadow-lg flex justify-between items-center"
      style={{ top: `${80 + index * 110}px` }} // Dynamic top position
    >
      <span className="mr-4">{message}</span>
      <button
        onClick={onClose}
        className="font-bold hover:text-black transition-colors"
      >
        X
      </button>
    </div>
  );
}
