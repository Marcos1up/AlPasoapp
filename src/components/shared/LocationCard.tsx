import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface LocationProps {
  location: {
    name: string;
    address: string;
    hours: string;
    phone: string;
  };
}

export function LocationCard({ location }: LocationProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <h3 className="text-xl font-semibold">{location.name}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-red-600 mt-1" />
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-600">{location.address}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-red-600 mt-1" />
          <div>
            <p className="font-medium">Hours</p>
            <p className="text-gray-600">{location.hours}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <PhoneIcon className="h-5 w-5 text-red-600 mt-1" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-gray-600">{location.phone}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
