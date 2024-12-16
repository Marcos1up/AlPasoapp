import { Pizza } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Pizza className="h-8 w-8 text-white" />
      <span className="text-2xl font-bold">AlPaso</span>
    </div>
  );
}
