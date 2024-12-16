import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function isBusinessOpen(hours: string): boolean {
  const now = new Date();
  const [open, close] = hours.split(" - ").map((time) => {
    const [hours] = time.split(":").map(Number);

    const isPM = time.includes("PM");
    return hours + (isPM && hours !== 12 ? 12 : 0);
  });

  const currentHour = now.getHours();
  return currentHour >= open && currentHour < close;
}
